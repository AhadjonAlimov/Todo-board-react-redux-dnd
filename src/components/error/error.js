import React from 'react';
import "./error.scss";

function Error() {
    return (
        <div className="errorBody">
            <h1 className="errorH1">Whoops!</h1>
            <p className="errorP">Something went wrong</p>
        </div>
    );
}

export default Error;