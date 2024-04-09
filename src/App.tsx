import React, { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);

	return (
		<div>
			{alertVisible && (
				<Alert
					text='Alert text'
					onclick={() => setAlertVisibility(false)}
				></Alert>
			)}
			<Button
				text='Show alert'
				type='secondary'
				onclick={() => setAlertVisibility(true)}
			></Button>
		</div>
	);
}

export default App;
