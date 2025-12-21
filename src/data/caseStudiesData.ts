export interface CaseStudy {
    id: string;
    company: string;
    industry: string;
    size: string;
    logo: string;
    challenge: string;
    solution: string;
    results: {
        metric: string;
        value: string;
    }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: "techcorp-hiring",
        company: "TechCorp",
        industry: "Technology",
        size: "500-1000 employees",
        logo: "💻",
        challenge: "TechCorp was struggling with a 45-day average time-to-hire and losing top candidates to competitors.",
        solution: "Implemented YalHire's AI Video Interviewer and Resume Screener to streamline their hiring process.",
        results: [
            { metric: "Time-to-Hire Reduced", value: "60%" },
            { metric: "Candidate Quality Score", value: "+35%" },
            { metric: "Recruiter Productivity", value: "3x" }
        ],
        testimonial: {
            quote: "YalHire transformed our hiring process. We're now able to identify and hire top talent faster than ever before.",
            author: "Sarah Johnson",
            role: "Head of Talent Acquisition"
        }
    },
    {
        id: "global-consulting",
        company: "Global Consulting Partners",
        industry: "Consulting",
        size: "1000+ employees",
        logo: "📊",
        challenge: "Managing high-volume recruiting across multiple regions with inconsistent interview quality.",
        solution: "Deployed YalHire's AI interviewing suite company-wide with standardized assessment criteria.",
        results: [
            { metric: "Interviews Conducted", value: "10,000+/year" },
            { metric: "Interview Consistency", value: "95%" },
            { metric: "Cost Savings", value: "$500K/year" }
        ],
        testimonial: {
            quote: "The scalability and consistency YalHire provides is unmatched. It's been a game-changer for our global operations.",
            author: "Michael Chen",
            role: "Global HR Director"
        }
    },
    {
        id: "startup-growth",
        company: "InnovateCo",
        industry: "Startup",
        size: "50-100 employees",
        logo: "🚀",
        challenge: "Rapid growth required scaling hiring 3x while maintaining company culture fit.",
        solution: "Leveraged YalHire's AI Phone Screener and customized assessment criteria for culture fit.",
        results: [
            { metric: "Hiring Velocity", value: "3x faster" },
            { metric: "Culture Fit Score", value: "92%" },
            { metric: "Offer Acceptance Rate", value: "+40%" }
        ],
        testimonial: {
            quote: "YalHire helped us scale our team without sacrificing quality or culture. Absolutely essential for our growth.",
            author: "Alex Rodriguez",
            role: "Co-Founder & CEO"
        }
    }
];
