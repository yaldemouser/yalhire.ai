export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    category: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: "ai-recruiting-trends-2025",
        title: "Top AI Recruiting Trends to Watch in 2025",
        excerpt: "Discover how artificial intelligence is transforming the recruitment landscape and what it means for HR professionals.",
        content: "The recruitment industry is experiencing a massive transformation...",
        author: {
            name: "Sarah Martinez",
            avatar: "👩‍💼"
        },
        category: "Trends",
        date: "2024-12-15",
        readTime: "5 min read",
        image: "/blog/ai-trends.jpg",
        featured: true
    },
    {
        id: "reduce-time-to-hire",
        title: "How to Reduce Time-to-Hire by 60% with AI",
        excerpt: "Learn practical strategies to accelerate your hiring process without compromising on candidate quality.",
        content: "Time-to-hire is a critical metric for any recruitment team...",
        author: {
            name: "Michael Chen",
            avatar: "👨‍💻"
        },
        category: "Best Practices",
        date: "2024-12-10",
        readTime: "7 min read",
        image: "/blog/time-to-hire.jpg",
        featured: true
    },
    {
        id: "video-interview-best-practices",
        title: "Video Interview Best Practices for Remote Hiring",
        excerpt: "Master the art of conducting effective video interviews in a remote-first world.",
        content: "Remote hiring is here to stay, and video interviews are essential...",
        author: {
            name: "Emily Rodriguez",
            avatar: "👩‍🎓"
        },
        category: "Remote Hiring",
        date: "2024-12-05",
        readTime: "6 min read",
        image: "/blog/video-interviews.jpg"
    },
    {
        id: "ai-bias-prevention",
        title: "Preventing Bias in AI-Powered Recruitment",
        excerpt: "Understanding and mitigating bias in AI recruiting tools to ensure fair hiring practices.",
        content: "As AI becomes more prevalent in recruitment, addressing bias is crucial...",
        author: {
            name: "Dr. James Wilson",
            avatar: "👨‍🔬"
        },
        category: "Ethics",
        date: "2024-11-28",
        readTime: "8 min read",
        image: "/blog/ai-bias.jpg"
    },
    {
        id: "candidate-experience-matters",
        title: "Why Candidate Experience Matters More Than Ever",
        excerpt: "How providing an excellent candidate experience can transform your employer brand and attract top talent.",
        content: "In today's competitive talent market, candidate experience is paramount...",
        author: {
            name: "Lisa Thompson",
            avatar: "👩‍💼"
        },
        category: "Candidate Experience",
        date: "2024-11-20",
        readTime: "5 min read",
        image: "/blog/candidate-experience.jpg"
    },
    {
        id: "technical-screening-guide",
        title: "The Complete Guide to Technical Screening",
        excerpt: "Everything you need to know about effectively screening technical candidates with AI assistance.",
        content: "Technical screening is one of the most challenging aspects of recruitment...",
        author: {
            name: "Alex Kumar",
            avatar: "👨‍💻"
        },
        category: "Technical Hiring",
        date: "2024-11-15",
        readTime: "10 min read",
        image: "/blog/technical-screening.jpg"
    }
];

export const categories = [
    "All",
    "Trends",
    "Best Practices",
    "Remote Hiring",
    "Ethics",
    "Candidate Experience",
    "Technical Hiring"
];
