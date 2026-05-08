import React from 'react';
import dateFormat from 'dateformat';

const formatDate = (date) => dateFormat(date, 'mmm d, yyyy · h:MM TT');

const ReviewIndexItem = ({ review, currentUser, deleteSneakerReview, processUpdate }) => {
    const isOwner = currentUser && currentUser.id === review.userId;
    const initial = (review.username || '?')[0];

    return (
        <article className="review-card">
            <div className="review-card__avatar" aria-hidden="true">{initial}</div>
            <div className="review-card__body">
                <header className="review-card__head">
                    <h3 className="review-card__user">{review.username}</h3>
                    <time className="review-card__date">{formatDate(review.date)}</time>
                </header>
                <p className="review-card__text">{review.reviewText}</p>

                {isOwner && (
                    <div className="review-card__actions">
                        <button
                            type="button"
                            className="review-card__action"
                            onClick={() => processUpdate('update', review)}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="review-card__action review-card__action--danger"
                            onClick={() => deleteSneakerReview(review.sneakerId, review.id)}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </article>
    );
};

export default ReviewIndexItem;
