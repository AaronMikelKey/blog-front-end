import React, { useState } from 'react';
import Navbar from './components/navbar';
import HomeBlogPosts from './components/HOMEblogposts';


const Home = (props) => {
	const [posts, setPosts] = useState({
		error: null,
		isLoaded: false,
		items: []
	})

	fetch('https://aaron-key-blog-api.herokuapp.com/api')
		.then(res => res.json())
		.then(
			res => setPosts({error: null, isLoaded: true, items: res}),
			err => setPosts({error: err, isLoaded: true, items: []})
			)

	return (
		posts.error ? <div>Error: {posts.error.message} </div> :
		!posts.isLoaded ? <div>Loading...</div> :
		<div>
			<ul>
				{posts.items.map(item => (<HomeBlogPosts key={item.id} {...item} />))}
			</ul>
		</div>
	)
}

export default Home;