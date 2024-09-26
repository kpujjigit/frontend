// src/components/FetchCustomTags.js
import React, { useEffect, useState } from 'react';
import { fetchCustomTags } from '../apiService';
import * as Sentry from '@sentry/react';

const FetchCustomTags = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchCustomTags()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                Sentry.captureException(error);
                console.error('There was an error fetching the custom tags data!', error);
            });
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default Sentry.withProfiler(FetchCustomTags);