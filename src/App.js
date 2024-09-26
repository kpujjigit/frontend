import logo from './logo.svg';
import './App.css';
import React from 'react';
import { fetchRoot, fetchError, fetchPerformance, fetchFeedback, fetchCustomTags, fetchContext } from './apiService';
import * as Sentry from '@sentry/react';

function App() {
  const handleFetchRoot = async () => {
    try {
      const response = await fetchRoot();
      console.log(response.data);
    } catch (error) {
      Sentry.captureException(error);
      console.error('There was an error fetching the root data!', error);
    }
  };

  const handleFetchError = async () => {
    try {
      const response = await fetchError();
      console.log(response.data);
    } catch (error) {
      Sentry.captureException(error);
      console.error('There was an error fetching the error data!', error);
    }
  };

  const handleFetchPerformance = async () => {
    try {
      const response = await fetchPerformance();
      console.log(response.data);
    } catch (error) {
      Sentry.captureException(error);
      console.error('There was an error fetching the performance data!', error);
    }
  };

  const handleFetchFeedback = async () => {
    try {
      const response = await fetchFeedback();
      console.log(response.data);
    } catch (error) {
      Sentry.captureException(error);
      console.error('There was an error fetching the feedback data!', error);
    }
  };

  const handleFetchCustomTags = async () => {
    try {
      const response = await fetchCustomTags();
      console.log(response.data);
    } catch (error) {
      Sentry.captureException(error);
      console.error('There was an error fetching the custom tags data!', error);
    }
  };

  const handleFetchContext = async () => {
    try {
      const response = await fetchContext();
      console.log(response.data);
    } catch (error) {
      Sentry.captureException(error);
      console.error('There was an error fetching the context data!', error);
    }
  };

  return (
    <div className="App">
      <h1>React and Go Integration</h1>
      <button onClick={handleFetchRoot}>Fetch Root</button>
      <button onClick={handleFetchError}>Fetch Error</button>
      <button onClick={handleFetchPerformance}>Fetch Performance</button>
      <button onClick={handleFetchFeedback}>Fetch Feedback</button>
      <button onClick={handleFetchCustomTags}>Fetch Custom Tags</button>
      <button onClick={handleFetchContext}>Fetch Context</button>
    </div>
  );
}

export default App;
