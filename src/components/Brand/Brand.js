import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./styles.css";

function Brand() {
	return (
		<Link to="/" className="brand">
			<div class="brand__img">
				<img className="brand__img" src={logo} alt="logo image" />
			</div>
		</Link>
	);
}

export default Brand;
