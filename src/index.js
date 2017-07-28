import React from "react";
import {render} from "react-dom";
import Header from "./components/header";
import Content from "./components/content";
render(
	<div>
		<Header/>
		<Content/>
	</div>,
	document.getElementById('root')
);