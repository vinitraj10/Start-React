import React from "react";

export default class Bind extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			value:''
		}
		this.onChangeInput=this.onChangeInput.bind(this)
	}
	render(){
		return(
			<div>
				<h2>Data binding like angular:-</h2>
				<div className="well">
					<input onChange={this.onChangeInput}/><br/>
					<cite>{this.state.value}</cite>
				</div>
			</div>
		);
	}
	onChangeInput(event){
		this.setState({
			value:event.target.value
		})

	}
}