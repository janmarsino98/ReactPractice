import React from 'react';

interface Props {
	onclick: () => void;
}

const Reset_btn = ({ onclick }: Props) => {
	return (
		<button className='btn btn-secondary' onClick={onclick}>
			Reset
		</button>
	);
};

export default Reset_btn;
