'usee client';
import { useState, useEffect } from 'react';
import Logger from './Logger.js';
import ErrorBoundary from './Boundary.js';


export default function ErrorComponent() {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    if (hasError) {
        return <h1>Something went wrong.</h1>;
    }

    useEffect(() => {
        if (error) {
            Logger.logError("Caught error in component:", error);
        }
    }, [error]);

    return (
        <ErrorBoundary>
            <button 
                type="button"
                className='error-button'
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    setHasError(true);
                    setError(new Error('An error occurred'));
            }}>ErrorBoundary</button>
        </ErrorBoundary>
    );

}