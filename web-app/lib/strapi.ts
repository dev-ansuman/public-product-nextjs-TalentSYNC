const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchStrapi(path: string, options: RequestInit = {}, useToken = false) {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(useToken && STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
            ...options.headers,
        },
    });

    if (!res.ok) {
        throw new Error(`Strapi fetch failed: ${path}`);
    }

    const response = await res.json();
    return response.data;
}