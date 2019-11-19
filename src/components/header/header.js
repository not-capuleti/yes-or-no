import React, { Component } from 'react';
import './header.css';

export class Header extends Component {
	render() {
		return (
			<header>
				<h1>Yes or no? Just ask!</h1>
				<div className="text-overlap">
					<p id="first-question">Yes or no?</p>
					<p id="second-question">Yes or no?</p>
					<p id="third-question">Yes or no?</p>
				</div>
			</header>
		);
	}
}
