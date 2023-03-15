import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container } from "components/misc/Layouts.js";
import { ReactComponent as TerminalIcon } from "feather-icons/dist/icons/terminal.svg";
import { ReactComponent as PenIcon } from "feather-icons/dist/icons/pen-tool.svg";
import { ReactComponent as TextIcon } from "feather-icons/dist/icons/file-text.svg";


const DevIcon = tw(TerminalIcon)`inline-block mr-2 w-5 h-5`;
const DesignIcon = tw(PenIcon)`inline-block mr-2 w-5 h-5`;
const ContentIcon = tw(TextIcon)`inline-block mr-2 w-5 h-5`;

const HeaderContainer = tw.div`flex flex-col items-center justify-center`;

const TypeSwitcher = tw.div`my-8 rounded-lg border-2 shadow-lg inline-flex flex-col 2xsm:flex-row 2xsm:rounded-full space-x-2`;
const SwitchButton = styled.button`
  ${tw`px-4 sm:px-8 py-3 rounded-lg focus:outline-none text-sm font-bold text-holiness-700 transition duration-300 2xsm:rounded-full`}
  ${props => props.active && tw`bg-go-500 text-holiness-100`}
`;

const Subheading = tw.h3`font-bold text-2xl text-go mt-12 mb-6 text-center`;
const L1BricksContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const L2BricksContainer = tw.div`bg-go flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const L3BricksContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const L4BricksContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const Brick = styled.div`
  ${tw`w-full max-w-72 mt-0 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-holiness-900 bg-white flex flex-col shadow-raised`}

  ${props =>
    props.featured &&
    css`
      ${tw`border-2 border-holiness-200 shadow-none`}
    `}
`;

const BrickHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-holiness-100 rounded-t-lg`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .slash {
    ${tw`text-xl text-holiness-500`}
  }
  .duration {
    ${tw`lowercase text-holiness-500 font-medium tracking-widest`}
  }
  .mainFeature {
    ${tw`text-holiness-500 text-sm font-medium tracking-wide`}
  }
`;
const BrickFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm`}
  .feature {
    ${tw`mt-5 first:mt-0 font-semibold text-holiness-500`}
  }
