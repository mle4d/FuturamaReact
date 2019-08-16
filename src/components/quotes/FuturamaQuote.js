import React from 'react';
import PropTypes from 'prop-types';

function FuturamaQuote({ image, quote, name }) {
  return (
    <section>
      <img src={image} />
      <p>{quote}</p>
      <p>{name}</p>
    </section>
  );
}
FuturamaQuote.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default FuturamaQuote;
