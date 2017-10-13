import React, { Component } from 'react';

class InputText extends Component {
	render() {
		const { value, onChange } = this.props;
		return(
			<input value={ value } onChange={ onChange }/>
			);
	};
}

export default InputText;