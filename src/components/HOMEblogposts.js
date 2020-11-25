import React from 'react';
import {DateTime} from 'luxon';

const HomeBlogPosts = (props) => {
  const tags = props.tags[0].split(', ');
  const created = DateTime.fromISO(props.createdAt);
  const updated = DateTime.fromISO(props.updatedAt);
  let time;
  if (created.toLocaleString() !== updated.toLocaleString()) {
    time =  (
      <div>
        <span>Posted on: <time dateTime={created}>{ created.toLocaleString(DateTime.DATETIME_SHORT) }</time></span>
        <br />
        <span>Updated on: <time dateTime={updated}>{ updated.toLocaleString(DateTime.DATETIME_SHORT) }</time></span>
      </div>
    )
  } else {
    time = (<time dateTime={created}>{ created.toLocaleString(DateTime.DATETIME_SHORT) }</time>)
  }
  const blogHref = '/blog/' + props._id

  return (
    <div className="card mx-6 my-3">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
          </div>
        </div>
        <div className="content">
          {props.blogContent}
          <br />
          <span>Tags: </span>
          <a href='#'>{tags[0]} </a>
          <a href="#">{tags[1]} </a>
          <a href="#">{tags[2]}</a>
          <br />
          <div>{time}</div>
        </div>
      </div>
      <footer className="card-footer">
        <a href={blogHref} className="card-footer-item">Read More</a>
      </footer>
    </div>
  )
}

export default HomeBlogPosts;