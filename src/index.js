import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/header/header';
import { MainContainer } from './components/mainContainer/mainContainer';
import { UserQuestion } from './components/mainContainer/userQuestion/userQuestion';
import './index.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<MainContainer />
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
