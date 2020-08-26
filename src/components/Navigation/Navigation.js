import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
	const [nav, setNav] = useState(false);
	return (
		<NavigationDiv>
			<div className="navigation">
				<input
					type="checkbox"
					className="navigation__checkbox"
					id="nav_toggle"
					onClick={() => setNav(true)}
				/>
				<label htmlFor="nav_toggle" className="navigation__button">
					<div className="navigation__line"></div>
					<div className="navigation__line"></div>
					<div className="navigation__line"></div>
				</label>

				<nav className="navigation__nav">
					<ul className="navigation__list">
						<li
							className="navigation__item"
							onClick={() => setNav(false)}
						>
							<Link
								to="/"
								className="navigation__link"
								onClick={() => {
									let x = document.getElementById(
										"nav_toggle"
									);

									x.checked = false;
								}}
							>
								<span>About</span>
							</Link>
						</li>

						<li
							className="navigation__item"
							onClick={() => setNav(false)}
						>
							<Link
								to="/portfolio"
								className="navigation__link"
								onClick={() => {
									let x = document.getElementById(
										"nav_toggle"
									);

									x.checked = false;
								}}
							>
								<span>Portfolio</span>
							</Link>
						</li>
						<li
							className="navigation__item"
							onClick={() => setNav(false)}
						>
							<Link
								to="/skills"
								className="navigation__link"
								onClick={() => {
									let x = document.getElementById(
										"nav_toggle"
									);

									x.checked = false;
								}}
							>
								<span>Skills</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</NavigationDiv>
	);
}

export default Navigation;

const NavigationDiv = styled.div`
	.navigation {
		/* Button */
		&__checkbox {
			display: none;
		}

		&__button {
			position: fixed;
			top: 3rem;
			right: 4rem;
			z-index: 800;
			width: 4.2rem;
			cursor: pointer;

			@media only screen and (min-width: 120em) {
				width: 6.2rem;
			}
		}

		&__line {
			display: inline-block;
			width: 100%;
			height: 2px;
			background-color: var(--color-text);
			transition: all 300ms var(--cubic-bezier-primary),
				background-color 300ms ease-in;
			vertical-align: middle;
			margin: auto;

			&:nth-child(1),
			&:nth-child(3) {
				transform-origin: 5.5% 50%;

				@media only screen and (min-width: 100em) {
					transform-origin: 20.5% 50%;
				}
			}
		}

		/* Button hover */
		&__button:hover .navigation__line:nth-child(1) {
			transform: translateY(-0.4rem);
		}

		&__button:hover .navigation__line:nth-child(3) {
			transform: translateY(0.4rem);
		}

		/* Button Functionality */
		&__checkbox:checked + .navigation__button {
			transform: scale(1.4);
			z-index: 1000;
			transition: all 300ms var(--cubic-bezier-primary);
		}

		&__checkbox:checked + .navigation__button:hover {
			transform: scale(1.6);
		}

		&__checkbox:checked + .navigation__button .navigation__line {
			background-color: var(--color-white);
			transition: all 300ms var(--cubic-bezier-primary),
				background-color 300ms ease-out;
		}

		&__checkbox:checked
			+ .navigation__button
			.navigation__line:nth-child(2) {
			transform: translateX(-100%);
			opacity: 0;
			visibility: hidden;
		}

		&__checkbox:checked
			+ .navigation__button
			.navigation__line:nth-child(1) {
			transform: rotate(45deg) translate(5px, 5px);
		}

		&__checkbox:checked
			+ .navigation__button
			.navigation__line:nth-child(3) {
			transform: rotate(-45deg);
		}

		/* Nav */
		&__nav {
			position: fixed;
			z-index: var(--layer-navigation);
			top: 0;
			left: 0;
			background: var(--color-primary);
			width: 100%;
			height: 0;
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 300ms ease-out;
		}

		&__checkbox:checked ~ .navigation__nav {
			height: 100%;
		}

		&__list {
			list-style: none;
			width: 60rem;
			margin: auto;

			@media only screen and (max-width: 1366px) {
				width: 80%;
				padding: 0;
			}

			@media only screen and (min-width: 100em) {
				width: 80rem;
			}
		}

		&__item {
			width: 100%;
		}

		&__link {
			&:visited,
			&:link {
				width: 100%;
				padding: 2.5rem 0;
				display: block;
				text-align: center;
				font-size: 3.5rem;
				text-decoration: none;
				color: var(--color-white);
				text-transform: uppercase;
				position: relative;
				background: var(--color-primary-dark);
			}

			span {
				position: relative;
			}

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: var(--color-primary-dark-2);
				transform: scaleX(0);
				transition: all 300ms ease-out;
			}

			&:hover,
			&:active,
			&:focus {
				text-decoration: none;

				&:before {
					transition: all 300ms var(--cubic-bezier-primary);
					transform: scaleX(1);
				}
			}
		}
	}
`;
