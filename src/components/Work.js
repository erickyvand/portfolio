import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import ImageOne from '../../assets/bn-login.png';
import ImageTwo from '../../assets/bn-form.png';
import ImageThree from '../../assets/bn-view.png';
import ImageFour from '../../assets/fm-list.png';
import ImageFive from '../../assets/fm-request.png';
import ImageSix from '../../assets/fm-table.png';
import PcHome from '../../assets/pc-home.png';
import PcFeed from '../../assets/pc-feed.png';
import PcProfile from '../../assets/pc-profile.png';
import Calculator from '../../assets/calculator.png';
import Reg from '../../assets/reg.png';

const Work = () => {
	useEffect(() => {
		document.title = 'Portfolio | Work';
	}, []);
	return (
		<div id='work'>
			<Container>
				<Row className='mt-5'>
					<Col>
						<h3>Barefoot Nomad</h3>
						<p>Online platform for booking a trip and accomodation</p>
					</Col>
				</Row>
				<Row>
					<Col md={12} xs={12} sm={12}>
						<Image src={ImageOne} className='work-image' />
						<Image src={ImageTwo} className='work-image' />
						<Image src={ImageThree} className='work-image' />
					</Col>
				</Row>
				<Row>
					<Col className='mt-4'>
						<Nav>
							<Nav.Link
								href='https://spinners-frontend-stage.herokuapp.com/signup'
								className='mx-auto'
							>
								<Button>Click here to visit Barefoot Nomad</Button>
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col>
						<h3>Free Mentors</h3>
						<p>Mentees request online mentorship to mentors</p>
					</Col>
				</Row>
				<Row>
					<Col md={12} xs={12} sm={12}>
						<Image src={ImageFour} className='work-image' />
						<Image src={ImageFive} className='work-image' />
						<Image src={ImageSix} className='work-image' />
					</Col>
				</Row>
				<Row>
					<Col className='mt-4'>
						<Nav>
							<Nav.Link
								href='https://free-mentors-frontend.herokuapp.com/'
								className='mx-auto'
							>
								<Button>Click here to visit Free Mentors</Button>
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col>
						<h3>Promoclub</h3>
						<p>Social media where you can post text, videos and images</p>
					</Col>
				</Row>
				<Row>
					<Col md={12} xs={12} sm={12}>
						<Image src={PcHome} className='work-image' />
						<Image src={PcFeed} className='work-image' />
						<Image src={PcProfile} className='work-image' />
					</Col>
				</Row>
				<Row>
					<Col className='mt-4'>
						<Nav>
							<Nav.Link
								href='https://promoclub-frontend.herokuapp.com/'
								className='mx-auto'
							>
								<Button>Click here to visit Promoclub</Button>
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<Row className='mt-5'>
					<Col md={6} xs={12} sm={12}>
						<h4>Simple Calculator</h4>
						<p>
							<Image src={Calculator} className='work-image' />
						</p>
						<Nav>
							<Nav.Link href='https://erickyvand.github.io/calculator/'>
								<Button>Click here to visit Calculator</Button>
							</Nav.Link>
						</Nav>
					</Col>
					<Col>
						<h4>Simple DOM Registration</h4>
						<p>
							<Image src={Reg} className='work-image' />
						</p>
						<Nav>
							<Nav.Link href='https://erickyvand.github.io/simple-registration/'>
								<Button>Click here to visit DOM Registration</Button>
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<hr className='divider' />
			</Container>
		</div>
	);
};

export default Work;
