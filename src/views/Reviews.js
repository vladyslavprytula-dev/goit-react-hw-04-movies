import React, { Component } from 'react';
import Review from '../Components/Review/Review';
import NoReview from '../Components/NoReview/NoReview';
import { fetchReviews } from '../services/fetchFilms';
import '../styles/review.scss';
export default class Cast extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchReviews(this.props.match.params.movieId).then(results => {
      this.setState({ reviews: results });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul className="Review">
            {reviews.map(review => (
              <li key={review.id} className="Review__item">
                <Review {...review} />
              </li>
            ))}
          </ul>
        ) : (
          <NoReview />
        )}
      </>
    );
  }
}
