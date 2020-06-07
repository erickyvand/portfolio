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
import SequelizeLogo from '../../assets/sequelize.png';
import PostgresLogo from '../../assets/postgres.png';
import MysqlLogo from '../../assets/mysql.png';
import '../styles/styles.css';

const About = () => {
	useEffect(() => {
		document.title = 'Portfolio | About';
	}, []);

	const frameworkLogos = [
		{ name: PhpLogo, title: 'PHP' },
		{ name: JavascriptLogo, title: 'Javascript' },
		{ name: LaravelLogo, title: 'Laravel' },
		{ name: NodeLogo, title: 'NodeJS' },
		{ name: ReactLogo, title: 'ReactJS' },
		{ name: ReduxLogo, title: 'Redux' },
		{ name: WebpackLogo, title: 'Webpack' },
		{ name: SequelizeLogo, title: 'Sequeliz' },
		{ name: PostgresLogo, title: 'Postgres' },
		{ name: MysqlLogo, title: 'MySQL' },
	];

	const projectLogos = [
		{ name: GitHub, title: 'GitHub' },
		{ name: PivotalTracker, title: 'Pivotal' },
	];

	const integrationLogos = [
		{ name: TravisLogo, title: 'TravisCI' },
		{ name: CircleLogo, title: 'CircleCI' },
	];
	return (
		<div>
			<Container>
				<Row>
					<Col md={12} xs={12} sm={12} lg={7} xl={7}>
						<FadeIn delay={2000} transitionDuration={5000}>
							<h1>Skills and Endorsements</h1>
							<Nav>
								{frameworkLogos.map((logo, index) => (
									<Nav.Item key={index}>
										<Card className='card'>
											<Card.Img
												variant='top'
												src={logo.name}
												className='logo'
											/>
											<Card.Body>
												<Card.Title className='card-title'>
													{logo.title}
												</Card.Title>
											</Card.Body>
										</Card>
									</Nav.Item>
								))}
							</Nav>
							<h2 className='mt-4'>Project Management tools</h2>
							<Nav>
								{projectLogos.map((logo, index) => (
									<Nav.Item key={index}>
										<Card className='card'>
											<Card.Img
												variant='top'
												src={logo.name}
												className='logo'
											/>
											<Card.Body>
												<Card.Title className='card-title'>
													{logo.title}
												</Card.Title>
											</Card.Body>
										</Card>
									</Nav.Item>
								))}
							</Nav>
						</FadeIn>
						<ScrollAnimation
							animateIn='fadeIn'
								animateOut='fadeOut'
								delay={1000}
						>
							<h2 className='mt-4'>Continuous Integration</h2>
							<Nav>
								{integrationLogos.map((logo, index) => (
									<Nav.Item key={index}>
										<Card className='card'>
											<Card.Img
												variant='top'
												src={logo.name}
												className='logo'
											/>
											<Card.Body>
												<Card.Title className='card-title'>
													{logo.title}
												</Card.Title>
											</Card.Body>
										</Card>
									</Nav.Item>
								))}
							</Nav>
						</ScrollAnimation>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
