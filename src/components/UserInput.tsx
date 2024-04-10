import React from 'react';

interface Props {
	onChange: (event) => void;
	text: string;
}

const UserInput = ({ onChange, text }: Props) => {
	return (
		<>
			<input type='text' value={text} onChange={onChange} />
		</>
	);
};

export default UserInput;
