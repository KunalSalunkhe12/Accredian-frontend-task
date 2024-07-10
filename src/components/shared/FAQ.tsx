import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question:
      "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer:
      "No, prior experience in Product Management and Project Management is not required to enroll in the program. The courses are designed to accommodate both beginners and professionals looking to enhance their skills.",
  },
  {
    id: 2,
    question: "What is the minimum system configuration required?",
    answer:
      "The minimum system configuration required is: a computer with at least 4GB RAM, a dual-core processor, a reliable internet connection, and an up-to-date web browser (such as Chrome, Firefox, or Safari).",
  },
  {
    id: 3,
    question: "What is the duration of the program?",
    answer:
      "The duration of the program varies by course. Most programs are designed to be completed within 6 to 12 months, depending on the student's pace and schedule.",
  },
  {
    id: 4,
    question: "Is there any financial aid available?",
    answer:
      "Yes, financial aid and flexible payment options are available for eligible students. Please contact our support team for more information on how to apply.",
  },
  {
    id: 5,
    question: "Are there any live sessions or is it all self-paced?",
    answer:
      "The programs offer a mix of live sessions and self-paced learning modules. Live sessions provide opportunities for real-time interaction with instructors and peers, while self-paced modules allow you to learn at your own convenience.",
  },
];

const FAQ = () => {
  return (
    <section>
      <h2>
        Frequently Asked <span className="text-blue">Questions</span>
      </h2>
      <div className="flex gap-10 mt-6">
        <div className="w-64 flex-2 mt-6">
          <img
            className="object-contain"
            src="/images/sky-young-man-thinking.png"
            alt="young man thinking"
          />
        </div>
        <div className="flex-1 w-full">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
