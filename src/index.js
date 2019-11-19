import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/header/header';
import { MainContainer } from './components/mainContainer/mainContainer';
import { Footer } from './components/footer/footer';
import { UserQuestion } from './components/userQuestion/userQuestion';
import './index.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<UserQuestion />
				<MainContainer />
				<Footer />
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
