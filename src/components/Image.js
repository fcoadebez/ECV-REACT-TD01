import React, { Component } from 'react';

class Image extends Component {

	render() {

		return (
				<div className="image" onClick={ this.handleClick }>
				<img src={this.props.src}/>
				<p>{this.props.username}</p>
				</div>
			);
	}

	handleClick = () => {
		localStorage.setItem(this.props.id, this.props.username);
	};
}

export default Image;