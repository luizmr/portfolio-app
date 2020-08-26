import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

import styled from "styled-components";
import "./syles.css";
import { motion } from "framer-motion";

function About() {
	const [loading, setLoading] = useState(true);
	const [textArray, setTextArray] = useState([
		"I'm a Front end developer looking for a job, currently based in São Paulo, Brazil. Feel free to contact me!",
	]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	console.log(textArray);
	let newArray = textArray[0].split(" ");
	console.log(newArray);

	return (
		<main className={loading ? "rotate" : ""} className="about">
			<motion.div
				className="primary-header"
				animate={{ opacity: 1 }}
				transition={{ duration: 3 }}
			>
				<span>Hey, it's</span>
				<span> Luiz Marcelo Rocha</span>
			</motion.div>

			<PrimarySubText>
				<motion.div
					className="primary-sub"
					animate={{ opacity: 1 }}
					transition={{ duration: 3, delay: 1 }}
				>
					{newArray.map((word, index) => (
						<div className="primary-sub__word" key={index}>
							<div
								className="primary-sub__top"
								onMouseOver={(e) => {
									const val = e.currentTarget;
									console.log(val);
									e.persist();
									if (
										e.currentTarget.classList.contains(
											"primary-sub__top"
										) ||
										e.currentTarget.classList.contains(
											"primary-sub__bottom"
										)
									) {
										console.log("tenho");
										e.currentTarget.parentNode.classList.add(
											"primary-sub__word--active"
										);
										setTimeout(() => {
											val.parentNode.classList.remove(
												"primary-sub__word--active"
											);
										}, 2000);
									}
								}}
							>
								{word}
							</div>
							<div className="primary-sub__bottom">{word}</div>
						</div>
					))}
				</motion.div>
			</PrimarySubText>
			<Button text="View Projects"></Button>
		</main>
	);
}

export default About;

const PrimarySubText = styled.div`
	.primary-sub {
		color: var(--color-text);
		line-height: 1;
		opacity: 0;

		font-size: 3rem;
		display: block;

		@media only screen and (max-width: 420px) {
			font-size: 2rem;
		}

		&__word {
			display: inline-block;
			vertical-align: top;
			margin: 0 0.5rem;
			height: 4rem;
			overflow: hidden;

			@media only screen and (max-width: 44.375em) {
				height: 2.5rem;
				margin: 0 0.3rem;
			}

			* {
				transition: all 250ms;
			}

			&__bottom {
				visibility: hidden;
			}

			&--active * {
				transform: translateY(-4rem);

				@media only screen and (max-width: 44.375em) {
					transform: translateY(-3rem);
				}
			}

			&--active &__bottom {
				visibility: visible;
			}
		}

		&__top {
			margin-bottom: 1rem;
			margin-top: 1rem;

			@media only screen and (max-width: 450px) {
				margin-bottom: 1rem;
				margin-top: 0.5rem;
			}
		}

		&__bottom {
			color: var(--color-text-dark);
		}
	}
`;
