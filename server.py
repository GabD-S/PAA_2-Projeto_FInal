import os
import sys

# Adiciona o diretório src ao path para permitir a importação do sqlite_rag
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), "src"))

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlite_rag.sqliterag import SQLiteRag

from contextlib import asynccontextmanager

# Initialize RAG instance
# We use a global variable to hold the RAG instance
rag: SQLiteRag = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global rag
    db_path = os.environ.get("SQLITE_RAG_DATABASE", "./sqliterag.sqlite")
    print(f"Initializing SQLite RAG with database: {db_path}")
    try:
        rag = SQLiteRag.create(db_path, require_existing=True)
    except FileNotFoundError:
        print(f"Warning: Database not found at {db_path}. Please run ingestion first.")
        # We might want to allow starting without a DB, but search will fail
        # For now, let's try to create it if it doesn't exist, or just fail gracefully later
        rag = SQLiteRag.create(db_path, require_existing=False)
    yield

# Initialize FastAPI app
app = FastAPI(title="SQLite RAG API", lifespan=lifespan)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class QueryRequest(BaseModel):
    query: str

@app.post("/api/query")
async def query_rag(request: QueryRequest):
    global rag
    if not rag:
        raise HTTPException(status_code=500, detail="RAG system not initialized")
    
    try:
        # Perform search
        results = rag.search(request.query, top_k=5)
        
        if not results:
            return {"answer": "Não encontrei documentos relevantes para sua pergunta."}
            
        # Format the answer
        # We'll construct a markdown response
        answer = "### Resultados Encontrados:\n\n"
        
        for i, result in enumerate(results, 1):
            # Use URI or a generic title
            source = result.document.uri or f"Documento {result.document.id}"
            # Clean up content slightly
            content = result.chunk_content.strip()
            
            answer += f"**{i}. {os.path.basename(source)}** (Relevância: {result.combined_rank:.2f})\n"
            answer += f"> {content}\n\n"
            
        return {"answer": answer}
        
    except Exception as e:
        print(f"Error processing query: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
