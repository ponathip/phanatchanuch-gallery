const API_URL = import.meta.env.PUBLIC_API_URL;

export async function apiFetch<T = any>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);

    // console.log("API_URL:", API_URL);
    // console.log("FETCH:", res);

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}

export async function apiData<T>(path: string): Promise<T> {
  const res = await apiFetch<{ data: T }>(path);
  return res.data;
}