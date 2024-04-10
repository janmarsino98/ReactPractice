import React from 'react';

interface Props {
	onclick: () => void;
}

const decrease_btn = ({ onclick }: Props) => {
	return (
		<button className='btn btn-secondary' onClick={onclick}>
			Decrease
		</button>
	);
};

export default decrease_btn;
