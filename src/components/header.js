import React from "react";

export default class Header extends React.Component{
	render(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">
			        <img alt="Brand" src="/static/img/tick-mark.png" id="img-logo"/>
			      </a>
			    </div>
			  </div>
			</nav>
		)
	}
}