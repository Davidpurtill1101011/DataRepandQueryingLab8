import React from 'react';
// Content is a set class for react and knows what needs to be used
export class Content extends React.Component {
    render() {
        return (
            // adding hello world and adding in the time api/function into the content componet
            <div>
                <h1>Hello World!</h1>
                <h2>Current Time: {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}