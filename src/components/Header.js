import React from "react";

function Header(){
	const headerComponentStyles = {
		backgroundColor: '#8129d7',
		color: '#fdfcfe',
		fontFamily: 'verdana',

	}
	return (
		<React.Fragment>
		<div style= {headerComponentStyles}>
			<h1>Latte Larry's Coffee Collection</h1>
		</div>
		</React.Fragment>
	)
	}

	export default Header;