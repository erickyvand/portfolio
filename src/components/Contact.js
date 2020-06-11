import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import { contact } from '../data';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Facebook from '../../assets/facebook.png';
import '../styles/styles.css';

const Contact = () => {
	useEffect(() => {
		document.title = 'Portfolio | Contact';
	}, []);
	return (
		<div>
			<Container>
				<Row>
					<Col md={6}></Col>
					<Col md={6}>
						<div>{contact}</div>
						<div>I am also available on social networks</div>
						<div>
							<Nav>
								<Nav.Link href='https://twitter.com/ErickyVand'>
									<Image src={Twitter} className='rounded social-logo' />
								</Nav.Link>
								<Nav.Link href='https://web.facebook.com/ericky.vand'>
									<Image src={Facebook} className='rounded social-logo' />
								</Nav.Link>
								<Nav.Link href='https://www.linkedin.com/in/iragena-eric-91270174/'>
									<Image src={Linkedin} className='rounded social-logo' />
								</Nav.Link>
							</Nav>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
