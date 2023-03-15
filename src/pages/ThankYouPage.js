import React from "react";
import tw from "twin.macro";
/* import styled from "styled-components"; */
import { css } from "styled-components/macro"; //eslint-disable-line

import { LogoLink } from "components/constants/Header";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import logo from "../assets/logo-sig_solitude-bold.svg";

const Container = tw.div`relative mx-8 mt-8`;
const NavRow = tw.div`flex flex-col lg:flex-row items-center justify-between`;
const HeroRow = tw.div`flex max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-go leading-snug`;
const Description = tw(DescriptionBase)`mt-12 text-center lg:text-base max-w-lg mx-auto lg:mx-0`;

/* const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = tw.i`inline-flex cursor-pointer text-go hover:text-rain transition duration-300 p-1 m-1 text-4xl`; */

export default () => {

  return (
    <Container>
      <NavRow>
        <LogoLink href="/">
          <img src={logo} alt="logo for MAD Web Design - signature spelling M.A.D." />
          Go Home
        </LogoLink>
      </NavRow>

      <HeroRow>
        <Heading>Success!</Heading>
        <Description>
          <p>I'm so happy to hear from you! I'll reach out as soon as I can.</p>
          <br />
          <p>In the meantime, please email me with additional information or questions: <strong><a href="mailto:michael@madwebdesign.dev">michael@madwebdesign.dev</a></strong>.</p>
          <br />
          <p>You can also text me at <strong><a href="tel:443-203-8147">(443) 203-8147</a></strong>.</p>
          <br />
          <br />
          {/* <p>If you liked the work you saw and want to see the projects I'm working on now, you can <strong>follow me</strong> on these platforms:</p> */}
        </Description>
        {/* <SocialLinksContainer>
          <SocialLink href="https://facebook.com">
            <i class="fi fi-brands-discord"></i>
          </SocialLink>
          <SocialLink href="https://twitter.com">
            <i class="fi fi-brands-behance"></i>
          </SocialLink>
          <SocialLink href="https://youtube.com">
            <i class="fi fi-brands-whatsapp"></i>
          </SocialLink>
          <SocialLink href="https://youtube.com">
            <i class="fi fi-brands-github"></i>
          </SocialLink>
          <SocialLink href="https://youtube.com">
            <i class="fi fi-brands-medium"></i>
          </SocialLink>
          <SocialLink href="https://youtube.com">
            <i class="fi fi-brands-linkedin"></i>
          </SocialLink>
        </SocialLinksContainer> */}
      </HeroRow>
    </Container>
  );
};
