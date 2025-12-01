import axios from 'axios';

const API_BASE = (import.meta.env.VITE_API_URL as string) || 'http://localhost:8000';
export const api = axios.create({ baseURL: API_BASE, timeout: 30000 });

export async function queryServer(query: string) {
  const res = await api.post('/api/query', { query });
  return res.data;
}