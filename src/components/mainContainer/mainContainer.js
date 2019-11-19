import React, { Component } from 'react';
import { AnswerField } from '../answerField/answerField';
import './mainContainer.css';

export class MainContainer extends Component {
	render() {
		return (
			<section className="main-container">
				<AnswerField />
			</section>
		);
	}
}
