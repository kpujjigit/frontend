// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  //dsn: process.env.REACT_APP_SENTRY_DSN,
  dsn: "https://361ece6793034a1296ec0865054def76@o4504052292517888.ingest.us.sentry.io/4504052295729152",
  integrations: [Sentry.browserTracingIntegration({
    tracingOrigins: ["localhost", /^\//],
  })],
  tracesSampleRate: 1.0, // Adjust this value in production
  //release: process.env.REACT_APP_RELEASE_VERSION,
  release: "kp-react@1.0.0",
  profilesSampleRate: 1.0, // Adjust this value in production
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
