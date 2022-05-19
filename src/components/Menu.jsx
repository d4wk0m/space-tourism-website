import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Menu() {
	function menuToggle(e){
		if (e.target === document.getElementById('navigation')){
			document.getElementById('hamburger').classList.toggle('is-active')
			var navbar = document.getElementById('navigation')
			navbar.classList.toggle('active')
		}
		else if (e.target === document.getElementById('hamburger')){
			document.getElementById('hamburger').classList.toggle('is-active')
			navbar = document.getElementById('navigation')
			navbar.classList.toggle('active')
		}
	}

	function hideMenu(){
		window.setTimeout(() => {
			document.getElementById('hamburger').classList.toggle('is-active')
			var navbar = document.getElementById('navigation')
			navbar.classList.toggle('active')
		}, 300)
	}

	return (
		<header>
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<span className="line"></span>
			<div className="navigation" id='navigation' onMouseDown={(e) => {menuToggle(e)}}>
				<nav>
					<Link to={'/'} onClick={hideMenu}>00 Home</Link>
					<Link to={'/destination'} onClick={hideMenu}>01 Destination</Link>
					<Link to={'/crew'} onClick={hideMenu}>02 Crew</Link>
					<Link to={'/technology'} onClick={hideMenu}>03 Technology</Link>
				</nav>
			</div>
			<div className="menu-icon" id='hamburger' onMouseDown={(e) => {menuToggle(e)}}>
				<div className="hamburger">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
				</div>
			</div>
		</header>
	)
}

export default Menu