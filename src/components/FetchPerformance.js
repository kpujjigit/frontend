// src/components/FetchPerformance.js
import React, { useEffect, useState } from 'react';
import { fetchPerformance } from '../apiService';
import * as Sentry from '@sentry/react';

const FetchPerformance = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchPerformance()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                Sentry.captureException(error);
                console.error('There was an error fetching the performance data!', error);
            });
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default Sentry.withProfiler(FetchPerformance);