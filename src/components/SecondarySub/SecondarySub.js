import React from "react";
import styled from "styled-components";

function SecondarySub(text) {
	return (
		<Secondary>
			<div class="secondary-sub">
				<span>{text.text}</span>
			</div>
		</Secondary>
	);
}

export default SecondarySub;

const Secondary = styled.div`
	.secondary-sub {
		font-family: var(--font-secondary);
		font-size: 1.6rem;
		color: var(--color-text);
		display: inline-block;
		margin: 1rem 0 5rem;
		line-height: 1.5;
		user-select: text;

		opacity: 1;
		visibility: visible;
		transition: all 300ms ease-out;
	}
`;
