import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { LogoLink } from "components/constants/Header";
import logo from "../assets/logo-sig_solitude-bold.svg";

const Container = tw.div`relative mx-8 mt-8`;
const TextRow = tw.div`flex flex-col items-center py-20 lg:py-24`;

const H1 = tw.h1`text-4xl md:text-5xl font-black leading-relaxed my-12 text-center tracking-wide text-go leading-snug`;
const H2 = tw.h2`mx-12 w-full md:w-2/3 lg:w-1/2 font-bold text-lg md:text-xl text-go`
const P = tw.p`mx-12 w-full md:w-2/3 lg:w-1/2 text-base`

export default () => {

	return (
		<Container>
			<LogoLink href="/">
				<img src={logo} alt="logo for MAD Web Design - signature spelling M.A.D." />
				Go Home
			</LogoLink>

			<TextRow>
				<H1>Privacy Policy</H1>
				<P tw="text-solitude text-sm -mt-4 mb-4">We respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your personal data when you use our website.</P>
				<br />
				<H2>What personal data do we collect?</H2>
				<P>When you use our website, we may collect personal information such as your name, email address, and any other information you choose to provide in the contact form.</P>
				<br />
				<H2>How do we use your personal data?</H2>
				<P>We use your personal information to respond to your inquiry or request. We will not use your personal information for any other purposes without your consent.</P>
				<br />
				<H2>Do we share your personal data?</H2>
				<P>We do not share your personal information with any third-party companies or organizations.</P>
				<br />
				<H2>How do we protect your personal data?</H2>
				<P>We take appropriate measures to ensure the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</P>
				<br />
				<H2>Your rights</H2>
				<P>You have the right to access, modify, or delete your personal information at any time. You can do this by contacting us through the contact form on our website.</P>
				<br />
				<H2>Changes to our Privacy Policy</H2>
				<P>We reserve the right to make changes to this Privacy Policy at any time. Any changes will be posted on our website.</P>
				<br />
				<P>By using our website, you consent to this Privacy Policy.</P>
			</TextRow>
		</Container>
	);
};
