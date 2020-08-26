import React from "react";
import "./styles.css";

function Footer() {
	return (
		<footer class="footer">
			<div class="footer__item">&copy; 2020 Luiz Marcelo Rocha</div>
			<div class="footer__item">
				<div class="footer__contact">
					Email:{" "}
					<a href="mailto:luizmmrocha@gmail.com" class="footer__link">
						luizmmrocha@gmail.com
					</a>
				</div>
				<div class="footer__contact">
					Tel:{" "}
					<a href="tel: +55014981333862" class="footer__link">
						+55 (014) 98133-3862
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
