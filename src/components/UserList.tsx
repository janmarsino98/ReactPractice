import React from 'react';

interface Props {
	header: string;
	items: string[];
}

const UserList = ({ header, items }: Props) => {
	return (
		<>
			<h4>{header}</h4>
			<ul>
				{items.map((item, index) => (
					<li className='list-group-item' key={index}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
};

export default UserList;
