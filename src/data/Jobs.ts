/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Video Editor/Motion Designer",
        startDate: "2025-01-20",
        company: "Moxie Pest Control",
        location: "Provo, Utah",
        description: "Worked with the marketing team to create eye-catching content.",
        goals: [
            "Produced 2-3 videos per week including a weekly top-10 sales leaderboard series.",
            "Designed and built over 10 mogrt templates enabling data-driven, scalable video production.",
            "Collaborated with corporate teams to maintain consistent branding across all video output.",
        ],
        currentJob: true,
    },
    {
        title: "Video Editor",
        startDate: "2024-03-10",
        endDate: "2024-09-23",
        company: "Not Enough Nelsons",
        location: "Freelance, Utah",
        description: "High-volume family vlog editing for a 5.42M-subscriber channel. Boosted quality by blending video and motion techniques.",
        goals: [
            "Produced high-retention edits averaging 2.9M views per video across the channel.",
            "Managed 4–8 hours of raw footage per video, efficiently selecting the highest-quality clips.",
            "Applied compositing and motion tracking to create polished, impactful moments throughout.",
        ],
        currentJob: false,
    },
    {  title: "Lead Video Editor",
        startDate: "2022-09-10",
        endDate: "2024-01-12",
        company: "Rose Anvil",
        location: "Salt Lake City, Utah",
        description: "Worked with a team of editors to create niche, high-quality content.",
        goals: [
            "Trained 2 editors and overhauled the workflow, scaling output across multiple channels.",
            "Built custom Motion Graphic Templates enabling efficient, consistent data input across videos.",
            "Enforced brand consistency and editing standards across all content produced by the team.",
        ],
        currentJob: false,
    },
    {   title: "Video Editor",
        startDate: "2021-08-10",
        endDate: "2022-06-12",
        company: "Dava",
        location: "Provo, Utah",
        description: "Edited quality content with steep turnaround times.",
        goals: [
            "Managed 3 videos per day across a wide range of YouTube clients in gaming, lifestyle, and sports.",
            "Adapted quickly to each client's style and brand while maintaining quality under tight deadlines.",
            "Built foundational skills in client communication, asset management, and high-volume delivery.",
        ],
        currentJob: false,
    },
];
export default workExperience;