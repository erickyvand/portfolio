import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
	useEffect(() => {
		document.title = 'Portfolio | Contact';
	}, []);
	return (
		<div>
			<Container>
				<Row>
					<Col>Contact</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
