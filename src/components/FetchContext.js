// src/components/FetchContext.js
import React, { useEffect, useState } from 'react';
import { fetchContext } from '../apiService';
import * as Sentry from '@sentry/react';

const FetchContext = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchContext()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                Sentry.captureException(error);
                console.error('There was an error fetching the context data!', error);
            });
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default Sentry.withProfiler(FetchContext);