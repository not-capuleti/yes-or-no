import React, { Component, Fragment } from 'react';
import { AnswerField } from './answerField/answerField';
import { UserQuestion } from './userQuestion/userQuestion';

export class MainContainer extends Component {
	state = {
		isClicked: false,
		data: null,
		question: ''
	};

	handleInputOnChange = (e) => {
		e.preventDefault();
		this.setState({ question: e.target.value });
	};

	clickHandler(e) {
		e.preventDefault();
		const fetchPromise = fetch('https://yesno.wtf/api');

		this.state.question === ''
			? alert('Type the question you want to ask in input field.')
			: fetchPromise
					.then((resp) => {
						if (resp.ok) {
							return resp.json();
						}
						throw new Error('Error');
					})
					.then((data) => {
						this.setState({
							isClicked: true,
							data: data,
							question: ''
						});
					});
	}

	render() {
		const { isClicked, data, question } = this.state;
		return (
			<Fragment>
				<UserQuestion
					isClicked={isClicked}
					data={data}
					question={question}
					clickHandler={this.clickHandler.bind(this)}
					handleInputOnChange={this.handleInputOnChange.bind(this)}
				/>
				<AnswerField isClicked={isClicked} data={data} question={question} />
			</Fragment>
		);
	}
}
