import React from "react";
import styled from "styled-components";

function PrimaryHeader(text, name) {
	console.log(text);
	return (
		<Primary>
			<div class="primary-header">
				<span>{text.text}</span>
				<span>{text.text}</span>
			</div>
		</Primary>
	);
}

export default PrimaryHeader;

const Primary = styled.div`
	.primary-header {
		margin: 0;
		font-size: 10.5rem;
		color: var(--color-white);
		letter-spacing: 4px;

		@media only screen and (max-width: 62.5em) {
			font-size: 8rem;
		}

		@media only screen and (max-width: 44.375em) {
			font-size: 5rem;
			margin-bottom: 1rem;
		}

		@media only screen and (max-width: 31.25em) {
			span {
				display: block;
			}
		}
	}
`;
