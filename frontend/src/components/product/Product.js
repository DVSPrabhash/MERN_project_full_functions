import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (

        <div className="card" style={{width:"18rem"}}>
          <img src={product.images[0].url} className="card-img-top" width="100%" height="200px" alt="..."/>
          <div className="card-body">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
            <p className="card-text">Rs.{product.smallPrice}</p>
            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-primary" >View More Details</Link>
          </div>  
        </div>


        // <div>
        //     <div>
        //         <img
        //         class="card-img-top mx-auto"
        //         src={product.images[0].url}
        //         />
        //         <div>
        //             <h5>
        //                 <Link to={`/product/${product._id}`}>{product.name}</Link>
        //             </h5>
                    
        //             <p >Rs.{product.smallPrice}</p>
        //             <Link to={`/product/${product._id}`} id="view_btn" >View Details</Link>
        //         </div>
        //     </div>
        // </div> 
    )
}

export default Product
