import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import "./home.css";
// import { useNavigate } from 'react-router';

const Products = (props) => {
    //  const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const [loading, setLoading] = useState(false);
    // let componentMounted = true;

    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");

        console.log(response)
        setData(await response.data);
        setFilter(await response.data);
        console.log(filter);
        console.log(data)
        setLoading(false);


    };
    useEffect(() => {
        fetchData();

        // eslint-disable-next-line 
    }, []);



    //  useEffect(() => {
    //     const getProducts = async () => {
    //         setLoading(true);
    //         const response = await axios.get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`);
    //         if (componentMounted) {
    //             setData(await response.data);
    //             setFilter(await response.data);
    //             setLoading(false);
    //             // console.log(filter);
    //         }

    //         return () => {
    //             componentMounted = false;
    //         }
    //     }

    //     getProducts();

    //  }, []);


    //      const getProduct = (id) => {
    //      navigate(`/products/${id}`)
    //  }

    //page loading
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };
    //filter the products that are already selected by the user and add them to the list of selected products
    const filterProduct = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        setFilter(updatedList);
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <div className="btn btn-outline-dark" onClick={() => setFilter(data)}>View All</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</div>
                </div>
                <br></br>
                <br></br>





                {filter.map((product) => {
                    // console.log(product.id);
                    return (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div class="card-body">
                                    <h5 className="card-title mb-0">{product.title}...</h5>
                                    <p className="card-text lead fw-bold">{product.price}</p>
                                    {/* <button onClick={()=> getProduct (product.id)}>Buy Now</button> */}
                                    <NavLink to={{ pathname: `/product/${product.id}` }} state={{ id: product.id }} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </>
        )
    }




    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    {/*  */}
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Products
