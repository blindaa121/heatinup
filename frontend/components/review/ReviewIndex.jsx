import './ReviewIndex.css'
import React, {Component} from 'react';
import ReviewIndexItem from './ReviewIndexItem';
import { render } from 'react-dom';

class ReviewIndex extends Component {
    constructor(props) {
        super(props)
        // this.renderReviews = this.renderReviews.bind(this)
        const currentUserId = this.props.currentUser ? this.props.currentUser.id : null
        const sneakerId = this.props.sneaker ? this.props.sneaker.id : null

        this.state = {
            review_text: '',
            user_id: currentUserId,
            sneaker_id: sneakerId,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props, 'review index')
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        const reviewObj = Object.assign({}, this.state)
        console.log(reviewObj)
        this.props.createSneakerReview(reviewObj);
        this.setState({review_text: ''})
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({ review_text: e.target.value })
        console.log(this.state.review)
    }

    renderReviewCount() {
        if (this.props.reviews.length === 1) {
            return <h1 id="review-title">REVIEW</h1>
        } else {
            return <h1 id="review-title">REVIEWS</h1>
        } 
    }

    renderButtonOption() {
        if (this.props.currentUser) {
            return "POST"
        } else {
            return "SIGN IN"
        }
    }

    renderPlaceHolder() {
        if (this.props.currentUser) {
            return "Write your review"
        } else {
            return "Please sign in or create an acocunt before writing a review"
        }
    }
  
    render() {
        const { reviews, currentUser, deleteSneakerReview } = this.props;

        return (
            <div className="review-index-container">
                <div className="review-header">
                    <h1 id="review-count">{reviews.length}</h1>
                    {this.renderReviewCount()}
                </div>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <textarea
                        className="review-form-input"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.review_text}
                        placeholder={this.renderPlaceHolder()}>
                    </textarea>
                    {currentUser ? (
                        <input
                            className="review-submit-button"
                            type="submit"
                            value="POST"/>
                        ) : (
                            <a className="review-signin-button"
                                href="#/login">SIGN IN</a>
                        )}
                    
                </form>
                <div className="review-index-item-container">
                    {this.props.reviews.map(review => (
                        <ReviewIndexItem
                            deleteSneakerReview={deleteSneakerReview}
                            review={review}
                            currentUser={currentUser}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default ReviewIndex
