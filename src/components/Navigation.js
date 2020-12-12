import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
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
								<Link
									activeClass='active'
									className='text-white'
									to='home'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									delay={1000}
								>
									Home
								</Link>
							</Navbar.Brand>
							<Navbar.Brand>
								<Link
									activeClass='active'
									className='text-white'
									to='about'
									spy={true}
									smooth={true}
									offset={-70}
									duration={1000}
									delay={1000}
								>
									About
								</Link>
							</Navbar.Brand>
							<Navbar.Brand>
								<Link
									activeClass='active'
									className='text-white'
									to='work'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									delay={1000}
								>
									Work
								</Link>
							</Navbar.Brand>
							<Navbar.Brand>
								<Link
									activeClass='active'
									className='text-white'
									to='contact'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									delay={1000}
								>
									Contact
								</Link>
							</Navbar.Brand>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;
