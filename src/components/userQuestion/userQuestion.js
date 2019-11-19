import React, { Component } from 'react';
import './userQuestion.css';

export class UserQuestion extends Component {
	render() {
		return (
			<section className="user-question">
				<input type="text" placeholder="Ask your question right here..." />
				<button>Ask!</button>
			</section>
		);
	}
}
