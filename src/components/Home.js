import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import '../styles/styles.css';
import { firstElement, secondeElement, thirdElement } from '../data';
import Photo from '../../assets/vand.jpg';
import Pic from '../../assets/ericky.jpeg';

const Home = () => {
	useEffect(() => {
		document.title = 'Portfolio | Home';
	}, []);
	return (
		<div>
			<Container>
				<Row>
					<Col md={7} xs={12} sm={12} lg={7} xl={7}>
						<FadeIn delay={2000} transitionDuration={5000}>
							<div>{firstElement}</div>
							<div className='mt-4'>{secondeElement}</div>
							<div className='mt-4'>{thirdElement}</div>
						</FadeIn>
					</Col>
					<Col md={5} xs={12} sm={12} lg={5} xl={5}>
						<h2 className='text-center'>Software Developer</h2>
						<Image src={Photo} className='profile-image' alt='' roundedCircle />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
