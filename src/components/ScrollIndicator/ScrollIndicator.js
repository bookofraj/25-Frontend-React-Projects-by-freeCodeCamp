import React, { useEffect, useState } from 'react'

function ScrollIndicator({ url }) {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [scrollPercent, setScrollPercent] = useState(0)

    const getData = async (getUrl) => {

        try {
            setLoading(true)

            const response = await fetch(getUrl)
            const data = await response.json()
            console.log(data);

            if (data && data.products && data.products.length) {
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setErrMsg(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData(url)
    }, [url])

    const handleScroll = () => {

        // document.documentElement.scrollTop = gives the TOP POSITION of the viewing window
        // document.documentElement.clientHeight = gives the HEIGHT of the viewing window
        const heightScrolled = document.documentElement.scrollTop + document.documentElement.clientHeight

        // document.documentElement.scrollHeight = is the TOTAL SCROLLABLE HEIGHT
        const heightTotal = document.documentElement.scrollHeight

        //math.floor is used to round off an integer value!
        setScrollPercent(Math.floor((heightScrolled / heightTotal) * 100))
    }

    console.log(scrollPercent);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)    //mounting event listener

        return window.removeEventListener('scroll', () => { })  //unmounting event listener
    }, [])

    if(loading){
        return <h1> Loading Data! Please Wait... </h1>
    }

    if(errMsg){
        return <div> 
            <h3>Error Occurred !</h3>
            <p>{errMsg}</p>
        </div>
    }

    return (<div>

        {/* Simplified the div(s) with in-line CSS for clean 
        and better understanding with minimal code*/}
        
        <div className='scroller-container' 
            style={{ width: '100vw', background: "orange", 
                    position:'fixed', top:'0', color:'white'}}>

            <h3>ScrollIndicator</h3>

            <div className="progress-background" style={{ width: '100vw',height:'10px', 
                                                        background: "black", position:'fixed'}}>

                <div className="progress-tracking" style={{ width: `${scrollPercent}%`, 
                                                            height:'10px', background: "red" }}></div>
            </div>
        </div>

        <div className="data-container" style={{marginTop:'100px'}}>
            {
                data && data.length > 0 ?
                    data.map(dataItem => {
                        return <h5 key={dataItem.id}>{dataItem.title}</h5>
                    }) : null
            }
        </div>
    </div>
    )
}

export default ScrollIndicator