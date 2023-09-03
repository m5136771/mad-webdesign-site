import React from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line

import ToggleDevModeSwitch from '../misc/ToggleDevModeSwitch.js';

import useAnimatedNavToggler from '../../helpers/useAnimatedNavToggler.js';

import logo from '../../assets/logo-sig_solitude-bold.svg';
import { ReactComponent as MenuIcon } from 'feather-icons/dist/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';

const Header = tw.header`
  pb-0
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div``;
export const NavLink = tw.a`
  text-lg my-2 lg:text-base lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-go-light hocus:text-go-light
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-8
  2xl:px-8 lg:px-4 py-3 px-3 rounded bg-go-500 text-holiness
  hocus:bg-go-light hocus:text-holiness focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
	${tw`flex items-center font-black border-b-0 text-3xl! ml-0!`};

	img {
		${tw`w-20 mr-3 opacity-90 hocus:opacity-100`}
	}
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 mr-8 focus:outline-none hocus:text-go-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
	${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 mt-10 mb-4 p-4 border text-center rounded-lg text-holiness bg-rain`}
	${NavLinks} {
		${tw`flex flex-col items-center`}
	}
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
	roundedHeaderButton = false,
	logoLink,
	links,
	className,
	collapseBreakpointClass = 'lg',
}) => {
	const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
	const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

	const defaultLinks = [
		<NavLinks key={1}>
			<NavLink href='/#process' onClick={toggleNavbar}>
				Process
			</NavLink>
			<NavLink href='/#options' onClick={toggleNavbar}>
				Options
			</NavLink>
			<NavLink href='/#portfolio' onClick={toggleNavbar}>
				Portfolio
			</NavLink>
			<NavLink href='/#testimonials' onClick={toggleNavbar}>
				Testimonials
			</NavLink>
			<NavLink href='/#faq' onClick={toggleNavbar}>
				FAQ
			</NavLink>
			<PrimaryLink
				css={roundedHeaderButton && tw`rounded-full`}
				href='/#contact'
				onClick={toggleNavbar}
			>
				Start
			</PrimaryLink>
		</NavLinks>,
	];

	const defaultLogoLink = (
		<LogoLink href='/'>
			<img src={logo} alt='logo for MAD Web Design - signature spelling M.A.D.' />
		</LogoLink>
	);

	const toggleDevMode = (
		<ToggleDevModeSwitch />
	);

	logoLink = logoLink || defaultLogoLink;
	links = links || defaultLinks;

	return (
		<Header className={className || 'header-light'}>
			<DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
				{logoLink}
				{toggleDevMode}
				{links}
			</DesktopNavLinks>

			<MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
				{logoLink}
				<MobileNavLinks
					initial={{ x: '150%', display: 'none' }}
					animate={animation}
					css={collapseBreakpointCss.mobileNavLinks}
				>
					{links}
				</MobileNavLinks>
				<NavToggle onClick={toggleNavbar} className={showNavLinks ? 'open' : 'closed'}>
					{showNavLinks ? (
						<CloseIcon tw='w-6 h-6 text-holiness' />
					) : (
						<MenuIcon tw='w-6 h-6' />
					)}
				</NavToggle>
			</MobileNavLinksContainer>
		</Header>
	);
};

const collapseBreakPointCssMap = {
	sm: {
		mobileNavLinks: tw`sm:hidden`,
		desktopNavLinks: tw`sm:flex`,
		mobileNavLinksContainer: tw`sm:hidden`,
	},
	md: {
		mobileNavLinks: tw`md:hidden`,
		desktopNavLinks: tw`md:flex`,
		mobileNavLinksContainer: tw`md:hidden`,
	},
	lg: {
		mobileNavLinks: tw`lg:hidden`,
		desktopNavLinks: tw`lg:flex`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
	xl: {
		mobileNavLinks: tw`lg:hidden`,
		desktopNavLinks: tw`lg:flex`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
};
