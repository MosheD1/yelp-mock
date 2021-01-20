import React from 'react';
import './ReviewPage.css';

class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            review: ''
        }
    }

    onRateClick = (e) => {
        this.setState({rating: e.target.value});
    }

    onReviewChange = (e) => {
        this.setState({review: e.target.value});
    }

    onSubmitReview = (e) => {
        e.preventDefault();
        const { id } = this.props.business;
        fetch(`http://localhost:3001/review/${id}`, {
            method: 'post',
            headers: { 'content-type':'application/json'},
            body: JSON.stringify({
                content: this.state.review,
                rating: this.state.rating,
                name: this.props.user.name
            })
        })
        .then(response => response.json())
        .then(reviews => {
            this.props.loadReviews(reviews);
            this.props.onSubRoueChange('BusinessPage');
        });
    }

    render() {
        return(
            <div >
                <div className='review-page'>
                    <h2 className='tc'>{this.props.business.name}</h2>
                    <form>
                        <fieldset className='widget'>
                            <div className='rating'>
                                <span>
                                    <input onClick={this.onRateClick} type="radio" className="fa fa-star" name="rating" value="5" />
                                    <input onClick={this.onRateClick} type="radio" className="fa fa-star" name="rating" value="4" />
                                    <input onClick={this.onRateClick} type="radio" className="fa fa-star" name="rating" value="3" />
                                    <input onClick={this.onRateClick} type="radio" className="fa fa-star" name="rating" value="2" />
                                    <input onClick={this.onRateClick} type="radio" className="fa fa-star" name="rating" value="1" />
                                </span>
                            </div>
                            <textarea onChange={this.onReviewChange} placeholder='It’s amazing that they’ve added delivery due to COVID'></textarea>
                        </fieldset>
                        <button onClick={this.onSubmitReview}>Post Review</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReviewPage;