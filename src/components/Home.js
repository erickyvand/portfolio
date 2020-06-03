import React from 'react';
import Image from '../../assets/ericky.jpeg';

const Home = () => {
	return (
		<div className='row'>
			<div className='col-md-6'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
					consequatur aliquam labore fuga rem laborum dolorem, id ratione in
					quibusdam voluptatem soluta quasi officiis excepturi laboriosam
					sapiente quo deleniti iste perspiciatis delectus. Sapiente pariatur,
					inventore obcaecati earum perferendis sint consequatur ullam rem
					soluta molestias dignissimos ut delectus nulla adipisci ratione error
					odit harum ipsam voluptates fugiat, eos enim distinctio facere. Alias
					suscipit ex amet magni, eos accusantium quam facilis pariatur nihil
					totam cum doloribus dolores possimus officia aspernatur iure
					laudantium laboriosam saepe eius veritatis ipsa! Aspernatur, culpa.
					Voluptates facere inventore, ut, non consectetur in quaerat unde, qui
					esse voluptate reprehenderit?
				</p>
			</div>
			<div className='col-md-6'>
				<img src={Image} className='rounded-circle' alt='' height='500' width='500' />
			</div>
		</div>
	);
};

export default Home;
