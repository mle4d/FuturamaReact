import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuotesFuturama from '../components/quotes/QuotesFuturama';
import { getQuotes } from '../services/FuturamaAPI';
import futuramaerror from '../assets/futuramaerror.gif';
import futuramaloading from '../assets/futuramaloading.gif';

export default class Quotes extends Component {
  static propTypes ={
    count: PropTypes.number.isRequired
  }
  state ={
    quotes: [],
    loading: true, 
    error: null
  }
  fetchQuotes = () => {
    return getQuotes(this.props.count)
      .then(quotes => {
        this.setState({ quotes, loading: false, error: null });
      })
      .catch(err => this.setState({ error: err, loading: false }));
  }
  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count !== this.props.count) {
      this.setState({ loading: true });
      this.fetchQuotes();
    }
  }
  render() {
    if(this.state.error) return <img src={futuramaerror} />;
    if(this.state.loading) return <img src={futuramaloading} />;
    return <QuotesFuturama quotes={this.state.quotes} />;
  }
}
 
