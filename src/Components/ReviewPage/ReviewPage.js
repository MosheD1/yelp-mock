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

    onClickButton = () => {
        this.props.onSubRoueChange('BusinessPage');
    }

    render() {
        return(
            <div >
                <div className='review-page'>
                    <h2 className='tc'>{this.props.businessName}</h2>
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
                        <button onClick={this.onClickButton}>Post Review</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReviewPage;