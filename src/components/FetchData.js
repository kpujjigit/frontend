// src/components/FetchData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Sentry from '@sentry/react';

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                Sentry.captureException(error);
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default Sentry.withProfiler(FetchData);