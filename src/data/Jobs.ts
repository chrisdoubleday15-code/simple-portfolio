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
        location: "United States",
        description: "Worked with the marketing team to create eye-catching content.",
        goals: [
            "Created high quality videos that engaged and inspired door-to-door salesmen.",
            "Designed motion templates and graphics for various conferences.",
            "Worked closely with corporate teams to maintain consistent branding company-wide.",
        ],
        currentJob: true,
    },
    {
        title: "Video Editor",
        startDate: "2021-03-10",
        endDate: "2024-09-23",
        company: "Not Enough Nelsons",
        location: "United States",
        description: "Boosted YouTube channel quality by blending video and motion techniques.",
        goals: [
            "Produced fun, fast-paced edits that kept audiences engaged.",
            "Managed 4-8 hours of raw footage per video, efficiently selecting the highest-quality clips.",
            "Utilized compositing and tracking to create memorable, impactful moments throughout.",
        ],
        currentJob: false,
    },
    {  title: "Lead Video Editor",
        startDate: "2022-03-10",
        endDate: "2024-07-12",
        company: "Rose Anvil",
        location: "United States",
        description: "Worked with a team of editors to create niche, high-quality content.",
        goals: [
            "Ensured editing styles remained consistent, training team members on frequently used techniques.",
            "Created custom Motion Graphic Templates to allow efficient data input in videos.",
            "Animated various logos and graphics in After Effects, applying core animation principles.",
        ],
        currentJob: false,
    },
    {   title: "Video Editor",
        startDate: "2020-08-10",
        endDate: "2021-12-12",
        company: "Dava",
        location: "United States",
        description: "Edited quality content with steep turnaround times.",
        goals: [
            "Managed a wide range of clients, communicating clearly and effectively with each.",
            "Worked on multiple projects simultaneously in a high-pressure environment.",
            "Adapted quickly to match each client’s branding and style.",
        ],
        currentJob: false,
    },
];
export default workExperience;