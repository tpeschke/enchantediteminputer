import React from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default (props) => {
    const { quill, quillRef } = useQuill();

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                props.updateProperty(props.type, quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);

    return (
        <div style={{ width: 500, height: 410 }}>
            <h2>{props.type}</h2>
            <div style={{ width: 500, height: 300 }}>
                <div ref={quillRef} />
            </div>
        </div>
    );
};