// Code MovieReviews Here

import React from 'react'

const Review = ({
    headline,
    byline,
    link,
    summary_short
  }) => {
    return (
  
      <div
        key={headline}
        className="review"
      >
        <header>
          <a
            className="review-link"
            href={link.url}
          >
            {headline}
          </a>
          <br/>
          <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
      </div>
    );
  };

// const MovieReviews = (props) => {
    
//     const renderReviews = () => {
        
//         return props.reviews.map((review, index)=> {
//             console.log(review)
//             return <li  className ="review" key= {index}>
//             Title:{review.display_title} 
//             <br></br>
//             Summary:{review.summary_short}</li>
//         })
//     }
    
//     return(
//         <div className = "review-list" >
//             <ul>
//                 {renderReviews()}
//             </ul>
//         </div>
//     )

// }

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps= {
    reviews: []
}

export default MovieReviews
