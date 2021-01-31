import React from 'react';
import dateFormat from 'dateformat';

const ReviewIndexItem = ({review, currentUser, deleteSneakerReview, processUpdate}) => {
  const renderAuthButtons = (review) => {
    if (currentUser && (currentUser.id === review.userId)) {
      return (
        <div className="review-edit-container">
          <i class="far fa-trash-alt" id="delete" onClick={() => deleteSneakerReview(review.sneakerId, review.id)}></i>
          <i class="far fa-edit" id="edit" onClick={() => processUpdate('update', review)}>
          </i>
        </div>
      )
    }
  }

  const formatDate = (date) => {
    return dateFormat(date, "dddd, mmmm dS yyyy, h:MM:ss TT")
  }

  return (
    <div className="review-item-container">
      <span data-letters={review.username[0]} className="review-user-avatar"></span>
      <div className="review-content">
        <h1>{review.username}</h1>
        <p id="date">{formatDate(review.date)}</p>
        <p>{review.reviewText}</p>
        {renderAuthButtons(review)}
      </div>
    </div>
  )
}

export default ReviewIndexItem
