import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
	return (
		<Router>
			<Navigation />
				<Switch>
					<Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={Contact} />
				</Switch>
		</Router>
	);
}

export default App;
