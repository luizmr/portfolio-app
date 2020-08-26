import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Button(text) {
	// console.log(text.text);
	return (
		<div>
			<Link to="/portfolio" className="button">
				<button className="button__top">{text.text}</button>
				<button className="button__bottom">{text.text}</button>
			</Link>
		</div>
	);
}

export default Button;
