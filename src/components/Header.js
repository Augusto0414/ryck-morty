import React from 'react'
import '../style/Header.css';

const Header = ({ props }) => {

	return (
		<header>
			<div className="header__content">
				<nav className="navbar">
					<a href="/"> {props}</a>
				</nav>
			</div>
		</header>
	)
}

export default Header