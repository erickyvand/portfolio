import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
	return (
		<div>
			<Navigation />
			<Home />
			<About />
			<Work />
			<Contact />
		</div>
	);
}

export default App;
