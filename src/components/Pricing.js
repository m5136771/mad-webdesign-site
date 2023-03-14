import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "./misc/Headings";
import { SectionDescription } from "./misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons.js";
import { Container as ContainerBase, ContentWithPaddingXl as ContentBase } from "./misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "../assets/checkbox-circle.svg";

const Container = tw(ContainerBase)`bg-go text-holiness -mx-8 px-8`;
const ContentWithPaddingXl = tw(ContentBase)`relative z-10 px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;
const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Heading = tw(SectionHeading)`w-full text-center`;
const Description = tw(SectionDescription)`w-full text-holiness text-center`;

const PlansContainer = tw.div`mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-go font-medium`;
const Plan = styled.div`
  ${tw`w-full max-w-sm bg-holiness rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised`}
`;

const PlanHeader = styled.div`
  .nameAndFeaturedContainer {
    ${tw`flex flex-wrap flex-col sm:flex-row justify-between items-center`}
  }
  .name {
    ${tw`lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3`}
  }
  .subname {
    ${tw`mt-6 lg:text-sm xl:text-sm tracking-wider`}
  }
  .featuredText {
    ${tw`text-xs font-bold px-3 rounded py-2 uppercase bg-fortaleza-700 text-amazonas leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center`}
  }
  .pricingContainer {
    ${tw`mt-2 flex items-end justify-between`}
    .currentPrice {
      ${tw`text-lg font-bold leading-none`}
      .bigText {
        ${tw`text-3xl font-bold`}
      }
    }
    .oldPrice {
      ${tw`text-holiness-400 text-lg line-through hidden sm:block`}
    }
  }
  .description {
    ${tw`mt-8 font-medium text-solitude lg:text-sm xl:text-base`}
  }
`;
const PlanFeatures = styled.ul`
  ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-go-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-go tracking-wide ml-3`}
    }
  }
`;

const PlanAction = tw.div`mt-4`;
const ActionButton = styled(PrimaryButtonBase)`
  ${tw`block text-center text-lg font-semibold tracking-wider w-full text-holiness bg-go px-6 py-4 rounded hover:bg-go-light focus:shadow-outline focus:outline-none transition-colors duration-300`}
`;


export default ({
  heading = "Flexible Options",
  description = "Choose a model that fits your budget and needs. Get the best value for your money while still receiving high-quality design services.",
  plans = null,
  primaryButtonText = "Get Started"
}) => {
  const defaultPlans = [
    {
      name: "Starter",
      /* subname: "Starts at",
      price: ["$500", ".00"],
      oldPrice: "$750.00", */
      description: "Ideal for small businesses or individuals who need a basic website to establish their online presence. Everything you need to get started.",
      features: [
        "Custom website design",
        "Mobile-friendly and responsive layout",
        "Content Management System",
        "Home, About, Services, & Contact Pages",
        "Basic SEO",
        "Social Media Integration"
      ],
      url: "#contact"
    },
    {
      name: "Plus",
      /* subname: "Starts at",
      price: ["$1000", ".00"],
      oldPrice: "$1500.00", */
      description: "Ideal for small to medium-sized businesses who want to expand their online presence and generate leads or sales through their website.",
      features: [
        "Includes Everything from 'Starter' Package",
        "1-2 Additional Custom Pages",
        "Blog Functionality",
        "Enhanced SEO optimization",
        "Google Analytics integration",
        "Advanced security features",
        "Hosting Setup Assistance"
      ],
      url: "#contact",
      featured: "Most Popular"
    },
    {
      name: "Bespoke",
      /* subname: "Starts at",
      price: ["$2500", ".00"],
      oldPrice: "$4000.00", */
      description: "Ideal for growing medium to large-sized businesses who want a unique, high-end website that is tailored to their specific requirements.",
      features: [
        "Includes Everything from 'Plus' Package",
        "4-6 Additional Custom Pages",

        "E-Commerce Functionality Including: Product, Cart, Checkout Pages",
        "Video Integration",
        "Custom Functionalities & Integration with Other Services",
        "Custom graphics and animations",
        "Free Domain name",
        "One year free hosting"
      ],
      url: "#contact"
    }
  ];

  if (!plans) plans = defaultPlans;

  return (
    <Container id='options'>
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanHeader>
                <span className="nameAndFeaturedContainer">
                  <span className="name">{plan.name}</span>
                  {plan.featured && <span className="featuredText">{plan.featured}</span>}
                </span>
                {/* <div className="subname">{plan.subname}</div>
                <div className="pricingContainer">
                  <span className="currentPrice">
                    <span className="bigText">{plan.price[0]}</span>
                    {plan.price[1]}{" "}
                  </span>
                  {plan.oldPrice && <span className="oldPrice">{plan.oldPrice}</span>}
                </div> */}
                <p className="description">{plan.description}</p>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <li className="feature" key={index}>
                    <CheckboxIcon className="icon" />
                    <span className="text">{feature}</span>
                  </li>
                ))}
              </PlanFeatures>
              <PlanAction>
                <ActionButton as="a" href={plan.url}>
                  {primaryButtonText}
                </ActionButton>
              </PlanAction>
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
