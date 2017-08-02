//React-default imports
import React from "react";
import {render} from "react-dom";
//components Imports in order as they need to be renderd.
import Header from "./Components/Header/header";
import Bind   from "./Components/Content/Liveinput/bind";
import Toggle from "./Components/Content/Toggle/toggle";
import Like   from "./Components/Content/TwitterLike/like";
import Time   from "./Components/Content/Timer/time";
import List   from "./Components/Content/List/list"
import Footer from "./Components/Footer/footer";
render(
	<div>
		<Header/>
		<div className="container">
			<div className = "row row-content">
				<div className="col-xs-12">
				<h2>Live input preview:-</h2>
					<Bind/>
				</div>
				<div className = "col-xs-12">
				<h2>Tab-Switching In React:-</h2>
					<Toggle/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12">
				<h2>Twitter Like button:-</h2>
					<Like/>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-xs-12">
					<h2>Live Time:-</h2>
					<pre>
						<Time/>
					</pre>
					<h2>List item rendered by map function:-</h2>
					<pre>
						<List/>
					</pre>
				</div>
			</div>
		</div>
		<Footer/>
	</div>,
	document.getElementById('root')
);