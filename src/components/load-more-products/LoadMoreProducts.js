import React, { useEffect, useState } from 'react'
import './styles.css'

function LoadMoreProducts() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [errMsg, setErrMsg] = useState(null)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)
            const data = await response.json()
            console.log(data.products)
            if (data.products && data.products.length !== 0) {
                setProducts((prevProduct)=>[...prevProduct,...data.products])
                setCount(count + 1)
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
            setErrMsg(e.message)
            console.log("HERE ",e.message)
        }
    }


    useEffect(() => {
        fetchProducts()

        // eslint-disable-next-line
    }, [])

    if (loading) return (<div><h4>Loading More Data! Please wait...</h4></div>)
    if (errMsg) return (<div><h4>{errMsg}</h4></div>)

    return (<>

        <h2>LoadMoreProducts</h2>
        <div className="LMcontainer">
            <div className="productContainer">

                {
                    products && products.length !== 0
                        ? products.map(item => {
                            return (<div className="product">
                                <img key={item.id} 
                                src={item.thumbnail} 
                                alt={item.title} />
                                <h6>{item.title}</h6>
                                <div className='prod-info'><p>Price = ${item.price}</p><p>Rating = {item.rating}</p></div>
                            </div>)
                        })
                        : null
                }

            </div>
            <div className="Bcontainer">
                <button disabled={count * 20 >= 100} onClick={fetchProducts}>Load More Products</button>
                {count * 20 >= 100 ? <h6>-x-x-x-Limit Reached-x-x-x-</h6> : null}
            </div>
        </div>
    </>)
}

export default LoadMoreProducts