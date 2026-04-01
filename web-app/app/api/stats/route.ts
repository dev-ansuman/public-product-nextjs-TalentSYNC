import { NextResponse } from 'next/server';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function GET() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/subscribers`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json({ subscribers: 0 }, { status: 200 });
    }

    const data = await res.json();
    const count = data?.meta?.pagination?.total ?? data?.data?.length ?? 0;

    return NextResponse.json({ subscribers: count }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ subscribers: 0 }, { status: 200 });
  }
}