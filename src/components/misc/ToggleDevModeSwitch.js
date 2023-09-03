import React, { useState } from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { FaCode, FaPaintBrush } from 'react-icons/fa';

import GooFilter from './GooFilter';

const ToggleDevModeSwitch = () => {
	const [isDevMode, setIsDevMode] = useState(true);

	const toggleDevMode = () => {
		setIsDevMode(!isDevMode);
	};

	const ToggleContainer = tw.div`flex justify-between items-center text-sm text-holiness-600 w-1/5`;

	const ToggleButton = tw.div`flex bg-rain rounded-full shadow-lg w-12 h-6 filter cursor-pointer`;

	const Switch = tw.div`absolute left-0 top-[-4px] h-8 w-8 rounded-full bg-white shadow-lg transition ease-in-out duration-300 items-center justify-center flex`;

	const InputCheckbox = tw.input`opacity-0 absolute`;

	return (
		<ToggleContainer>
			<span>Dev Mode</span>
			<ToggleButton onClick={toggleDevMode} style={{ filter: "url('#goo')" }}>
				<InputCheckbox type='checkbox' checked={isDevMode} onChange={toggleDevMode} />
				<Switch
					style={{
						transform: isDevMode ? 'translateX(100%)' : 'translateX(0)',
					}}
				>
					{isDevMode ? <FaPaintBrush tw='text-go' /> : <FaCode tw='text-go' />}
				</Switch>
				<GooFilter />
			</ToggleButton>
			<span>Creative Mode</span>
		</ToggleContainer>
	);
};

export default ToggleDevModeSwitch;