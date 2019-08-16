import React from 'react';
import PropTypes from 'prop-types';
import FuturamaQuote from './FuturamaQuote';

function QuotesFuturama({ quotes }) {
  const quoteElements = quotes.map(({ image, quote, name }) => (
    <li key={quote}>
      <FuturamaQuote
        image={image}
        quote={quote}
        name={name} />
    </li>
  ));
  return (
    <ul>
      {quoteElements}
    </ul>
  );
}
QuotesFuturama.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};
export default QuotesFuturama;
