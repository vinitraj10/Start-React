import React from "react";

const ListItem = ({value}) =>{
	//passing {item} here is equivalent to doing const value = props.value this  is es6 syntax.
	return <li>{value}</li>
}
export default ListItem;