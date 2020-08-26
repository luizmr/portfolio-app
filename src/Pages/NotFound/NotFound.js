import React from "react";
import notFound from "../../images/notfound.png";
import styled from "styled-components";

export default function NotFound() {
	return (
		<NFImg>
			<img src={notFound} alt="not found" />
		</NFImg>
	);
}

const NFImg = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	img {
		max-width: 800px;
	}
`;
