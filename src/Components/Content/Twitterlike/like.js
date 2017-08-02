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
		return (
			<div>
				<span className={isliked?("heart heart-liked"):("heart")} onClick={this.handleLike.bind(this)}></span>
			</div>
		);
	}
	handleLike(){
		this.setState({
			liked:!this.state.liked
		});
	}

}


//glyphicon glyphicon-heart active
//glyphicon glyphicon-heart not-active