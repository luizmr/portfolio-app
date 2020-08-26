import React, { useState } from "react";

import { FaTimes, FaEye, FaCode } from "react-icons/fa";
import styled from "styled-components";

function Project(project) {
	const [showProject, setShowProject] = useState(false);
	console.log(project.project.name);
	return (
		<ProjectDiv>
			<div className="col-1-of-2 project">
				<div className="project__item">
					{project.project.name === "Github Clone" ? (
						<img
							className="project__img"
							src={require(`../../images/${project.project.img}`)}
							alt="Project Image"
							style={{ width: "30%" }}
						/>
					) : (
						<img
							className="project__img"
							src={require(`../../images/${project.project.img}`)}
							alt="Project Image"
						/>
					)}

					<div className="project__overlay">
						<div className="project__buttons">
							<a
								href="#"
								className="project__button"
								onClick={() => setShowProject(true)}
								style={{ width: "15rem" }}
							>
								<FaEye />
								View Project
							</a>
						</div>
					</div>
				</div>

				<div
					className={
						showProject
							? "project__background--show project__background"
							: "project__background"
					}
				>
					<div
						className={
							showProject
								? "project__modal--show project__modal"
								: "project__modal"
						}
					>
						<a
							href="#"
							className="project__close"
							onClick={() => setShowProject(false)}
						>
							<FaTimes />
						</a>

						<div className="project__left">
							<img
								className="project__img--modal"
								src={require(`../../images/${project.project.img}`)}
								alt="Project Image"
							/>
						</div>

						<div className="project__right">
							<div className="project__label">Project</div>
							<h3 className="project__name">
								{project.project.name}
							</h3>
							<ul class="project__technologies">
								{project.project.technologies.map(
									(technology, index) => (
										<li
											class="project__technology"
											key={index}
										>
											{technology.name}
										</li>
									)
								)}
							</ul>

							<div class="project__label">About</div>
							<p class="project__summary">
								{project.project.summary}
							</p>
							<div className="project__buttonsLink">
								<a
									href={project.project.demo}
									class="project__button project__button--modal"
									target="_blank"
								>
									<FaEye />
									Demo
								</a>

								<a
									href={project.project.code}
									class="project__button project__button--modal"
									target="_blank"
								>
									<FaCode />
									Code
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ProjectDiv>
	);
}

export default Project;

