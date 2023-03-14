import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings";
/* import { PrimaryButton } from "./misc/Buttons.js"; */

import { ReactComponent as QuotesLeftIcon } from "../assets/quote-left.svg";
import { ReactComponent as QuotesRightIcon } from "../assets/quote-right.svg";
/* import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg"; */
import BrozCookiez from "../assets/bc_h484.svg";
import BrozCookiezAvatar from "../assets/bc-girl.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`; 
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-96 bg-no-repeat bg-center bg-contain`,
]);

/* const ControlContainer = tw.div`absolute bottom-0 right-0 bg-holiness px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`; */

const TextContainer = styled.div(props => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;
const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-solitude`;

const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-go-500`;
const CustomerTitle = tw.p`font-medium text-solitude`;

const QuotesLeft = tw(QuotesLeftIcon)`w-6 h-6 opacity-75 text-go-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(QuotesRightIcon)`w-6 h-6 opacity-75 text-go-500 inline-block ml-1 -mt-3`;

export default ({
  subheading = "",
  heading = "Testimonials",
  description = "People I work with consistently recognize my commitment to quality, customer service, and delivering exceptional results.",
  testimonials = null,
  textOnLeft = false
}) => {
  const defaultTestimonials = [
    {
      imageSrc: BrozCookiez,
      profileImageSrc: BrozCookiezAvatar,
      quote:
        "Working with Michael was an absolute pleasure. His attention to detail, creativity, and technical expertise resulted in a website that exceeded my expectations and has helped my business grow.",
      customerName: "Laurie",
      customerTitle: "Head Chef & Owner, Broz Cookiez"
    }
  ];

  if (!testimonials || testimonials.length === 0) testimonials = defaultTestimonials;

  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container id='testimonials'>
      <Content>
        <HeadingInfo tw="text-center lg:hidden" subheading={subheading} heading={heading} description={description} />
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider arrows={false} ref={setImageSliderRef} asNavFor={textSliderRef} fade={false}>
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                    {/* <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer> */}
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo tw="hidden lg:block" subheading={subheading} heading={heading} description={description} />
                <TestimonialTextSlider arrows={false} ref={setTextSliderRef} asNavFor={imageSliderRef} fade={true}>
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.quote}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                      <CustomerInfo>
                        <CustomerProfilePicture src={testimonial.profileImageSrc} alt={testimonial.customerName} />
                        <CustomerTextInfo>
                          <CustomerName>{testimonial.customerName}</CustomerName>
                          <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
