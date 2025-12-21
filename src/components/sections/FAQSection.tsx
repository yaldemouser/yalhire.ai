import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI Interviewer handle large volumes of applicants?",
      answer: "Our AI recruiter can manage a large number of applicants through our AI phone screening and video interviews, while keeping the process consistent, fair, and scalable. The system can conduct unlimited concurrent interviews, ensuring no bottlenecks in your hiring process.",
    },
    {
      question: "Which tools can the AI Interviewer integrate with?",
      answer: "Our AI interview software can be easily integrated with platforms like Slack, WhatsApp, and major ATS systems depending upon your plan, allowing you to receive updates quickly and keep your hiring process smooth.",
    },
    {
      question: "Do you offer a free trial for your AI recruiting software?",
      answer: "We offer a paid pilot program to explore our AI recruiting tools. This allows you to test the full capabilities of our platform with real candidates before committing to a subscription.",
    },
    {
      question: "Is YalHire SOC 2 Type 2 compliant?",
      answer: "Yes, YalHire's Recruitment Automation Software is SOC 2 Type 2 compliant, which means we follow strict standards to maintain your data safe and secure. We also maintain ISO 27001 certification.",
    },
    {
      question: "How many programming languages are supported?",
      answer: "Our AI coding interview tool supports over 20 popular programming languages, including Python, Java, JavaScript, TypeScript, Kotlin, Go, Rust, and PHP, making it easier to test different roles and skill sets.",
    },
    {
      question: "What is the difference between a One-way and a Two-way interview?",
      answer: "In a one-way interview, candidates answer predefined questions at their convenience. In a two-way interview, the AI conducts a live, interactive conversation and asks follow-up questions based on the candidate's responses, creating a more dynamic assessment experience.",
    },
    {
      question: "How does the AI Resume Screener rank candidates?",
      answer: "Our resume screening software ranks candidates by evaluating resumes against the job criteria and provides a fit score, helping you to shortlist the candidates quickly. It analyzes skills, experience, education, and job tenure to provide comprehensive rankings.",
    },
    {
      question: "What types of coding tasks can I conduct in the coding interviews?",
      answer: "With our coding assessment platform, you can conduct three types of interviews: debugging challenges, full coding problems, and code completion tests. Each type evaluates different aspects of a candidate's technical abilities.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="text-gradient-lime">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold py-6 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
