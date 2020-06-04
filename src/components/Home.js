import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import '../styles/styles.css';
import Image from '../../assets/vand.jpg';
import Pic from '../../assets/ericky.jpeg'

const Home = () => {
	const [state, setState] = useState(Image);
	const handleClick = () => {
		setState(Pic);
	};
	return (
		<div>
			<Container>
				<Row>
					<Col md={7} xs={12} sm={12} lg={7} xl={7}>
						<Button onClick={handleClick}>Click</Button>
					</Col>
					<Col md={5} xs={12} sm={12} lg={5} xl={5}>
						<img src={state} className='rounded-circle profile-image' alt='' />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
