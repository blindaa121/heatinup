import React, {Component} from 'react'

class ReviewIndex extends Component {
    constructor(props) {
        super(props)
        // this.renderReviews = this.renderReviews.bind(this)
        this.state = {
            review_text: '',
            user_id: this.props.currentUser.id,
            sneaker_id: this.props.sneaker.id,
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
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({ review_text: e.target.value })
        console.log(this.state.review)
    }
  
    render() {
        return (
            <div className="review-index-container">
                <h1 className="review-header">REVIEWS</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        name=""
                        onChange={this.handleChange}
                        value={this.state.review}
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Write your review">
                    </textarea>
                    <input type="submit" value="submit"/>
                </form>
                {this.props.reviews.map(review => (
                    <li>{review.reviewText}</li>
                ))}
            </div>
        )
    }
}

export default ReviewIndex
