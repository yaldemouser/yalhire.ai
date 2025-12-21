export interface HelpArticle {
    id: string;
    title: string;
    content: string;
    category: string;
    popular?: boolean;
}

export const helpArticles: HelpArticle[] = [
    {
        id: "getting-started",
        title: "Getting Started with YalHire",
        content: "Learn how to set up your account and start using YalHire's AI-powered recruiting tools...",
        category: "Getting Started",
        popular: true
    },
    {
        id: "create-video-interview",
        title: "How to Create a Video Interview",
        content: "Step-by-step guide to setting up AI video interviews for your candidates...",
        category: "Video Interviews",
        popular: true
    },
    {
        id: "resume-screening",
        title: "Using AI Resume Screening",
        content: "Maximize efficiency with our AI-powered resume screening and ranking system...",
        category: "Resume Screening",
        popular: true
    },
    {
        id: "integrate-ats",
        title: "Integrating with Your ATS",
        content: "Connect YalHire with your existing Applicant Tracking System...",
        category: "Integrations"
    },
    {
        id: "manage-team",
        title: "Managing Your Team",
        content: "Add team members, set permissions, and collaborate effectively...",
        category: "Account Management"
    },
    {
        id: "coding-assessments",
        title: "Setting Up Coding Assessments",
        content: "Create technical interviews with our AI coding interviewer...",
        category: "Coding Interviews"
    }
];

export const helpCategories = [
    "All",
    "Getting Started",
    "Video Interviews",
    "Resume Screening",
    "Coding Interviews",
    "Integrations",
    "Account Management"
];
