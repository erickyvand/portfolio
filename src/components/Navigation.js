import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-dark mb-4'>
				<div className='container'>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item'>
								<Link className='nav-link text-white' to='/'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link text-white' to='/about'>
									About
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link text-white' to='/work'>
									Work
								</Link>
							</li>
						</ul>
            <ul className='navbar-nav ml-auto'>

						<li className='nav-item'>
							<Link className='nav-link text-white' to='/contact'>
								Contact
							</Link>
						</li>
            </ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
