import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";

import ForestryLogo1 from "assets/forestry-logo-1.jpg";
import ForestryLogo2 from "assets/forestry-logo-2.jpg";
import ForestryLogo3 from "assets/forestry-logo-3.jpg";

import HomeLogo1 from "assets/home-logo-1.png";
import HomeLogo2 from "assets/home-logo-2.jpg";
import HomeLogo3 from "assets/home-logo-3.jpg";

import WaterColor1 from "assets/watercolor-1.png";
import WaterColor2 from "assets/watercolor-2.png";
import WaterColor3 from "assets/watercolor-3.png";


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-go-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-holiness-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {holiness
    ${tw`mr-8 last:mr-0 text-holiness-400 hocus:text-go-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "",
  subheading = "Branding & Graphic Design",
  description = "",
  cards = [
    {
      imageSrc: ForestryLogo1,
      position: "",
      name: "",
      links: [],
    },
    {
      imageSrc: ForestryLogo2,
      position: "Private Consultant Forester",
      name: "",
      links: [],
    },
    {
      imageSrc: ForestryLogo3,
      position: "",
      name: "",
      links: [],
    },
    {
      imageSrc: HomeLogo1,
      position: "",
      name: "",
      links: [],
    },
    {
      imageSrc: HomeLogo2,
      position: "Eco-friendly Products",
      name: "",
      links: [],
    },
    {
      imageSrc: HomeLogo3,
      position: "",
      name: "",
      links: [],
    },
    {
      imageSrc: WaterColor1,
      position: "",
      name: "",
      links: [],
    },
    {
      imageSrc: WaterColor2,
      position: "Travel Blog",
      name: "",
      links: [],
    },
    {
      imageSrc: WaterColor3,
      position: "",
      name: "",
      links: [],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
