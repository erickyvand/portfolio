import React, { useEffect } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import ScrollAnimation from 'react-animate-on-scroll';
import PhpLogo from '../../assets/php.png';
import JavascriptLogo from '../../assets/javascript.png';
import LaravelLogo from '../../assets/laravel.png';
import NodeLogo from '../../assets/nodejs.png';
import ReactLogo from '../../assets/react.png';
import ReduxLogo from '../../assets/redux.png';
import WebpackLogo from '../../assets/webpack.png';
import GitHub from '../../assets/github.png';
import PivotalTracker from '../../assets/pivotal-tracker.png';
import TravisLogo from '../../assets/travis.png';
import CircleLogo from '../../assets/circle.png';
import '../styles/styles.css';

const About = () => {
	useEffect(() => {
		document.title = 'Portfolio | About';
	}, []);
	return (
		<div>
			<Container>
				<Row>
					<Col md={12} xs={12} sm={12} lg={7} xl={7}>
						<FadeIn delay={2000} transitionDuration={5000}>
							<p>
								Through out my software development carrer I worked and I am
								able to work on these technologies and skills:
							</p>
							<h2 className='mt-4'>Programming Languages and Frameworks</h2>
							<Nav>
								<Nav.Item>
									<Card className='card'>
										<Card.Img variant='top' src={PhpLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>PHP</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img src={JavascriptLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>Javascript</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img src={LaravelLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>Laravel</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img src={NodeLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>NodeJS</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img src={ReactLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>ReactJS</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img src={ReduxLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>Redux</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img src={WebpackLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>Webpack</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
							</Nav>
							<h2 className='mt-4'>Project Management tools</h2>
							<Nav>
								<Nav.Item>
									<Card className='card'>
										<Card.Img variant='top' src={GitHub} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>GitHub</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img
											variant='top'
											src={PivotalTracker}
											className='logo'
										/>
										<Card.Body>
											<Card.Title className='card-title'>Pivotal</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
							</Nav>
						</FadeIn>
						<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={2000}>
							<h2 className='mt-4'>Continuous Integration</h2>
							<Nav>
								<Nav.Item>
									<Card className='card'>
										<Card.Img variant='top' src={TravisLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>TravisCI</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
								<Nav.Item>
									<Card className='card'>
										<Card.Img variant='top' src={CircleLogo} className='logo' />
										<Card.Body>
											<Card.Title className='card-title'>CircleCI</Card.Title>
										</Card.Body>
									</Card>
								</Nav.Item>
							</Nav>
						</ScrollAnimation>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
