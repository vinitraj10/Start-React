//React-default imports
import React from "react";
import {render} from "react-dom";
//components Imports in order as they need to be renderd.
import Header from "./Components/Header/header";
import Bind   from "./Components/Content/Liveinput/bind";
import Toggle from "./Components/Content/Toggle/toggle";
import Like   from "./Components/Content/TwitterLike/like";
import Footer from "./Components/Footer/footer";
render(
	<div>
		<Header/>
		<div className="container">
			<div className = "row row-content">
				<div className="col-xs-12">
					<Bind/>
				</div>
				<div className = "col-xs-12">
					<Toggle/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<Like/>
				</div>
			</div>
		</div>
		<Footer/>
	</div>,
	document.getElementById('root')
);