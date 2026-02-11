
export interface AIResponse {
    text: string;
    actions?: {
        label: string;
        href: string;
    }[];
}

export const aiService = {
    async query(prompt: string): Promise<AIResponse> {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock response logic based on keywords
        const lowerPrompt = prompt.toLowerCase();

        if (lowerPrompt.includes("schedule") || lowerPrompt.includes("interview")) {
            return {
                text: "I can help you schedule an interview. Which type of interview would you like to set up?",
                actions: [
                    { label: "Video Interview", href: "/ai-video-interviewer" },
                    { label: "Phone Screen", href: "/ai-phone-screener" },
                ],
            };
        }

        if (lowerPrompt.includes("resume") || lowerPrompt.includes("screen")) {
            return {
                text: "I can assist with screening resumes. Please upload the resumes you'd like me to analyze.",
                actions: [
                    { label: "Upload Resumes", href: "/ai-resume-screener" },
                ],
            };
        }

        if (lowerPrompt.includes("price") || lowerPrompt.includes("cost")) {
            return {
                text: "Our pricing is flexible to suit your needs. You can view our detailed pricing plans here.",
                actions: [
                    { label: "View Pricing", href: "/pricing" },
                ],
            };
        }

        // Default response
        return {
            text: "I can help with that. As an AI recruiting assistant, I can screen candidates, conduct interviews, and more. What specific task would you like me to handle?",
            actions: [
                { label: "Explore Features", href: "/#features" },
            ],
        };
    },
};
