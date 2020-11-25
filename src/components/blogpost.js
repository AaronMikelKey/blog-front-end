import React from 'react';
import { DateTime } from 'luxon';
import Navbar from './navbar';

class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }



  componentDidMount() {
    fetch('https://aaron-key-blog-api.herokuapp.com/api/'+this.props.blogId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }



  render() {
    const { error, isLoaded, item } = this.state
    if (error) {
      return <div>Error: {error.message} Props: {this.props}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      let tags = item.post.tags;
      const created = DateTime.fromISO(item.post.createdAt);
      const updated = DateTime.fromISO(item.post.updatedAt);
      let time;
      if (created.toLocaleString() !== updated.toLocaleString()) {
        time = (
          <div>
            <span>Updated: <time dateTime={updated}>{updated.toLocaleString(DateTime.DATETIME_SHORT)}</time></span>
            <br />
            <span>Originally Posted: <time dateTime={created}>{created.toLocaleString(DateTime.DATE_SHORT)}</time></span>
          </div>
        )
      } else {
        time = (<time dateTime={created}>{created.toLocaleString(DateTime.DATETIME_SHORT)}</time>)
      }
      return (
        <div>
          <Navbar />
          <div className="card mx-6 my-3">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{item.post.title}</p>
                </div>
              </div>
              <div className="content">
                {item.post.blogContent}
              </div>
              <br />
              <div className='content'>
                <span>Tags: </span>
                <a href='#'>{tags[0]} </a>
                <a href="#">{tags[1]} </a>
                <a href="#">{tags[2]}</a>
                <br />
                <div className='mt-3'>{time}</div>
              </div>
            </div>
            <footer className="card-footer">
              <a href='#' className="card-footer-item">Show Comments</a>
            </footer>
          </div>
        </div>
      )
    }
  }
}

export default BlogPost;