export const getQuotes = (count = 5) => {
  return fetch(`futuramaapi.herokuapp.com/api/quotes/count=${count}`)
    .then(res => {
      if(!res.ok) throw 'I Apologize for nothing!';

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
