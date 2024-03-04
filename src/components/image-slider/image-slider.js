import React, { useEffect, useState } from 'react'
import './styles/styles.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function ImageSlider({ url, page, limit }) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errMsg, setErrMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl, page, limit) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }

        } catch (e) {
            setLoading(false)
            setErrMsg(e.message)
        }
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== null) fetchImages(url, page, limit)
    }, [url, page, limit])

    console.log("images: ", images)
    // console.log("url: ",url)
    // console.log("pg: ",page)
    // console.log("lmt: ",limit)

    if (loading) {
        return <div><h3>Loading Data! Please Wait...</h3></div>
    }

    if (errMsg !== null) {
        return <div>
            <h2>Oops! Error Occurred...</h2>
            <h5>{errMsg}</h5>
        </div>
    }

    return (
        <div className="wrapper2 image-slider">
            <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
            {
                images && images.length
                    ? images.map((imageItem,index) => {
                       return <img key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={
                                currentSlide === index ?
                                "current-image" : "current-image hide"
                            } />
                    }) : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
            <span className="circle-indicator">
                {images && images.length
                    ? images.map((_, index) => {
                      return  <button key={index} 
                        className={
                            currentSlide === index ?
                            "current-indicator" : "current-indicator inactive"
                        }
                        onClick={()=>{setCurrentSlide(index)}}></button>
                    }) : null}
            </span>
        </div>
    )
}

export default ImageSlider