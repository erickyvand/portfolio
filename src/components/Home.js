import React, { useEffect } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import '../styles/styles.css';
import { firstElement, secondeElement, thirdElement } from '../data';
import Photo from '../../assets/vand.jpg';

const Home = () => {
	useEffect(() => {
		document.title = 'Portfolio | Home';
	}, []);
	return (
		<div id='home'>
			<Container>
				<Row>
					<Col md={7} xs={12} sm={12} lg={7} xl={7}>
						<div>{firstElement}</div>
						<div className='mt-4'>{secondeElement}</div>
						<div className='mt-4'>{thirdElement}</div>
					</Col>
					<Col md={5} xs={12} sm={12} lg={5} xl={5}>
						<h2 className='text-center'>Software Developer</h2>
						<Image src={Photo} className='profile-image' alt='' roundedCircle />
					</Col>
				</Row>
				<hr className='divider' />
			</Container>
		</div>
	);
};

export default Home;
