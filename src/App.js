import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import BlogPost from './components/blogPost'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom"
import LoginForm from './components/loginForm'


const SingleBlogPost = () => {
  let params = useParams();
  return <BlogPost {...params} />
}



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path='/blog/:blogId'>
          <SingleBlogPost />
        </Route>

        <Route path='/login'>
          <LoginForm />
        </Route>

        <Route path='/login/facebook'>
          
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  )
}


export default App