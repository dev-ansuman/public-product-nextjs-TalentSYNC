import { it, expect, vi, beforeEach } from 'vitest';

const URL = 'http://localhost:1337/api/pricing-plans';

const MOCK_RESPONSE = {
    "data": [
        {
            "id": 2,
            "documentId": "wz4haba4ulg0ithcxztpe4q2",
            "name": "Free",
            "price": 0,
            "description": "Perfect for small teams just getting started with structured hiring.",
            "features": [
                "Up to 5 job postings",
                "Basic resume parsing",
                "Candidate tracking",
                "Email support"
            ],
            "is_popular": null,
            "cta_text": "Get Started Free",
            "createdAt": "2026-03-26T07:37:00.486Z",
            "updatedAt": "2026-03-26T07:37:00.486Z",
            "publishedAt": "2026-03-26T07:37:00.505Z"
        },
        {
            "id": 4,
            "documentId": "ad4a4tbtcumbz2bysnsbuew6",
            "name": "Pro",
            "price": 999,
            "description": "For growing teams that need advanced automation and deeper hiring insights.",
            "features": [
                "Unlimited job postings",
                "AI resume parsing",
                "Candidate skill ranking",
                "Interview scheduling",
                "Analytics dashboard",
                "Priority support"
            ],
            "is_popular": true,
            "cta_text": "Start Free Trial",
            "createdAt": "2026-03-26T07:37:44.309Z",
            "updatedAt": "2026-03-26T07:37:44.309Z",
            "publishedAt": "2026-03-26T07:37:44.326Z"
        },
        {
            "id": 6,
            "documentId": "tfl25iv96hifg3gvdhnk0h6b",
            "name": "Enterprise",
            "price": 2999,
            "description": "For large organizations that need full control, custom integrations, and dedicated support.",
            "features": [
                "Everything in Pro",
                "Custom role permissions",
                "Export reports (PDF/XLSX)",
                "API access",
                "SSO login",
                "Dedicated account manager"
            ],
            "is_popular": false,
            "cta_text": "Contact Sales",
            "createdAt": "2026-03-26T07:38:18.328Z",
            "updatedAt": "2026-03-26T07:38:18.328Z",
            "publishedAt": "2026-03-26T07:38:18.341Z"
        }
    ]
};

global.fetch = vi.fn();

beforeEach(() => {
    vi.clearAllMocks();
});

it('should return pricing data - pricing page', async () => {
    (fetch as any).mockResolvedValue({
        json: async () => MOCK_RESPONSE,
    });

    const response = await fetch(URL);
    const result = await response.json();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.data).toBeDefined;
});
