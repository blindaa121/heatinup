import React, {Component} from 'react';
import ReviewIndexItem from './ReviewIndexItem';

class ReviewForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: null,
        review_text: '',
        user_id: this.props.currentUserId,
        sneaker_id: this.props.sneakerId,
        formType: 'create'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.processUpdate = this.processUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.state.sneaker_id)
  }

  handleSubmit(e) {
    e.preventDefault();
    const reviewObj = {
      review_text: this.state.review_text,
      user_id: this.state.user_id,
      sneaker_id: this.state.sneaker_id,
    }

    const updateObj = {
      review_text: this.state.review_text,
    }

    if (this.state.formType === 'create') {
      this.props.createSneakerReview(reviewObj);
    } else {
      this.props.updateSneakerReview(updateObj, this.state.sneaker_id, this.state.id);
      this.setState({ formType: 'create' })
    }

    this.setState({review_text: ''})
  }

  handleChange(e) {
      e.preventDefault()
      this.setState({ review_text: e.target.value })
  }

  renderReviewCount() {
      if (this.props.reviews.length === 1) {
          return <h1 id="review-title">REVIEW</h1>
      } else {
          return <h1 id="review-title">REVIEWS</h1>
      } 
  }

  renderPlaceHolder() {
      if (this.props.currentUser) {
          return "Write your review"
      } else {
          return "Please sign in or create an acocunt before writing a review"
      }
  }

  renderButtonOptions() {
      if (this.props.currentUser) {
          return <input className="review-submit-button" type="submit" value="POST" />
      } else {
          return <a className="review-signin-button" href="#/login">SIGN IN</a>
      }
  }

  processUpdate(type, selectedReview) {
      this.setState({ 
          id: selectedReview.id,
          review_text: selectedReview.reviewText,
          user_id: selectedReview.userId,
          sneaker_id: selectedReview.sneakerId,
          formType: type
      })
  }

  renderFormType(type) {
    const { formType } = this.state;
    if (this.props.currentUser) {
      if (formType === "create") {
        return (
          <form className="review-form" onSubmit={this.handleSubmit}>
            <textarea
              className="review-form-input"
              type="text"
              onChange={this.handleChange}
              value={this.state.review_text}
              placeholder={this.renderPlaceHolder()}>
            </textarea>
            {this.renderButtonOptions()}
          </form> 
        )
    } else {
        return (
          <form className="review-form" onSubmit={this.handleSubmit}>
            <textarea
              className="review-form-input"
              type="text"
              onChange={this.handleChange}
              value={this.state.review_text}
              >
            </textarea>
            {this.renderButtonOptions()}
          </form> 
        )
      }
    } else {
      return (
        <form className="review-form" onSubmit={this.handleSubmit}>
          <textarea
            className="review-form-input"
            type="text"
            onChange={this.handleChange}
            value={this.state.review_text}
            placeholder={this.renderPlaceHolder()}>
          </textarea>
          <a className="review-signin-button" href="#/login">SIGN IN</a>
        </form> 
      )
    }
  }

  render() {
    const { reviews,
            currentUser,
            deleteSneakerReview,
            updateSneakerReview } = this.props;

    const sortedReviews = reviews.sort((a, b) => { 
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }).reverse();

    return (
      <div className="review-index-container">
        <div className="review-header">
          <h1 id="review-count">{reviews.length}</h1>
          {this.renderReviewCount()}
        </div>
        {this.renderFormType()}
        <div className="review-index-item-container">
          {sortedReviews.map(review => (
            <ReviewIndexItem
              deleteSneakerReview={deleteSneakerReview}
              updateSneakerReview={updateSneakerReview}
              review={review}
              currentUser={currentUser}
              processUpdate={(type, selectedReview) => this.processUpdate(type, selectedReview)}/>
          ))}
        </div>
      </div>
    )
  }
}

export default ReviewForm
