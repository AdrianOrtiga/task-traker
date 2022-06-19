const baseUrl = process.env.NODE_ENV === 'production'
  ? `https://task-traker-server-production.up.railway.app`
  : `http://localhost:8000`

export default baseUrl