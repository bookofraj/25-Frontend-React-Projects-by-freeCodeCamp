import React, { useState } from 'react'

function Tab({ head, body, currentIndex }) {
    const [view, setView] = useState(0)

    const handleCurrentIndex = (getIndex) => {
        setView(getIndex)
        console.log("view: ",getIndex);
    }

    console.log(currentIndex);
    return (
        <div className='tab-main-box'>
            <div className="tab-head">
               <span onClick={handleCurrentIndex(currentIndex)}>{head}</span>
            </div>
            <div className="tab-content">
                <span>
                    {currentIndex === view ? body : null}
                </span>
            </div>
        </div>
    )
}

export default Tab