import React from 'react';

interface Props {
	text: string;
	type: string;
	onclick: () => void;
}

const Button = ({ text, type, onclick }: Props) => {
	return (
		<button className={'btn btn-' + type} onClick={onclick}>
			{text}
		</button>
	);
};

export default Button;
