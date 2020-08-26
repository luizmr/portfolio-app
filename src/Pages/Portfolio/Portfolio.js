import React, { useState, useEffect } from "react";
import Projects from "../../components/Projects/Projects";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader";
import SecondarySub from "../../components/SecondarySub/SecondarySub";
import "./styles.css";

function Portfolio() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	return (
		<main>
			<SecondaryHeader
				className={loading ? "slide-top" : ""}
				text="Portfolio"
			></SecondaryHeader>
			<SecondarySub
				className={loading ? "slide-top" : ""}
				text="These are my favorite projects I've worked on in my dev life.
				Have a look around and feel free to contact me!"
			></SecondarySub>
			<Projects></Projects>
		</main>
	);
}

export default Portfolio;
