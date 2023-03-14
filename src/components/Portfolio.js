import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "./misc/Headings";
// import { PrimaryLink as PrimaryLinkBase } from "./misc/Links";
// import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons.js";

import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
// import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
// import { ReactComponent as ArrowRightIcon } from "../assets/arrow-right-icon.svg";
import TDForestry from "../assets/tdforestry.jpg";
import HomeEco from "../assets/homeeco.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-solitude mt-8`;
/* const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`; */

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-top rounded`
]);

const CardText = tw.div`flex flex-col mt-4`;

const CardTitle = tw.h5`text-center text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-rain uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw.a`w-1/2 self-center text-center py-3 font-bold bg-go text-holiness hocus:bg-go-light hocus:text-holiness focus:shadow-outline focus:outline-none transition duration-300 mt-6 rounded-lg`;

export default ({
  subheading = "Portfolio",
  headingHtmlComponent = (
    <>
      Expertise and creativity, <span tw="text-go-light">demonstrated.</span>
    </>
  ),
  description = "Others who decided to elevate their brands to the next level.",
  // linkText = "View all Examples",
  cardLinkText = "See Live Site",
  textOnLeft = false
}) => {
  const cards = [
    {
      imageSrc: HomeEco,
      title: "Home Ecoprodutos",
      siteUrl: "https://madseventwo.wixsite.com/homeecoprodutos",
      durationText: "Online: 1 year",
      locationText: "Belém, Brazil"
    },
    {
      imageSrc: TDForestry,
      title: "TD Forestry",
      siteUrl: "https://tdforestry.netlify.app/",
      durationText: "Online: 5 months",
      locationText: "Snow Hill, MD"
    }
  ];
  return (
    <Container id='portfolio'>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              {/* <PrimaryLink>
                {linkText} <ArrowRightIcon />
              </PrimaryLink> */}
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    {/* <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature> */}
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction href={card.siteUrl}>{cardLinkText}</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
