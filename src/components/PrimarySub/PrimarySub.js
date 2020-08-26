import React, { useState, useEffect } from "react";
import styled from "styled-components";

function PrimarySub(text) {
	const [textArray, setTextArray] = useState(["oi", "dsds"]);
	// console.log(text.text.toString().split(""));

	let newArray = text.text.toString().split("");
	console.log(newArray);

	// setTextArray(newArray);

	return (
		<Primary>
			<div className="primary-sub">
				{textArray.map((word, index) => (
					<div
						className="primary-sub__word"
						key={index}
						onMouseOver={(e) => {
							if (
								e.currentTarget.classList.contains(
									"primary-sub__top"
								) ||
								e.currentTarget.classList.contains(
									"primary-sub__bottom"
								)
							) {
								e.currentTarget.parentNode.classList.add(
									"primary-sub__word--active"
								);
								setTimeout(() => {
									e.currentTarget.parentNode.classList.remove(
										"primary-sub__word--active"
									);
								}, 2000);
							}
						}}
					>
						<div className="primary-sub__top">{word}</div>
						<div className="primary-sub__bottom">{word}</div>
					</div>
				))}
			</div>
		</Primary>
	);
}

export default PrimarySub;

const Primary = styled.div`
	.primary-sub {
		color: var(--color-text);
		line-height: 1;
		font-size: 3rem;
		display: block;

		@media only screen and (max-width: 44.375em) {
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
		}

		&__bottom {
			color: var(--color-text-dark);
		}
	}
`;
