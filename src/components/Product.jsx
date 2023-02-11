

// import Skeleton from 'react-loading-skeleton';



// const Product = (props) => {
//   // const id = useLocation();
//   const { id } = useParams();
//   // console.log(props.match.params);
//   console.log(useParams());

//   console.log(id);
//   const [product, setProduct] = useState({});
//   const [loading, setLoading] = useState(true);

//   


//   const fetchData = async () => {
//         setLoading(true);
//     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    
       
//     console.log(response)
//                   setProduct(await response.data);
//                 //   setfilter(await response.data);
//                 //   console.log(filter);
//                 //   console.log(data)
//                   setLoading(false);
                  
                 
//       };
//       useEffect(() => {
//         fetchData();
    
//         // eslint-disable-next-line
//       }, []);


//   // const fetchData = async () => {
//   //       setLoading(true);
//   //   const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    
       
//   //   console.log(response)
//   //                 setProduct(await response.data);
//   //               //   setfilter(await response.data);
//   //               //   console.log(filter);
//   //               //   console.log(data)
//   //                 setLoading(false);
                  
                 
//   //     };
//   //     useEffect(() => {
//   //       fetchData();
    
//   //       // eslint-disable-next-line
//   //     }, []);


//   // useEffect(() => {
//   //   const getProduct = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const response = await axios.get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`);
//   //       // console.log(product.id);
//   //       setProduct(await response.data);
//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.log(error);
//   //       setLoading(false);
//   //     }
//   //   }
//   //   getProduct();
//   // }, [])
  
  // const Loading = () => {
  //   return (
  //     <>
  //       <div className="col-md-6">
  //         <Skeleton height={400}/>
  //       </div>
  //       <div className="col-md-6" style={{lineHeight:2}}>
  //         <Skeleton height={50} width={300} />
  //         <Skeleton height={75} />
  //         <Skeleton height={25} width={150} />
  //         <Skeleton height={50}  />
  //         <Skeleton height={150}  />
  //         <Skeleton height={50} width={100} />
  //         <Skeleton height={50} width={100} style={{marginLeft:6} } />
  //       </div>
  //     </>
  //   )
  // }
//   const ShowProduct = () => {
//     if (!product) {
//     return <p>Product not found</p>;
//   }
//     return (
//       <>
//         <div className="col-md-6">
//           <img src={product.image} alt={product.title} height="400px" width="400px" />
        
//         </div>
//         <div className="col-md-6">
//           <h4 className="text-uppercase text-black-50">
//             {product.category}
//           </h4>
//           <h1 className='display-5'>{product.title}</h1>
//           <p className="lead fw-bolder">
//             Rating {product.rating && product.rating.rate}
//             <i className="fa fa-star"></i>
//           </p>
//           <h3 className="display-6 fw-bold my-4">
//             ${product.price}
//           </h3>
//           <p className="lead">{product.description}</p>
//           <button className="btn btn-outline-dark"
//           >Add to cart</button>
//           <NavLink to='/cart' className="btn btn-dark ms-2 px-3 py-2">Go to cart</NavLink>
//        </div>
//       </>
//     )
//   }
//   return (
//     <div>
//       <div className="container py-5">
//         <div className="row py-5">
//           {loading? <Loading/>:<ShowProduct/>}
//        </div>
//       </div>
//     </div>
//   )
// }

// export default Product

import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${match.params.id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [match.params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  const ShowProduct = () => {
    if (!product) {
    return <p>Product not found</p>;
  }
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className='display-5'>{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            ${product.price}
          </h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >Add to cart</button>
          <NavLink to='/cart' className="btn btn-dark ms-2 px-3 py-2">Go to cart</NavLink>
       </div>
      </>
    )
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {<ShowProduct/>}
       </div>
      </div>
    </div>
  )
}

export default Product;
