import React from "react";
import html5 from "../../images/html5logo.png";
import css from "../../images/csslogo.png";
import sass from "../../images/sasslogo.png";
import bootstrap from "../../images/bootstraplogo.png";
import javascript from "../../images/jslogo.png";
import jquery from "../../images/jquerylogo.png";
import react from "../../images/reactlogo.png";
import git from "../../images/gitlogo.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./styles.css";

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

export default function Skills() {
	return (
		<SkillsImgs>
			<div className="skills">
				<motion.img
					src={html5}
					alt="html"
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				/>
			</div>
			<div className="skills">
				<motion.img
					src={css}
					alt="css"
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 0.5 }}
				/>
			</div>
			<div className="skills">
				<motion.img
					src={sass}
					alt="sass"
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 1 }}
				/>
			</div>
			<div className="skills">
				<motion.img
					src={bootstrap}
					alt="bootstrap"
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 1.5 }}
				/>
			</div>
			<div className="skills">
				<motion.img
					src={javascript}
					alt="js"
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 2 }}
				/>
			</div>
			<div className="skills">
				<motion.img
					src={jquery}
					alt="jquery"
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 2.5 }}
				/>
			</div>
			<div className="skills">
				<motion.img
					src={react}
					alt="react"
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 3 }}
				/>
			</div>
			<div className="skills">
				<motion.img
					src={git}
					alt="git"
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 3.5 }}
				/>
			</div>
		</SkillsImgs>
	);
}

const SkillsImgs = styled.div`
	max-width: 80%;

	margin: 10vh auto 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 3rem;

	@media (max-width: 1366px) {
		margin: 20vh auto 0;
	}

	@media (max-width: 1024px) {
		margin: 10vh auto 0;
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 420px) {
		margin: 8vh auto 0;
		grid-template-columns: 1fr 1fr;
	}

	img {
		max-width: 200px;
		margin: 0 auto;
		opacity: 0;

		@media (max-width: 420px) {
			width: 100px;
			margin: 0 auto 0 30px;
		}

		@media (max-width: 375px) {
			width: 80px;
			margin: 0 auto 0 30px;
		}
		@media (max-width: 360px) {
			width: 80px;
			margin: 0 auto 0 40px;
		}
		@media (max-width: 320px) {
			width: 65px;
			margin: 0 auto 0 40px;
		}
	}
`;
