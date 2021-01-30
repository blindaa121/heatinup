import React from 'react'

const ReviewIndexItem = ({review, currentUser, deleteSneakerReview}) => {
    const renderDeleteUpdate = () => {
        console.log(currentUser)
        console.log(review)
        if (currentUser && (currentUser.id === review.userId)) {
            return (
                <div className="review-edit-container">
                    <button onClick={() => deleteSneakerReview(review.sneakerId, review.id)}>Delete</button>
                    {/* <button onClick={() => deleteSneakerReview(review.sneakerId, review.id)}>Delete</button> */}
                </div>
            )
        }
    }
    return (
        <div className="review-item-container">
            <span data-letters={review.username[0]} className="review-user-avatar"></span>
            <div className="review-content">
                <h1>{review.username}</h1>
                <p>{review.reviewText}</p>
            </div>
            {renderDeleteUpdate()}
        </div>
    )
}

export default ReviewIndexItem
