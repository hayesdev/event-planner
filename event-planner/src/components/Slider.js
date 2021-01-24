import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import reviews from "../reviews.js";

const Slider = () => {
  const [review, setReview] = useState(reviews);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, review]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="slider-section">
      <div className="section-center">
        {review.map((review, reviewIndex) => {
          const { id, image, name, title, quote } = review;

          let position = "nextSlide";
          if (reviewIndex === index) {
            position = "activeSlide";
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === reviews.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={"#"} alt="review image" />
              <h4>{name}</h4>
              <p>{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
