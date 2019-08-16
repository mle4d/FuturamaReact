export const getQuotes = (count = 5) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => {
      if(!res.ok) throw 'fuck it';

      return res.json();
    })
    .then(quotes => {
      return quotes.map(quote => ({
        quote: quote.quote,
        image: quote.image,
        name: quote.character
      }));
    });
};
