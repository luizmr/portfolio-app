import React from "react";
import styled from "styled-components";

function SecondaryHeader(text) {
	return (
		<Secondary>
			<h2 class="secondary-header">
				<span>{text.text}</span>
			</h2>
		</Secondary>
	);
}

export default SecondaryHeader;

const Secondary = styled.h2`
	.secondary-header {
		font-size: 4rem;
		color: var(--color-white);
		letter-spacing: 2px;
		user-select: text;
		margin-bottom: 0 !important;
		opacity: 1;
		visibility: visible;
		transition: all 300ms ease-out;
	}
`;
