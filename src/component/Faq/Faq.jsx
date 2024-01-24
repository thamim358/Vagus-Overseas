// FAQSection.js
import React from 'react';
import { Collapse } from 'antd';
import './faq.scss'; // Your custom styles

const { Panel } = Collapse;

const FAQSection = () => {
    const faqData = [
        {
          question: 'What are the basic requirements to apply for universities abroad?',
          answer: 'Typically, universities abroad require standardized test scores (like SAT, GRE, or TOEFL/IELTS for English proficiency), transcripts, recommendation letters, a statement of purpose, and sometimes a portfolio for certain programs.'
        },
        {
          question: 'How long does the application process for universities abroad usually take?',
          answer: 'The application process can vary but generally starts a year before the intended start date.'
        },
        {
          question: 'What are the different types of visas for studying abroad?',
          answer: 'The most common types of visas for students include student visas and exchange visitor visas (for exchange programs). Each country has its specific visa categories and requirements for students.'
        },
        {
          question: 'Can international students work while studying abroad?',
          answer: 'In many countries, international students are allowed to work a certain number of hours per week during their studies. However, regulations can vary by country and might have restrictions on working hours or types of employment.'
        },
        {
          question: 'How can I finance my education abroad?',
          answer: 'There are various options for financing studies abroad including scholarships, grants, part-time jobs, education loans, and sponsorships. Research and apply for scholarships offered by universities, governments, and private organizations.'
        },
        {
          question: 'Are there language requirements for studying abroad?',
          answer: 'Yes, many universities require proof of proficiency in the language of instruction (usually English) through tests like TOEFL or IELTS. Some may also require additional language proficiency depending on the program.'
        },
        {
          question: 'How do I find accommodation while studying abroad?',
          answer: 'Universities usually provide accommodation options for international students, including on-campus housing or assistance in finding off-campus housing. Some students also opt for homestays or shared accommodations.'
        },
        {
          question: 'Are there opportunities for internships or practical training while studying abroad?',
          answer: 'Yes, many universities offer internships, co-op programs, or practical training as part of the curriculum. Additionally, some countries allow students to work as interns or part-time while studying.'
        },
        {
          question: 'What are the healthcare options for international students studying abroad?',
          answer: 'Some countries have healthcare schemes specifically designed for international students. Additionally, universities often provide health insurance plans or access to healthcare facilities on or near campus.'
        },
        {
          question: 'What are the key things to consider before choosing a university abroad?',
          answer: 'Consider factors like the quality of education, program suitability, location, costs, available resources and support, opportunities for internships or research, and potential career prospects post-graduation.'
        }
      ];
      
  return (
    <div className="container mx-auto py-8 p-12 drop-shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-[#FB2465] ">FAQs for Education Abroad
      <hr
            style={{
              backgroundColor: "#FB2465",
              width: "110px",
              height: "2px",
              border: "none",
              marginTop: "0px",
              marginLeft: "0px",
              marginBottom: "20px",
            }}
          /></h2>
       <Collapse accordion>
        {faqData.map((faq, index) => (
          <Panel header={faq.question} key={index.toString()}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQSection;
