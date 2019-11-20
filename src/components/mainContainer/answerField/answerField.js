import React, { Component, Fragment } from 'react';
import './answerField.css';

export class AnswerField extends Component {
	render() {
		const { isClicked, data } = this.props;
		return (
			<section className="answer-field">
				{isClicked ? (
					<Fragment>
						{data.image !== '' && <p id="answer">{data.answer}</p>}
						<div className="img-wrapper">
							<img src={data.image} />
						</div>
					</Fragment>
				) : (
					<h2>
						And the answer is
						<span className="dot">.</span>
						<span className="dot">.</span>
						<span className="dot">.</span>
					</h2>
				)}
			</section>
		);
	}
}
