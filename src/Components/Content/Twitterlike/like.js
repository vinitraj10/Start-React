import React from "react";

export default class Like extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			liked:false
		}
	}
	render(){
		const isliked = this.state.liked;
		console.log(isliked);
		return (
			<div>
				<h2>Twitter Like button:-</h2>
				<span className={isliked?("heart heart-liked"):("heart")} onClick={this.handleLike.bind(this)}></span>
			</div>
		)
	}
	handleLike(){
		this.setState({
			liked:!this.state.liked
		})
	}

}


//glyphicon glyphicon-heart active
//glyphicon glyphicon-heart not-active