const ProjectDiv = styled.div`
	.project {
		overflow: hidden;
		box-shadow: 0 0 10px var(--color-black);
		background-color: #222327;
		opacity: 1;
		transition: all 300ms ease-out;
		visibility: visible;
		width: 100%;
		height: 100%;

		@media (max-width: 568px) {
			width: 45rem;
		}
		@media (max-width: 420px) {
			width: 30rem;
		}

		@media (max-width: 360px) {
			width: 25rem;
		}

		&__item {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 340px;
			width: 60rem;

			@media (max-width: 568px) {
				width: 45rem;
			}

			@media (max-width: 420px) {
				width: 30rem;
			}

			@media (max-width: 360px) {
				width: 25rem;
			}
		}

		&:hover .project__overlay {
			opacity: 1;
			visibility: visible;
		}

		&:hover .project__img {
			transform: scale(1.1);
		}

		&__img {
			max-width: 60%;
			max-height: 50%;
			transition: all 200ms;

			@media (max-width: 420px) {
				max-width: 80%;
			}

			@media (max-width: 360px) {
				max-width: 95%;
			}
			&--modal {
				object-fit: contain;
				width: 90%;
				height: 90%;

				@media only screen and (max-width: 45em) {
					object-fit: contain;
				}

				@media only screen and (max-width: 420px) {
					z-index: 1300;
				}
			}
		}

		&__overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: radial-gradient(transparent, #0005);
			transition: all 200ms;
			opacity: 0;
			visibility: hidden;
			text-align: center;
		}

		&__buttons {
			position: absolute;
			bottom: 1.5rem;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;

			@media only screen and (max-width: 31.25em) {
				bottom: 0.5rem;
			}
		}

		&__button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 5rem;
			text-decoration: none;
			color: var(--color-secondary);
			font-family: var(--font-primary);
			font-size: 1.8rem;
			letter-spacing: 1px;
			margin: 0 auto;
			background-color: #fff8;
			border: none;
			border-radius: 3px;
			padding: 0.5rem 2rem;
			cursor: pointer;
			transition: all 200ms;

			@media only screen and (max-width: 31.25em) {
				font-size: 1.6rem;
			}
			&:disabled,
			&:disabled:hover {
				background-color: #fff4;
				cursor: default;
			}

			svg {
				margin-bottom: 0.1rem;
				margin-right: 0.5rem;
			}

			&:hover,
			&:focus,
			&:active {
				background-color: #fff;
			}

			&--modal {
				margin: 2rem 0.5rem 0 0.5rem;
				font-size: 1.4rem;
				padding: 0.5rem 1.5rem;
			}
		}

		&__buttonsLink {
			display: flex;
			justify-content: left;
			align-items: center;
			height: 20px;

			@media only screen and (max-width: 824px) {
				padding-bottom: 40px;
			}
		}

		&__background {
			position: fixed;
			top: 0;
			left: 0;
			z-index: var(--layer-modal);
			width: 100%;
			height: 100%;
			background-color: #0003;
			opacity: 0;
			visibility: hidden;
			transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

			&--show {
				opacity: 1;
				visibility: visible;
			}
		}

		&__modal {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100rem;
			height: 52rem;
			background-color: var(--color-primary);
			user-select: text;
			box-shadow: 0 0 5px var(--color-black);
			opacity: 0;
			transition: all 400ms 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
			transform: translate(-50%, -50%) scale(0.25);
			display: grid;
			grid-template-columns: 1fr 1fr;

			&--show {
				opacity: 1;
				transform: translate(-50%, -50%) scale(1);
			}

			@media only screen and (max-width: 824px) {
				width: 90vw;
				height: 300px;
				margin: 0 auto;

				overflow: hidden;

				/* &::-webkit-scrollbar {
					display: none;
				} */
			}

			@media only screen and (max-width: 768px) {
				width: 90%;
				min-height: 80vh;
				grid-template-columns: 1fr;
				grid-template-rows: 1fr 1fr;
			}

			@media only screen and (max-width: 420px) {
				width: 80%;
				height: 90vh;
				z-index: 1200;
			}

			@media only screen and (max-width: 375px) {
				width: 90vw;
				height: 95vh;
			}
		}

		&__close {
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
			background-color: transparent;
			border: none;
			color: var(--color-text);
			font-size: 3rem;
			cursor: pointer;
			transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

			&:hover {
				transform: scale(1.2);
			}

			@media only screen and (max-width: 420px) {
				z-index: 1300;
			}
		}

		&__left {
			width: 60rem;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #222327;

			@media only screen and (max-width: 824px) {
				width: 100%;
				height: 300px;
			}

			@media only screen and (max-width: 768px) {
				width: 100%;
				height: 100%;
			}

			@media only screen and (max-width: 420px) {
				width: 100%;
				height: auto;
				z-index: 1200;
			}
		}

		&__right {
			width: 90%;

			display: inline-block;
			vertical-align: top;
			padding: 1.5rem;
			color: var(--color-white);

			@media only screen and (max-width: 824px) {
				width: 90%;
				height: 300px;

				overflow: scroll;

				&::-webkit-scrollbar {
					display: none;
				}
			}

			@media only screen and (max-width: 768px) {
				width: 90%;
				margin: 0 auto;
				padding-bottom: 50px;

				overflow: scroll;

				&::-webkit-scrollbar {
					display: none;
				}
			}

			@media only screen and (max-width: 740px) {
				width: 80%;
				z-index: 1200;
				overflow: scroll;

				&::-webkit-scrollbar {
					display: none;
				}
			}
		}

		&__label {
			font-size: 1.6rem;
			color: var(--color-text);
			letter-spacing: 1px;
		}

		&__name {
			font-size: 3rem;
			letter-spacing: 1px;
			font-weight: lighter;
			margin: 10px 0 0;
		}

		&__technologies {
			list-style: none;
			margin: 1rem 0 2rem -0.5rem;
			padding: 0;
		}

		&__technology {
			display: inline-block;
			margin: 0.5rem;
			border: 1px solid var(--color-secondary);
			padding: 0.5rem;
			color: var(--color-text);
			font-weight: lighter;
			letter-spacing: 1px;
			font-size: 1.3rem;
		}
		&__summary {
			margin-top: 1rem;
			font-family: var(--font-secondary);
			font-size: 1.4rem;
			line-height: 1.5;
			color: var(--color-text);
			overflow-y: scroll;
			height: 22rem;
			white-space: pre-line;

			&::-webkit-scrollbar-track {
				background-color: var(--color-primary-dark-2);
			}
		}
	}
`;
