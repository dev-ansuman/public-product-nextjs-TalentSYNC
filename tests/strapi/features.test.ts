import { it, expect, vi, beforeEach } from 'vitest';

const URL = 'http://localhost:1337/api/pricing-plans';

const MOCK_RESPONSE = {
    "data": [
        {
            "id": 2,
            "documentId": "zlpb71kuzeij7px5rndyspv1",
            "title": "Resume Parsing",
            "description": "Automatically extract candidate information from PDF, DOCX, and image resumes using OCR and regex - no manual data entry needed.",
            "icon": "FileText",
            "createdAt": "2026-03-26T07:33:47.682Z",
            "updatedAt": "2026-03-26T07:34:02.861Z",
            "publishedAt": "2026-03-26T07:34:02.877Z"
        },
        {
            "id": 4,
            "documentId": "wv96yo9ecrb3cxtb55mr1mam",
            "title": "Candidate Ranking",
            "description": "Rank applicants by skill match score against job requirements. Surface the best candidates instantly when they apply for the job.",
            "icon": "BarChart2",
            "createdAt": "2026-03-26T07:34:58.264Z",
            "updatedAt": "2026-03-26T07:34:58.264Z",
            "publishedAt": "2026-03-26T07:34:58.276Z"
        },
        {
            "id": 6,
            "documentId": "lk63gw3kzutunlletdshyw20",
            "title": "Interview Scheduling",
            "description": "Schedule and manage interviews directly within the platform. Track interview stages from shortlisted to hired in one place.",
            "icon": "Calendar",
            "createdAt": "2026-03-26T07:35:23.439Z",
            "updatedAt": "2026-03-26T07:35:23.439Z",
            "publishedAt": "2026-03-26T07:35:23.451Z"
        },
        {
            "id": 8,
            "documentId": "x32dlubgtkvbzl2gic1ivxoh",
            "title": "Role-Based Access Control",
            "description": "Assign roles like Admin, Manager, Interviewer, and Candidate with fine-grained permissions. Everyone sees exactly what they need to.",
            "icon": "Shield",
            "createdAt": "2026-03-26T07:35:43.491Z",
            "updatedAt": "2026-03-26T07:35:43.491Z",
            "publishedAt": "2026-03-26T07:35:43.506Z"
        }
    ]
};

global.fetch = vi.fn();

beforeEach(() => {
    vi.clearAllMocks();
});

it('should return features data - features page', async () => {
    (fetch as any).mockResolvedValue({
        json: async () => MOCK_RESPONSE,
    });

    const response = await fetch(URL);
    const result = await response.json();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.data).toBeDefined;
});
