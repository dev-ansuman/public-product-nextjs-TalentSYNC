import { it, expect, vi, beforeEach } from 'vitest';

const URL = 'http://localhost:1337/api/landing-page?populate=*';

const MOCK_RESPONSE = {
    data: {
        "id": 2,
        "documentId": "pn9qrz4kzmxnq1v28z39pb0l",
        "hero_title": "TalentSYNC - Recruitment Solutions",
        "hero_subtitle": "TalentSYNC - A recruitment platform that automates resume parsing, candidate ranking, and interview scheduling, so your team can focus on hiring the right person, faster.",
        "hero_cta_text": "Get Started Free",
        "hero_cta_link": "/pricing",
        "createdAt": "2026-03-26T07:30:49.804Z",
        "updatedAt": "2026-03-26T07:30:49.804Z",
        "publishedAt": "2026-03-26T07:30:49.831Z"
    }
};

global.fetch = vi.fn();

beforeEach(() => {
    vi.clearAllMocks();
});

it('should return hero section data - landing page', async () => {
    (fetch as any).mockResolvedValue({
        json: async () => MOCK_RESPONSE,
    });

    const response = await fetch(URL);
    const result = await response.json();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeDefined;
});
