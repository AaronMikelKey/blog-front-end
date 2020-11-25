import React from 'react'
import { DateTime } from 'luxon'

const Comment = (props) => {
  let time = DateTime.fromISO(props.createdAt)
  return (
    <div className='card mx-6 mt-3 commentBox'>
      <div className='cardContent px-6'>
        <div className='media-content'>
          <p className='title is-6 px-2 py-2 commentTitle'>
            {props.user.username} on <time dateTime={props.createdAt}>{time.toLocaleString(DateTime.DATETIME_SHORT)}</time>
          </p>
          
        </div>
        <div className='cardContent is-small py-3'>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default Comment