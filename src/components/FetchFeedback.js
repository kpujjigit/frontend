// src/components/FetchFeedback.js
import React, { useEffect, useState } from 'react';
import { fetchFeedback } from '../apiService';
import * as Sentry from '@sentry/react';

const FetchFeedback = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchFeedback()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                Sentry.captureException(error);
                console.error('There was an error fetching the feedback data!', error);
            });
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default Sentry.withProfiler(FetchFeedback);