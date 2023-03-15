import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/constants/Header";
import { Container as ContainerBase } from "components/misc/Layouts";
import ServiceSwitcher from "components/ServiceSwitcher";
/* import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js"; */
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";

const Container = tw(ContainerBase)`mt-8 flex flex-col items-center mx-auto`;
const Heading = tw.h2`font-sans text-go text-4xl sm:text-5xl font-black tracking-wide text-center leading-tight xl:text-6xl`;
const HeadingFancy = styled.h2`
  ${tw`inline-block font-display font-bold text-go text-4xl sm:text-5xl 2xsm:text-4xl font-black tracking-wide text-left xl:text-6xl`}
  span {
    ${tw`inline-block text-2xl sm:text-3xl xl:text-4xl align-super font-medium text-rain`}
  }
`;
const Description = tw.p`text-center font-display mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-rain max-w-xl`;

export default ({
  description = "*Build-Your-Own-Invoice by choosing freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",

}) => {
  
  return (
    <AnimationRevealPage id='/services'>
      <Header />
      <Container>
        <Heading>
          Planning Your Project Should be <HeadingFancy>MAD<span>*</span></HeadingFancy> Simple
        </Heading>
        <Description>{description}</Description>
        <ServiceSwitcher />
        {/* <Testimonial
          heading="Our Paying Customers"
        />
        <FAQ />
        <Footer/> */}
      </Container>
    </AnimationRevealPage>
  );
};
