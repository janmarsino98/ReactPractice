import React from 'react';

interface Props {
	onclick: () => void;
}

const increment_btn = ({ onclick }: Props) => {
	return (
		<button className='btn btn-primary' onClick={onclick}>
			Increase
		</button>
	);
};

export default increment_btn;
