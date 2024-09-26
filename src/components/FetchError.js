// src/components/FetchError.js
import React, { useEffect, useState } from 'react';
import { fetchError } from '../apiService';
import * as Sentry from '@sentry/react';

const FetchError = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchError()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                Sentry.captureException(error);
                console.error('There was an error fetching the error data!', error);
            });
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default Sentry.withProfiler(FetchError);