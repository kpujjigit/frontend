// src/apiService.js
import axios from 'axios';
import * as Sentry from '@sentry/react';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});


// Sept 26 2024 - This is the blocker for getting Dist. Tracing up and running. TBC.
api.interceptors.request.use((config) => {
  const currentScope = Sentry.getCurrentScope();
  const transaction = currentScope.getClient();
  if (transaction) {
    const sentryTraceHeader = transaction.toTraceparent();
    const baggageHeader = transaction.toBaggageHeader();
    config.headers['sentry-trace'] = sentryTraceHeader;
    config.headers['baggage'] = baggageHeader;
  }
  return config;
});

export const fetchRoot = () => api.get('/');
export const fetchError = () => api.get('/error');
export const fetchPerformance = () => api.get('/performance');
export const fetchFeedback = () => api.get('/feedback');
export const fetchCustomTags = () => api.get('/custom-tags');
export const fetchContext = () => api.get('/context');