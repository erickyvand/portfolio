import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Work = () => {
	useEffect(() => {
		document.title = 'Portfolio | Work';
	}, []);
	return (
		<div>
			<Container>
				<Row>
					<Col>Work Page</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Work;
