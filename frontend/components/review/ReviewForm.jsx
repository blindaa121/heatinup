import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './ReviewIndexItem';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            review_text: '',
            user_id: this.props.currentUserId,
            sneaker_id: this.props.sneakerId,
            formType: 'create',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.processUpdate = this.processUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews(this.state.sneaker_id);
    }

    handleChange(e) {
        this.setState({ review_text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { formType, review_text, user_id, sneaker_id, id } = this.state;

        if (formType === 'create') {
            this.props.createSneakerReview({ review_text, user_id, sneaker_id });
        } else {
            this.props.updateSneakerReview({ review_text }, sneaker_id, id);
            this.setState({ formType: 'create' });
        }
        this.setState({ review_text: '' });
    }

    processUpdate(type, selectedReview) {
        this.setState({
            id: selectedReview.id,
            review_text: selectedReview.reviewText,
            user_id: selectedReview.userId,
            sneaker_id: selectedReview.sneakerId,
            formType: type,
        });
    }

    renderForm() {
        const { currentUser } = this.props;
        const { review_text, formType } = this.state;
        const isEdit = formType === 'update';
        const canSubmit = currentUser && review_text.length > 5;
        const placeholder = currentUser
            ? 'Share your thoughts on this sneaker'
            : 'Sign in to leave a review';

        return (
            <form className="reviews__form" onSubmit={this.handleSubmit}>
                <textarea
                    className="reviews__input"
                    onChange={this.handleChange}
                    value={review_text}
                    placeholder={placeholder}
                    disabled={!currentUser}
                    rows={4}
                />
                {currentUser ? (
                    <button
                        type="submit"
                        className="reviews__submit"
                        disabled={!canSubmit}
                    >
                        {isEdit ? 'Save changes' : 'Post review'}
                    </button>
                ) : (
                    <Link to="/login" className="reviews__submit reviews__submit--link">
                        Sign in
                    </Link>
                )}
            </form>
        );
    }

    render() {
        const { reviews, currentUser, deleteSneakerReview, updateSneakerReview } = this.props;

        const sortedReviews = reviews
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return (
            <div className="reviews">
                <header className="reviews__head">
                    <span className="reviews__count">{reviews.length}</span>
                    <h2 className="reviews__title">
                        {reviews.length === 1 ? 'Review' : 'Reviews'}
                    </h2>
                </header>

                {this.renderForm()}

                {sortedReviews.length > 0 && (
                    <div className="reviews__list">
                        {sortedReviews.map((review) => (
                            <ReviewIndexItem
                                key={review.id}
                                review={review}
                                currentUser={currentUser}
                                deleteSneakerReview={deleteSneakerReview}
                                updateSneakerReview={updateSneakerReview}
                                processUpdate={this.processUpdate}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default ReviewForm;
