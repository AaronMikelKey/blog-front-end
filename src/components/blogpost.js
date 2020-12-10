import React from 'react'
import { DateTime } from 'luxon'
import Navbar from './navbar'
import Comment from './comment'
import NewComment from './commentPOST'
import 'regenerator-runtime/runtime'

class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.handleShowComments = this.handleShowComments.bind(this)
    this.handleAddComment = this.handleAddComment.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handlePostComment = this.handlePostComment.bind(this)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      showComments: false,
      token: null,
      text: ''
    }
  }


  handleAddComment() {
    document.getElementById('modal').classList.toggle('is-active')
    document.getElementById('modal').classList.toggle('is-clipped')
  }

  handleCommentChange(e) {
    this.setState({text: e.target.value})
  }

  async handlePostComment(e) {
    e.preventDefault()
    const res = await fetch('https://aaron-key-blog-api.herokuapp.com/api/' + this.props.blogId +'/comment/newComment', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Authorization':'Bearer ' + this.state.token
      },
      body: JSON.stringify(this.state.text)
    })
    console.log(res)
    if (res.ok) {
      console.log('Res.ok, might not have a res.json.')
      const response = await res.json()
      console.log(res)
      return Promise.resolve(response)
    } else {
      console.log('Promis rejected.')
      console.log(res)
      return Promise.reject('Error in promise')
    }
}

  handleShowComments() {
    this.setState({ showComments: true })
  }

  componentDidMount() {
    fetch('https://aaron-key-blog-api.herokuapp.com/api/' + this.props.blogId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result,
            token: document.cookie.access_token
          })
          console.log(JSON.stringify(document.cookie.access_token))
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
    const { error, isLoaded, item, showComments } = this.state
    if (error) {
      return <div>Error: {error.message} Props: {this.props}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      let tags = item.post.tags;
      let comment, commentButton;
      const created = DateTime.fromISO(item.post.createdAt);
      const updated = DateTime.fromISO(item.post.updatedAt);
      if (this.state.showComments === false) {
        commentButton = (
          <footer className="card-footer">
            <a href='#' className="card-footer-item" onClick={this.handleShowComments}>
              <button className='button is-link'>Show Comments</button>
            </a></footer>
        )
        comment = <span></span>
      } else {
        commentButton = (
          <div>
            <hr />
            <strong className='has-text-center'>Comments</strong>
            <br />
            <button className='button is-success mb-1' onClick={this.handleAddComment}>Add Comment</button>
          </div>
        )
        comment = (
          <div>
            <ul>
              {item.comment.map(comment => (
                <Comment key={comment._id} {...comment} />
              ))}
            </ul>
          </div>
        )
      }
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
          <div>
            <NewComment 
              value={this.state.text} 
              onChange={this.handleCommentChange}
              onSubmit={this.handlePostComment}
              onClose={this.handleAddComment}
              />
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
                  <strong>Tags: </strong>
                  <a href='#'>{tags[0]} </a>
                  <a href="#">{tags[1]} </a>
                  <a href="#">{tags[2]}</a>
                  <br />
                  <div className='mt-3'>{time}</div>
                </div>
              </div>
              <div className='has-text-centered'>
                {commentButton}
              </div>
            </div>
            {comment}
          </div>
        </div>
      )
    }
  }
}

export default BlogPost;