import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Add from './views/Add';
import Admin from './views/Admin';
import Nav from './views/Nav';

const App: React.FC<IAppProps> = props => {
	return (
		<BrowserRouter>
		<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path ='/chirp/add' component={Add} />
				<Route exact path ='/chirp/:id/admin' component={Admin} />
			</Switch>
		</BrowserRouter>
		)
	};



interface IAppProps { }

export default App;









