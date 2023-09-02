import React, { useState } from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line

import useAnimatedNavToggler from '../../helpers/useAnimatedNavToggler.js';

import logo from '../../assets/logo-sig_solitude-bold.svg';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { ReactComponent as MenuIcon } from 'feather-icons/dist/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';

const Header = tw.header`
  pb-0
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const ToggleButton = styled.button`
	${tw`box-border grid place-items-center overflow-hidden aspect-8/3 border-0 relative p-0 cursor-pointer transition-[.4,-0.3,.6,1.3] ease-in-out duration-500 outline-0 shadow-inner shadow-lg rounded-full`};
  ${(props) => (props.isDevMode ? tw`transition-colors ease-in-out duration-500 bg-gradient-to-r from-sky to-[#59a0d1]` : tw`transition-colors ease-in-out duration-500 bg-gradient-to-r from-night to-[#0f131b]`)}

	.toggle__content {
		${tw`absolute top-0 left-0 right-0 bottom-0 overflow-hidden border inset-0 w-full h-full rounded-full block bg-clip-border`};
	}

	.toggle__backdrop:first-of-type .clouds path:first-of-type {
    ${tw`bg-ray`};
  }

  .toggle__backdrop {
    ${tw`overflow-visible absolute bottom-0 w-full left-0 transition-[.4,-0.3,.6,1.3] ease-in-out duration-500`};
    ${(props) => (props.isDevMode ? tw`translate-y-0` : tw`translate-y-[-100%]`)};
  }

  .stars path {
    ${tw`fill-current text-holiness origin-top-left rotate-45 scale-75`};
  }

  .toggle__indicator {
    ${tw`h-full aspect-none border-0 grid place-items-center p-3`};
  }

  .toggle__star {
    ${tw`h-full aspect-none border-4 relative translate-x-1/2 translate-y-1/2 ease-in-out duration-500`};
    ${(props) => (props.isDevMode ? tw`border-holiness` : tw`border-sky`)};
  }

  .sun {
    ${tw`bg-sun absolute inset-0 border-4 overflow-hidden shadow-inner`};
  }
	
  .moon {
    ${tw`bg-moon absolute inset-0 border-4 overflow-hidden shadow-inner transition ease-in-out duration-500 translate-x-1/2 translate-y-1/2 shadow-inner`};
    ${(props) => (props.isDevMode ? tw`border-holiness` : tw`border-sky`)};
  }

  .moon__crater {
    ${tw`bg-crater absolute inset-0 border-4 overflow-hidden shadow-inner transition ease-in-out duration-500 translate-x-1/2 translate-y-1/2 shadow-inner`};
    ${(props) => (props.isDevMode ? tw`border-holiness` : tw`border-sky`)};
  }

  .moon__crater:nth-of-type(1) {
    ${tw`w-2 h-2`};
  }

  .moon__crater:nth-of-type(2) {
    ${tw`w-1 h-1`};
  }

  .moon__crater:nth-of-type(3) {
    ${tw`w-1 h-1`};
  }

  .toggle__star:before {
    ${tw`absolute top-1/2 left-1/2 w-[356%] aspect-none rounded-full z-10 transition ease-in-out duration-500`};
  }

  .toggle__star:after {
    ${tw`absolute block bg-night top-1/2 left-1/2 w-[356%] aspect-none rounded-full z-10 inset-0 transition ease-in-out duration-500`};
  }

  .toggle__indicator-wrapper {
    ${tw`absolute inset-0 grid place-items-center transition ease-in-out duration-500 translate-x-1/2 translate-y-1/2`};
    ${(props) => (props.isDevMode ? tw`translate-x-0 translate-y-0` : tw`translate-x-[-100%] translate-y-[-100%]`)};
  }

  .stars g {
    ${tw`w-full h-full`};
  }

  .stars g:nth-of-type(3) {
    ${tw`animate-pulse`};
  }

  .stars g:nth-of-type(11) {
    ${tw`animate-pulse`};
  }

  .stars g:nth-of-type(9) {
    ${tw`animate-pulse`};
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

	#faCode {
		${tw``};
	}

	#faPaintBrush {
		${tw``};
	}

	&:hover {
		#toggle__dot {
			${tw``};
		}
	}

	&:focus {
		#toggle__dot {
			${tw``};
		}
	}

	&:active {
		#toggle__dot {
			${tw``};
		}
	}

	${(props) =>
		props.isDevMode
			? css`
					#toggle__dot {
						${tw``};
					}
			  `
			: css`
					#toggle__dot {
						${tw``};
					}
			  `}
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

	const [isDevMode, setIsDevMode] = useState(true);
	const handleToggle = () => {
		setIsDevMode(!isDevMode);
	};
	const modeToggle = (
		<ToggleButton
			aria-pressed='false'
			title='Toggle Dev & Creator Modes'
			onClick={handleToggle}
			isDevMode={isDevMode}
		>
			{isDevMode ? <FaCode id='faCode' /> : <FaPaintBrush id='faPaintBrush' />}

			<span class='toggle__content'>
				<svg
					aria-hidden='true'
					class='toggle__backdrop'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 290 228'
				>
					<g class='clouds'>
						<path
							fill='#D9D9D9'
							d='M335 147.5c0 27.89-22.61 50.5-50.5 50.5a50.78 50.78 0 0 1-9.29-.853c-2.478 12.606-10.595 23.188-21.615 29.011C245.699 243.749 228.03 256 207.5 256a50.433 50.433 0 0 1-16.034-2.599A41.811 41.811 0 0 1 166 262a41.798 41.798 0 0 1-22.893-6.782A42.21 42.21 0 0 1 135 256a41.82 41.82 0 0 1-19.115-4.592A41.84 41.84 0 0 1 88 262c-1.827 0-3.626-.117-5.391-.343C74.911 270.448 63.604 276 51 276c-23.196 0-42-18.804-42-42s18.804-42 42-42c1.827 0 3.626.117 5.391.343C64.089 183.552 75.396 178 88 178a41.819 41.819 0 0 1 19.115 4.592C114.532 176.002 124.298 172 135 172a41.798 41.798 0 0 1 22.893 6.782 42.066 42.066 0 0 1 7.239-.773C174.137 164.159 189.749 155 207.5 155c.601 0 1.199.01 1.794.031A41.813 41.813 0 0 1 234 147h.002c.269-27.66 22.774-50 50.498-50 27.89 0 50.5 22.61 50.5 50.5Z'
						/>
					</g>
				</svg>
			</span>

			<svg
				aria-hidden='true'
				class='toggle__backdrop'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 290 228'
			>
				<g class='clouds'>
					<path
						fill='#fff'
						d='M328 167.5c0 15.214-7.994 28.56-20.01 36.068.007.31.01.621.01.932 0 23.472-19.028 42.5-42.5 42.5-3.789 0-7.461-.496-10.957-1.426C249.671 263.676 233.141 277 213.5 277a42.77 42.77 0 0 1-7.702-.696C198.089 284.141 187.362 289 175.5 289a42.338 42.338 0 0 1-27.864-10.408A42.411 42.411 0 0 1 133.5 281c-4.36 0-8.566-.656-12.526-1.876C113.252 287.066 102.452 292 90.5 292a42.388 42.388 0 0 1-15.8-3.034A42.316 42.316 0 0 1 48.5 298C25.028 298 6 278.972 6 255.5S25.028 213 48.5 213a42.388 42.388 0 0 1 15.8 3.034A42.316 42.316 0 0 1 90.5 207c4.36 0 8.566.656 12.526 1.876C110.748 200.934 121.548 196 133.5 196a42.338 42.338 0 0 1 27.864 10.408A42.411 42.411 0 0 1 175.5 204c2.63 0 5.204.239 7.702.696C190.911 196.859 201.638 192 213.5 192c3.789 0 7.461.496 10.957 1.426 2.824-10.491 9.562-19.377 18.553-24.994-.007-.31-.01-.621-.01-.932 0-23.472 19.028-42.5 42.5-42.5s42.5 19.028 42.5 42.5Z'
					/>
				</g>
			</svg>

			<span class='toggle__indicator-wrapper'>
				<span class='toggle__indicator'>
					<span class='toggle__star'>
						<span class='sun'>
							<span class='moon'>
								<span class='moon__crater'></span>
								<span class='moon__crater'></span>
								<span class='moon__crater'></span>
							</span>
						</span>
					</span>
				</span>
			</span>
			<svg
				aria-hidden='true'
				class='toggle__backdrop'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 290 228'
			>
				<g>
					<g class='stars'>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M61 11.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.749 3.749 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.749 3.749 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.749 3.749 0 0 0 2.576-2.576l.813-2.846A.75.75 0 0 1 61 11.5Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M62.5 45.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M32 31.188a.28.28 0 0 1 .27.204l.305 1.067a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.067-.305a.28.28 0 0 1 0-.54l1.067-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.203Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M41.5 74.219a.329.329 0 0 1 .315.238l.356 1.245a1.641 1.641 0 0 0 1.127 1.127l1.245.356a.328.328 0 0 1 0 .63l-1.245.356a1.641 1.641 0 0 0-1.127 1.127l-.356 1.245a.328.328 0 0 1-.63 0l-.356-1.245a1.641 1.641 0 0 0-1.127-1.127l-1.245-.356a.328.328 0 0 1 0-.63l1.245-.356a1.641 1.641 0 0 0 1.127-1.127l.356-1.245a.328.328 0 0 1 .315-.238Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M34 83.188a.28.28 0 0 1 .27.203l.305 1.068a1.405 1.405 0 0 0 .966.966l1.068.305a.28.28 0 0 1 0 .54l-1.068.305a1.405 1.405 0 0 0-.966.966l-.305 1.068a.28.28 0 0 1-.54 0l-.305-1.068a1.406 1.406 0 0 0-.966-.966l-1.068-.305a.28.28 0 0 1 0-.54l1.068-.305a1.406 1.406 0 0 0 .966-.966l.305-1.068a.281.281 0 0 1 .27-.204Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M63 89.25a.375.375 0 0 1 .36.272l.407 1.423a1.874 1.874 0 0 0 1.288 1.288l1.423.406a.374.374 0 0 1 0 .722l-1.423.406a1.874 1.874 0 0 0-1.288 1.288l-.407 1.423a.374.374 0 0 1-.72 0l-.407-1.423a1.874 1.874 0 0 0-1.288-1.288l-1.423-.406a.374.374 0 0 1 0-.722l1.423-.406a1.874 1.874 0 0 0 1.288-1.288l.407-1.423a.376.376 0 0 1 .36-.272Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M110.5 53.156a.236.236 0 0 1 .225.17l.254.89a1.174 1.174 0 0 0 .805.805l.89.254a.23.23 0 0 1 .122.084.233.233 0 0 1-.122.366l-.89.254a1.167 1.167 0 0 0-.805.805l-.254.89a.232.232 0 0 1-.225.17.235.235 0 0 1-.225-.17l-.254-.89a1.174 1.174 0 0 0-.805-.805l-.89-.254a.23.23 0 0 1-.122-.084.233.233 0 0 1 .122-.366l.89-.254a1.167 1.167 0 0 0 .805-.805l.254-.89a.232.232 0 0 1 .225-.17Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M120 27.188a.279.279 0 0 1 .27.204l.305 1.067a1.41 1.41 0 0 0 .966.966l1.067.305a.283.283 0 0 1 .148.1.286.286 0 0 1 0 .34.283.283 0 0 1-.148.1l-1.067.305a1.403 1.403 0 0 0-.966.966l-.305 1.067a.279.279 0 0 1-.439.147.275.275 0 0 1-.101-.147l-.305-1.067a1.41 1.41 0 0 0-.966-.966l-1.068-.305a.284.284 0 0 1-.147-.1.286.286 0 0 1 0-.34.284.284 0 0 1 .147-.1l1.068-.305a1.405 1.405 0 0 0 .966-.966l.305-1.067a.279.279 0 0 1 .27-.204Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M155 28.5a.753.753 0 0 1 .721.544l.813 2.846a3.746 3.746 0 0 0 2.576 2.576l2.846.813a.747.747 0 0 1 .543.721.75.75 0 0 1-.543.721l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.747.747 0 0 1-.721.543.749.749 0 0 1-.721-.543l-.813-2.846a3.746 3.746 0 0 0-2.576-2.576l-2.846-.813a.747.747 0 0 1-.543-.721.75.75 0 0 1 .543-.721l2.846-.813a3.75 3.75 0 0 0 2.576-2.576l.813-2.846A.751.751 0 0 1 155 28.5Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M147 60.25a.377.377 0 0 1 .36.272l.407 1.423a1.883 1.883 0 0 0 1.288 1.288l1.423.407a.375.375 0 0 1 0 .72l-1.423.407a1.875 1.875 0 0 0-1.288 1.288l-.407 1.423a.371.371 0 0 1-.36.272.377.377 0 0 1-.36-.272l-.407-1.423a1.883 1.883 0 0 0-1.288-1.288l-1.423-.406a.375.375 0 0 1 0-.722l1.423-.406a1.875 1.875 0 0 0 1.288-1.288l.407-1.423a.372.372 0 0 1 .36-.272Z'
								clip-rule='evenodd'
							/>
						</g>
						<g>
							<path
								fill='#fff'
								fill-rule='evenodd'
								d='M125.5 76.344a.513.513 0 0 1 .496.374l.559 1.956a2.574 2.574 0 0 0 1.771 1.771l1.956.56a.514.514 0 0 1 .27.805.514.514 0 0 1-.27.186l-1.956.559a2.57 2.57 0 0 0-1.771 1.77l-.559 1.957a.514.514 0 0 1-.806.27.514.514 0 0 1-.186-.27l-.559-1.956a2.574 2.574 0 0 0-1.771-1.771l-1.956-.56a.514.514 0 0 1-.27-.805.514.514 0 0 1 .27-.186l1.956-.559a2.57 2.57 0 0 0 1.771-1.77l.559-1.957a.515.515 0 0 1 .496-.374Z'
								clip-rule='evenodd'
							/>
						</g>
					</g>
				</g>
			</svg>
		</ToggleButton>
	);

	logoLink = logoLink || defaultLogoLink;
	links = links || defaultLinks;

	return (
		<Header className={className || 'header-light'}>
			<DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
				{logoLink}
				{modeToggle}
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
