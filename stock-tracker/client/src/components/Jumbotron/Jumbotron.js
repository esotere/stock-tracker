import React from "react";

const Jumbotron = ({ children }) => (
	<div
		style={
			{ height: 600,
				margin: 0,
				padding: 0,
				clear: "both",
				paddingTop: 80,
				textAlign: "center",
				backgroundColor: "lightblue"
			}
		}
		className="jumbotron"
	>
		{children}
	</div>
);

export default Jumbotron;
