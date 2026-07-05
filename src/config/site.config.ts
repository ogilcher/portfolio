export interface MediaLinks {
    github: string;
    linkedIn: string;
    email: string;
}

export interface JobInformation {
    mainTitle: string;
    jobTitles: string[];
    descriptionOfWork: string;
}

export interface Snapshot {
    currentFocus: string;
    education: string;
    graduation: string;
    gpa: string;
    seeking: string;
    longTermGoal: string;
}

export interface AboutSection {
    snapshot: Snapshot;
}

export enum ExperienceType { job, internship, project }

export interface Experience {
    period: string;
    role: string;
    company: string;
    description: string;
    highlights: string[];
    type: ExperienceType;
}

export interface Skill {
    title: string;
    icon: string;
    skills: string[];
}

export interface Config {
    firstName: string;
    lastName: string;

    mediaLinks: MediaLinks;
    jobInformation: JobInformation;
    snapshot: Snapshot;

    experiences: Experience[];
    skills: Skill[];
}

export const config : Config = {
    firstName: "Oliver",
    lastName: "Gilcher",

    // TODO: Integrate this cleanly
    // backgroundPrimary: "",
    // backgroundSecondary: "",

    mediaLinks: {
        github: "https://www.github.com/ogilcher",
        linkedIn: "https://www.linkedin.com/in/oliver-gilcher",
        email: "mailto:olivergilcher@gmail.com",
    },

    jobInformation: {
        mainTitle: "Software Engineer",
        jobTitles: [
            "Backend Engineer",
            "Platform Engineer",
            "Systems Engineer",
            "Software Architecture Enthusiast"
        ],
        descriptionOfWork:
            "I build backend systems, developer platforms, and deployment\n" +
            "infrastructure with a focus on distributed systems, cloud\n" +
            "technologies, and software architecture."
    },

    snapshot: {
        currentFocus: "Backend & Platform Engineering",
        education: "B.S. Computer Science",
        graduation: "April 2027",
        gpa: "4.0",
        seeking: "Software Engineer I / New Grad",
        longTermGoal: "Software Architect"
    },

    experiences: [
        {
            period: "2026 - Present",
            role: "Founder & Lead Software Engineer",
            company: "LunarLabs",
            description:
                "Designing internal software systems for client operations, deployment workflows, " +
                "and engineering automation.",
            highlights: [
                "Built Mission Control, a control-plane API for projects, clients, deployments, launch workflows," +
                " and team operations.",
                "Designed deployment infrastructure around distributed agents, node health, deployment history," +
                " and manual launch actions.",
                "Led technical direction across backend architecture, frontend systems, and internal tooling.",
            ],
            type: ExperienceType.job,
        },
    ],

    skills: [
        {
            title: "Backend",
            icon: "bi-server",
            skills: [
                "Go",
                "FastAPI",
                "REST APIs",
                "PostgreSQL",
                "Authentication",
                "SQL"
            ]
        },
        {
            title: "Infrastructure",
            icon: "bi-hdd-network",
            skills: [
                "Docker",
                "Linux",
                "CI/CD",
                "Git",
                "Deployment Automation",
                "Monitoring"
            ]
        },
        {
            title: "Languages",
            icon: "bi-code-square",
            skills: [
                "Go",
                "TypeScript",
                "Swift",
                "Python",
                "C++",
                "Java",
            ],
        },
        {
            title: "Currently Learning",
            icon: "bi-lightbulb",
            skills: [
                "Kubernetes",
                "Terraform",
                "AWS",
                "Distributed Systems",
                "Software Architecture",
                "Cloud Platforms",
            ],
        },
    ]
}
