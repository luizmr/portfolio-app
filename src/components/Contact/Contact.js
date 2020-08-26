import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPortrait } from "react-icons/fa";
import "./styles.css";

function Contact() {
	return (
		<div className="contact">
			<ul className="contact__list">
				<li className="contact__item">
					<a
						href="https://www.linkedin.com/in/luizmarcelorocha/"
						target="_blank"
						className="contact__link contact__link--linkedin"
					>
						<div className="contact__flex">
							<span className="contact__label">Linkedin</span>
							<span className="contact__icon">
								<FaLinkedin />
							</span>
						</div>
					</a>
				</li>

				<li className="contact__item">
					<a
						href="https://github.com/luizmr"
						target="_blank"
						className="contact__link contact__link--github"
					>
						<div className="contact__flex">
							<span className="contact__label">Github</span>
							<span className="contact__icon">
								<FaGithub />
							</span>
						</div>
					</a>
				</li>

				<li className="contact__item">
					<a
						href="mailto:luizmmrocha@gmail.com"
						target="_blank"
						className="contact__link contact__link--email"
					>
						<div className="contact__flex">
							<span className="contact__label">Email</span>
							<span className="contact__icon">
								<FaEnvelope />
							</span>
						</div>
					</a>
				</li>

				<li className="contact__item">
					<a
						href="https://drive.google.com/file/d/16L84GdcLIOTUBlfbWEcVDt9gkvTvKQp7/view?usp=sharing"
						target="_blank"
						className="contact__link contact__link--resume"
					>
						<div className="contact__flex">
							<span className="contact__label">Resume</span>
							<span className="contact__icon">
								<FaPortrait />
							</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
