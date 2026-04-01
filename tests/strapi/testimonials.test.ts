import { it, expect, vi, beforeEach } from 'vitest';

const URL = 'http://localhost:1337/api/testimonials';

const MOCK_RESPONSE = {
    "data": [
        {
            "id": 8,
            "documentId": "egss7vuc8vdnebb4iph2g2i4",
            "name": "Andy Jassy",
            "role": "Director and CEO",
            "company": "Amazon",
            "content": "Finally a recruitment tool that our whole team actually uses. The role based access makes collaboration seamless.",
            "avatar_initial": "AJ",
            "createdAt": "2026-03-26T09:19:51.644Z",
            "updatedAt": "2026-03-26T09:20:19.111Z",
            "publishedAt": "2026-03-26T09:20:19.130Z"
        },
        {
            "id": 9,
            "documentId": "htrx0k3yfqq8xx20oxm29asd",
            "name": "Sundar Pichai",
            "role": "Director and CEO",
            "company": "Google",
            "content": "The candidate ranking feature is a game changer. We shortlist faster and make better decisions with skill matching feature.",
            "avatar_initial": "SP",
            "createdAt": "2026-03-26T09:17:55.797Z",
            "updatedAt": "2026-03-26T09:20:28.592Z",
            "publishedAt": "2026-03-26T09:20:28.612Z"
        },
        {
            "id": 10,
            "documentId": "svx9rdj9b4og7zaw7gfls9dd",
            "name": "Kiran K Singh",
            "role": "VP, Talent Acquisition",
            "company": "Mindfire",
            "content": "TalentSYNC helped us to filter out candidates based on their experience and skills without any hassle.",
            "avatar_initial": "KS",
            "createdAt": "2026-03-26T09:16:18.760Z",
            "updatedAt": "2026-03-26T09:20:37.798Z",
            "publishedAt": "2026-03-26T09:20:37.812Z"
        }
    ]
};

global.fetch = vi.fn();

beforeEach(() => {
    vi.clearAllMocks();
});

it('should return testimonials section data - landing page', async () => {
    (fetch as any).mockResolvedValue({
        json: async () => MOCK_RESPONSE,
    });

    const response = await fetch(URL);
    const result = await response.json();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.data).toBeDefined;
});
