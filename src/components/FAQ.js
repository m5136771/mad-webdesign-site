import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings";
import { SectionDescription } from "./misc/Typography.js";
import { Container } from "./misc/Layouts";

import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`text-center w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center py-12`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-8 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-holiness hover:text-holiness-900 bg-go hover:bg-go-light transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);


export default ({
  subheading = "FAQS",
  heading = "You have Questions?",
  description = "These are the most common concerns. For anything else, let's talk.",
  faqs = [
    {
      question: "How long does the web design process typically take from start to finish ?",
      answer:
        "The web design process can vary depending on the scope of the project and the complexity of the website. However, as a general guideline, a typical web design project can take anywhere from 4-12 weeks from start to finish."
    },
    {
      question: "How will you handle website security and protect my website from potential hacks or data breaches ?",
      answer:
        "Website security is a critical aspect of web design and development. To ensure that your website is protected from potential hacks or data breaches, I implement industry-standard security measures such as secure socket layer (SSL) certificates, strong passwords, and regular software updates. I also perform regular security audits and backups to ensure that your website is always protected."
    },
    {
      question: "Will I be able to make updates to my website content easily after the initial design is complete? If so, how ?",
      answer:
        "Yes, you will be able to make updates to your website content easily after the initial design is complete. I typically use content management systems (CMS) such as WordPress or Shopify that allow you to make updates and changes to your website content without needing technical expertise. I also provide training and support to help you learn how to make updates to your website."
    },
    {
      question: "Do you offer any additional services, such as graphic design or copywriting, that can help enhance my website's overall design and content ?",
      answer:
        "Yes, in addition to web design and development services, I offer additional services such as graphic design, copywriting, and search engine optimization (SEO) that can help enhance your website's overall design and content. These services can help you create a more engaging, user-friendly website that resonates with your target audience and drives conversions."
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id='faq'>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
    </Container>
  );
};
