import React from "react";
import ListItem from "./list-item";
const List = () => {
	const items = [1,2,3,4,5];
	const item  = items.map((item) => {
		return <ListItem value={item} key={item}/>
	}); 
	return (
		<ul>
			{item}
		</ul>
	)
}
export default List;