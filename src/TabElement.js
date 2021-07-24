import React, { useState } from 'react';

export default function TabElement({ children }) {

    const [highlight, setHighlight] = useState({ left: 0, top: 0, opacity: 0 })

    // MOVING HIGHLIGHT HOVER ON MOUSE MOVE
    function moveHighlight(e) {
        // console.log(e.nativeEvent)
        setHighlight({
            left: e.nativeEvent.layerX - 120,
            top: e.nativeEvent.layerY - 50
        })
    }

    // HIDE HIGHLIGHT HOVER ON MOUSE OUT
    function hideHighlight() {
        setHighlight({ opacity: 0 })
    }

    return (
        <div className="tab"
            onMouseOut={hideHighlight}
            onMouseMove={moveHighlight}>
            <div className="highlight" style={highlight} />
            {children}
        </div>

    )
}