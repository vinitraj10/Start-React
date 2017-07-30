//React-default imports
import React from "react";
import {render} from "react-dom";
//components Imports in order as they need to be renderd.
import Header from "./components/header";
import Bind from "./components/bind";
import Toggle from "./components/toggle";
import Footer from "./components/footer";
render(
	<div>
		<Header/>
		<Bind/>
		<div className="container">
			<div className = "row">
				<div className = "col-xs-6">
					<Toggle/>
				</div>
			</div>
		</div>
		<Footer/>
	</div>,
	document.getElementById('root')
);