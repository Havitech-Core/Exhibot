"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Exhibot?",
    answer: "Exhibot is a robotics platform revolutionizing tech accessibility in Nigeria and beyond. It's the start of your innovation story.",
  },
  {
    question: "Is Exhibot available globally?",
    answer: "Currently focused on Nigeria, global expansion is in the roadmap – join the journey!",
  },
  {
    question: "Who can use Exhibot?",
    answer: "Anyone from tech enthusiasts, schools, developers, to hardware startups. Be part of the adventure.",
  },
  {
    question: "How do I get involved?",
    answer: "Follow us on socials or reach out directly to explore collaboration opportunities. Let's build the future together.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white text-black py-12 sm:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <h2 className="text-center text-3xl sm:text-[3rem] md:text-[3rem] font-face text-blue-700 tracking-wide mb-8 sm:mb-12" style={{ fontFamily: 'Exima Geometric' }}>
          Unravel the Mysteries
        </h2>
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border text-[#F97216] rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_0_20px] cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center text-lg sm:text-xl font-semibold">
                <span>{faq.question}</span>
                <span className="text-blue-700 text-2xl sm:text-3xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <motion.div
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: openIndex === index ? 500 : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-lg sm:text-xl text-black overflow-hidden"
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FaqSection;
