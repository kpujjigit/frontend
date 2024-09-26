// src/components/FetchRoot.js
import React, { useEffect, useState } from 'react';
import { fetchRoot } from '../apiService';
import * as Sentry from '@sentry/react';

const FetchRoot = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchRoot()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                Sentry.captureException(error);
                console.error('There was an error fetching the root data!', error);
            });
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default Sentry.withProfiler(FetchRoot);