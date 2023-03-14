import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";

// Components
import HeaderBase from "components/constants/Header.js";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons";
import { Container, ContentWithVerticalPadding } from "./misc/Layouts";

// Assets
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import DeveloperGraphic from "../assets/developer-mode-1400-right.svg"

// NavBar styling
const Header = tw(HeaderBase)`pt-8 pl-8 max-w-none`;

// Hero section styling
const Row = tw.div`flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto sm:px-8`;

// Hero - Text Column
const Column = tw.div`px-10`;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw.h2`font-sans text-go text-4xl sm:text-5xl font-black tracking-wide text-left leading-tight xl:text-6xl`;
const HeadingFancy = styled.h2`
  ${tw`inline-block font-display font-bold text-go text-5xl sm:text-5xl 2xsm:text-4xl font-black tracking-wide text-left xl:text-6xl`}
  span {
    ${tw`inline-block text-2xl sm:text-3xl xl:text-4xl align-super font-medium text-rain`}
  }
`;
const Description = tw.p`font-display mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-rain max-w-xl`;
const PrimaryButton = tw(PrimaryButtonBase)`rounded-lg mt-8 inline-block tracking-wide text-center py-3 px-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-go`;
const FeatureText = tw.p`ml-2 font-medium text-rain`;

// Hero - Image Column
const ImageColumn = tw(Column)`bg-transparent w-full md:w-2/3 m-auto relative lg:pt-0 2xsm:pt-16 sm:pt-16 md:pt-16`;
const BackgroundImage = tw.div`relative -mx-8 -mt-8 sm:bg-right bg-no-repeat bg-cover h-auto`;


export default ({
  description = "*(adj.) In the common vernacular: \"a lot\" or \"extremely.\" As in \"Dude, you got mad skills!\"",
  primaryButtonUrl = "#options",
  primaryButtonText = "See Options",
  features = ["Personalized, responsive web design", "Social Media strategy & content", "Full Branding Services (logo, color, typography, etc.)"],

}) => {

  return (
    <>
    <BackgroundImage style={{ backgroundImage: `url(${DeveloperGraphic})` }}>
      <Header />
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>
                Web Design Should be <HeadingFancy>MAD<span>*</span></HeadingFancy> Easy
              </Heading>
              <Description>{description}</Description>
              <PrimaryButton as="a" href={primaryButtonUrl}>
                {primaryButtonText}
              </PrimaryButton>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </BackgroundImage>
    </>
  );
};
