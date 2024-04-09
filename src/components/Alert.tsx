import React from 'react';

interface Props {
	text: string;
	onclick: () => void;
}

const Alert = ({ text, onclick }: Props) => {
	return (
		<div className='alert alert-warning alert-dismissible' role='alert'>
			<strong>{text}</strong>
			<button
				type='button'
				className='btn-close'
				data-bs-dismiss='alert'
				aria-label='Close'
				onClick={onclick}
			></button>
		</div>
	);
};

export default Alert;
