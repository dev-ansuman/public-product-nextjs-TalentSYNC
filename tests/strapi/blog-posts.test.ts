import { it, expect, vi, beforeEach } from 'vitest';

const URL = 'http://localhost:1337/api/blog-posts';

const MOCK_RESPONSE = {
    "data": [
        {
            "id": 3,
            "documentId": "c7dmkg8rht3hhfqib75gg361",
            "title": "How automation is Transforming the Recruitment Process",
            "slug": "how-automation-is-transforming-the-recruitment-process",
            "description": "Discover how automation tools are eliminating manual screening, reducing time-to-hire, and helping teams make better hiring decisions.",
            "body": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Recruitment has always been one of the most time-consuming functions in any organization. HR teams spend countless hours screening resumes, scheduling interviews, and tracking candidate progress, often across multiple spreadsheets and email threads. Modern recruitment platforms now automatically parse resumes, extract structured data, and rank candidates by how well their skills match a job's requirements. This means a hiring manager can open their dashboard and immediately see a ranked list of applicants, no manual screening required. Interview scheduling, which once involved back-and-forth emails, can now be handled automatically based on calendar availability. Candidates get a better experience, and recruiters get their time back. At TalentSYNC, we built our entire platform around this idea, that technology should handle the repetitive work so humans can focus on what they do best- building relationships and making thoughtful hiring decisions."
                        }
                    ]
                }
            ],
            "published_date": "2026-03-26T07:00:00.000Z",
            "createdAt": "2026-03-26T07:44:31.942Z",
            "updatedAt": "2026-03-26T07:46:23.626Z",
            "publishedAt": "2026-03-26T07:46:23.653Z"
        },
        {
            "id": 5,
            "documentId": "f6tpovvrj65rylc8c62qa0ms",
            "title": "5 Signs Your Hiring Process Needs an Upgrade",
            "slug": "5-signs-your-hiring-process-needs-an-upgrade",
            "description": "If your team is still juggling spreadsheets and email threads to manage candidates, it might be time to rethink your recruitment workflow.",
            "body": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Most companies donot realize their hiring process is broken until they lose a great candidate to a faster-moving competitor. Here are five signs it's time to upgrade. First, if your recruiters spend more than 30% of their time on administrative tasks like data entry, scheduling, and status updates, that's a problem automation can solve. Second, if candidates regularly go weeks without hearing back, your pipeline has a bottleneck. Third, if you are making hiring decisions based on gut feeling rather than structured data, you are leaving quality hires on the table. Fourth, if your team uses more than two tools to manage a single candidate's journey, your workflow is fragmented. Fifth, if you have no visibility into metrics like time-to-hire or offer acceptance rate, you cannot improve what you cannot measure. TalentSYNC addresses all five of these by centralizing your entire recruitment workflow in one platform, from job posting to offer letter."
                        }
                    ]
                }
            ],
            "published_date": "2026-03-26T07:30:00.000Z",
            "createdAt": "2026-03-26T07:48:47.443Z",
            "updatedAt": "2026-03-26T07:48:47.443Z",
            "publishedAt": "2026-03-26T07:48:47.459Z"
        },
        {
            "id": 7,
            "documentId": "urb5lpo90t4oyplzzrbbcru8",
            "title": "Understanding Role-Based Access in Recruitment Platforms",
            "slug": "understanding-role-based-access-in-recruitment-platforms",
            "description": "Not everyone on your team needs to see everything. Here's why role-based access control is essential in a modern recruitment platform.",
            "body": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "When multiple teams are involved in hiring, HR, department managers, interviewers, and executives, controlling who sees what becomes critical. A candidate should be able to view their own application status but not see other applicants. An interviewer should be able to submit feedback but not change a candidate's final status. A manager should be able to post jobs and review applicants but not access any admin settings. This is exactly what role-based access control (RBAC) solves. By assigning specific roles with specific permissions, you ensure that sensitive data stays protected and that every user only sees what's relevant to their job. TalentSYNC implements four roles out of the box, Admin, Manager, Interviewer, and Candidate, each with carefully scoped permissions. Admins have full control. Managers handle jobs and applications. Interviewers access only their scheduled interviews. Candidates see only their own profile and applications. This structure keeps your data clean, your workflows clear, and your hiring process auditable."
                        }
                    ]
                }
            ],
            "published_date": "2026-03-26T09:30:00.000Z",
            "createdAt": "2026-03-26T07:51:10.970Z",
            "updatedAt": "2026-03-26T07:51:10.970Z",
            "publishedAt": "2026-03-26T07:51:10.989Z"
        }
    ]
};

global.fetch = vi.fn();

beforeEach(() => {
    vi.clearAllMocks();
});

it('should return posted blogs data - blogs page', async () => {
    (fetch as any).mockResolvedValue({
        json: async () => MOCK_RESPONSE,
    });

    const response = await fetch(URL);
    const result = await response.json();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.data).toBeDefined;
});