`;

const BrickAction = tw.div`px-4 pb-8`;
const ActionButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

export default ({
  L1bricks = [
    {
      name: ["Foundation", "NEW NEW"],
      durationPrices: ["$600", "$0"],
      mainFeature: "Always Included",
      features: ["Navigation Bar", "Hero Section", "Footer", "Basic SEO", "Social Media Links", "Basic Security", "Responsive Layout"],
    },
    {
      name: "Choose Three Home Page Sections",
      durationPrices: ["$0", "$499"],
      mainFeature: "at No Additional Cost",
      features: ["About Section", "Call to Action", "Contact Form", "Expertise Section", "FAQs", "Features/Services Section", "Pricing Section", "Testimonials Section"],
      featured: true
    }
  ],
  L2bricks = [
    {
      name: "Standalone Pages",
      durationPrices: ["$85", "$499"],
      mainFeature: "for First 2, then $160 / page",
      features: ["About", "Contact", "Expertise", "FAQs", "Features/Services", "Portfolio", "Pricing", "Testimonials"],
      featured: true
    },
    {
      name: "Additional Home Page Sections",
      durationPrices: ["$85", "$499"],
      mainFeature: "for First 2, then $160 / page",
      features: ["About", "Contact", "Expertise", "FAQs", "Features/Services", "Portfolio", "Pricing", "Testimonials"],
      featured: true
    },
    {
      name: "Optimization",
      durationPrices: ["$300", "$499"],
      mainFeature: "for First 2, then $160 / page",
      features: ["Enhanced SEO", "Enhanced Responsiveness", "Video Integration", "Google Analytics", "Advanced Security"],
      featured: true
    }
  ],
  L3bricks = [
    {
      name: "Blog Functionality",
      durationPrices: ["$200", "$499"],
      mainFeature: "for First 2, then $160 / page",
      features: ["About", "Contact", "Expertise", "FAQs", "Features/Services", "Portfolio", "Pricing", "Testimonials"],
      featured: true
    },
    {
      name: "E-Commerce Functionality",
      durationPrices: ["$600", "$499"],
      mainFeature: "for First 2, then $160 / page",
      features: ["Product Pages", "Cart", "Checkout Page", "Payment Handling", "Shipping Handling"],
      featured: true
    },
  ],
  L4bricks = [
    {
      name: "Hand-off CMS",
      durationPrices: ["$0", "$499"],
      mainFeature: "for First 2, then $160 / page",
      features: ["WordPress", "SquareSpace", "Shopify"],
      featured: true
    },
    {
      name: "Professional Management",
      durationPrices: ["$300", "$499"],
      mainFeature: "for First 2, then $160 / page",
      features: ["On-demand Support", "Unlimited Content Uploads", "Domain Name", "Web Hosting", "Matching Email Addresses"],
      featured: true
    }
  ],
  primaryButtonText = "Add",
  planDurations = [
    {
      text: "page",
      icon: <DevIcon />,
      switcherText: "Development",
    },
    {
      text: "monthly",
      icon: <DesignIcon />,
      switcherText: "Design",
    },
    {
      text: "monthly",
      icon: <ContentIcon />,
      switcherText: "Content",
    }
  ]
}) => {

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container>
        <HeaderContainer>
        <TypeSwitcher>
          {planDurations.map((planDuration, index) => (
            <SwitchButton active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.icon}{planDuration.switcherText}</SwitchButton>
          ))}
        </TypeSwitcher>
        </HeaderContainer>
        <Subheading>Foundation</Subheading>
        <L1BricksContainer>
          {L1bricks.map((plan, index) => (
            <Brick key={index} featured={plan.featured}>
              <BrickHeader>
                <span className="priceAndDuration">
                  <span className="price">{plan.durationPrices[activeDurationIndex]}</span>
                  <span className="slash"> / </span>
                  <span className="duration">{planDurations[activeDurationIndex].text}</span>
                </span>
                <span className="name">{plan.name[activeDurationIndex]}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </BrickHeader>
              <BrickFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </BrickFeatures>
              <BrickAction>
                <ActionButton>{primaryButtonText}</ActionButton>
              </BrickAction>
            </Brick>
          ))}
        </L1BricksContainer>
        <Subheading>Extras</Subheading>
        <L2BricksContainer>
          {L2bricks.map((plan, index) => (
            <Brick key={index} featured={plan.featured}>
              <BrickHeader>
                <span className="priceAndDuration">
                  <span className="price">{plan.durationPrices[activeDurationIndex]}</span>
                  <span className="slash"> / </span>
                  <span className="duration">{planDurations[activeDurationIndex].text}</span>
                </span>
                <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </BrickHeader>
              <BrickFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </BrickFeatures>
              <BrickAction>
                <ActionButton>{primaryButtonText}</ActionButton>
              </BrickAction>
            </Brick>
          ))}
        </L2BricksContainer>
        <Subheading>Advanced Professional Features</Subheading>
        <L3BricksContainer>
          {L3bricks.map((plan, index) => (
            <Brick key={index} featured={plan.featured}>
              <BrickHeader>
                <span className="priceAndDuration">
                  <span className="price">{plan.durationPrices[activeDurationIndex]}</span>
                  <span className="slash"> / </span>
                  <span className="duration">{planDurations[activeDurationIndex].text}</span>
                </span>
                <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </BrickHeader>
              <BrickFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </BrickFeatures>
              <BrickAction>
                <ActionButton>{primaryButtonText}</ActionButton>
              </BrickAction>
            </Brick>
          ))}
        </L3BricksContainer>
        <Subheading>Continued Support</Subheading>
        <L4BricksContainer>
          {L4bricks.map((plan, index) => (
            <Brick key={index} featured={plan.featured}>
              <BrickHeader>
                <span className="priceAndDuration">
                  <span className="price">{plan.durationPrices[activeDurationIndex]}</span>
                  <span className="slash"> / </span>
                  <span className="duration">{planDurations[activeDurationIndex].text}</span>
                </span>
                <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </BrickHeader>
              <BrickFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </BrickFeatures>
              <BrickAction>
                <ActionButton>{primaryButtonText}</ActionButton>
              </BrickAction>
            </Brick>
          ))}
        </L4BricksContainer>
    </Container>
  );
};
