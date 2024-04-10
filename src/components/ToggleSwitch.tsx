import React from 'react';

interface Props {
	onClick: () => void;
}

const ToggleSwitch = ({ onClick }: Props) => {
	return (
		<div>
			<p>ToggleSwitch</p>
			<button className='btn btn-secondary' onClick={onClick}>
				Change visibility
			</button>
		</div>
	);
};

export default ToggleSwitch;
