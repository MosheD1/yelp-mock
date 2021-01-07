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

    onClickButon = () => {
        this.props.onSubRoueChange('Bussiness');
    }

    render() {
        return(
            <div >
                <div className='review-page'>
                    <h2 className='tc'>{this.props.bussinessName}</h2>
                    <form>
                        <fieldset className='widget'>
                            <div className='rating'>
                                <span>
                                    <input type="radio" className="fa fa-star" name="rating" value="5" />
                                    <input type="radio" className="fa fa-star" name="rating" value="4" />
                                    <input type="radio" className="fa fa-star" name="rating" value="3" />
                                    <input type="radio" className="fa fa-star" name="rating" value="2" />
                                    <input type="radio" className="fa fa-star" name="rating" value="1" />
                                </span>
                            </div>
                            <textarea placeholder='It’s amazing that they’ve added delivery due to COVID'></textarea>
                        </fieldset>
                        <button>Post Review</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReviewPage;