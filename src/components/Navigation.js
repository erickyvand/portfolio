import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/styles.css';

const Navigation = () => {
	return (
		<div>
			<Navbar bg='dark' expand='lg' fixed='top'>
				<Container>
					<Navbar.Toggle
						aria-controls='basic-navbar-nav'
						className='text-white'
					/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav>
							<Navbar.Brand>
								<NavLink
									exact
									to='/'
									activeClassName='active'
									className='text-white'
								>
									Home
								</NavLink>
							</Navbar.Brand>
							<Navbar.Brand>
								<NavLink
									to='/about'
									activeClassName='active'
									className='text-white'
								>
									About
								</NavLink>
							</Navbar.Brand>
							<Navbar.Brand>
								<NavLink
									to='/work'
									activeClassName='active'
									className='text-white'
								>
									Work
								</NavLink>
							</Navbar.Brand>
						</Nav>
						<Navbar.Brand className='ml-auto'>
							<NavLink
								to='/contact'
								activeClassName='active'
								className='text-white'
							>
								Contact
							</NavLink>
						</Navbar.Brand>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;
