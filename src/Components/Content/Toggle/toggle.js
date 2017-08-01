import React from "react";
import Home from "./tabs/home";
import Profile from "./tabs/profile";
import Message from "./tabs/message";

export default class Toggle extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isHome : true,
			isProfile: false,
			isMessages: false,
		}

	}
	render(){
		const checkHome = this.state.isHome;
		const checkProfile = this.state.isProfile;
		const checkMsg = this.state.isMessages;
		return (
			<div>
				<ul className="nav nav-tabs">
				  <li role="presentation" className={checkHome?("active"):null}><a href="#" onClick={this.home.bind(this)}>Home</a></li>
				  <li role="presentation" className={checkProfile?("active"):null}><a href="#" onClick = {this.profile.bind(this)}>Profile</a></li>
				  <li role="presentation" className={checkMsg?("active"):null}><a href="#" onClick = {this.message.bind(this)}>Messages</a></li>
				</ul>
				<div className="well">
					{checkHome?(<Home/>):(checkProfile?(<Profile/>):(<Message/>))}
				</div>
			</div>
		);
	}
	home(){
		this.setState({
			isHome:true,
			isProfile:false,
			isMessages:false
		});
	//	console.log(this.state);
	}
	profile(){
		this.setState({
			isHome:false,
			isProfile:true,
			isMessages:false
		});
	//	console.log(this.state);
	}
	message(){
		this.setState({
			isHome:false,
			isProfile:false,
			isMessages:true
		});
	//	console.log(this.state);
	}
	/*current(){
		console.log("function called")
		return (
			if(this.state.isProfile){
				return <small>Profile Section Dude!</small>
			}
		)
	}*/

} 

