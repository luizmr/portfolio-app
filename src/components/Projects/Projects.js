import React, { useState } from "react";
import Project from "../Project/Project";
import styled from "styled-components";
import { motion } from "framer-motion";

import db from "../../db.json";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
};

const item1 = {
	hidden: { x: -50, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

const item2 = {
	hidden: { x: 50, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

function Projects() {
	const [loading, setLoading] = useState(true);

	return (
		<motion.Portfolio
			className="portfolio"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<div className="row">
				<motion.div variants={item1}>
					<Project
						project={db.tratoflix}
						className={loading ? "slide-left" : ""}
					></Project>
				</motion.div>

				<motion.div variants={item2} transition={{ delay: 0.5 }}>
					<Project
						project={db.portfolio}
						className={loading ? "slide-right" : ""}
					></Project>
				</motion.div>
			</div>
			<div className="row">
				<motion.div variants={item1} transition={{ delay: 1 }}>
					<Project
						project={db.pokedex}
						className={loading ? "slide-left" : ""}
					></Project>
				</motion.div>
				<motion.div variants={item2} transition={{ delay: 1.5 }}>
					<Project
						project={db.amazon}
						className={loading ? "slide-left" : ""}
					></Project>
				</motion.div>
			</div>
			<div className="row">
				<motion.div variants={item1} transition={{ delay: 2 }}>
					<Project
						project={db.githubfinder}
						className={loading ? "slide-left" : ""}
					></Project>
				</motion.div>
				<motion.div variants={item2} transition={{ delay: 2.5 }}>
					<Project
						project={db.githubclone}
						className={loading ? "slide-left" : ""}
					></Project>
				</motion.div>
			</div>
			<div className="row">
				<motion.div variants={item1} transition={{ delay: 3 }}>
					<Project
						project={db.covidtracker}
						className={loading ? "slide-left" : ""}
					></Project>
				</motion.div>
			</div>
		</motion.Portfolio>
	);
}

export default Projects;

const Portfolio = styled.div`
	.portfolio {
		margin-top: 4rem;
	}

	.slide-left {
		opacity: 0;
		visibility: hidden;
		transform: translateX(-5rem);
	}
	.slide-right {
		opacity: 0;
		visibility: hidden;
		transform: translateX(5rem);
	}
`;
