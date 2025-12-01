/// <reference types="vite/client" />

export interface QueryResponse {
  answer: string;
  sources?: { doc_id: string; score: number; text: string }[];
  time_ms?: number;
}