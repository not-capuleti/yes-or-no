import React, { Component } from 'react';
import './userQuestion.css';

export class UserQuestion extends Component {
	render() {
		const { question, handleInputOnChange, clickHandler } = this.props;
		return (
			<div className="user-question">
				<form>
					<input
						type="text"
						value={question}
						onChange={handleInputOnChange}
						placeholder="Ask your question right here..."
					/>
					<button type="submit" onClick={clickHandler}>
						Ask!
					</button>
				</form>
			</div>
		);
	}
}
