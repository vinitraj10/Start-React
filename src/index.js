import React from "react";
import {render} from "react-dom";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
render(
	<div>
		<Header/>
		<Content/>
		<Footer/>
	</div>,
	document.getElementById('root')
);