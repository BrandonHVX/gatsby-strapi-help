import React, { useState, useContext } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { CartContext } from "../context/CartContext"
import Layout from "../components/layout"
import { formatPrice } from '../utils/format'
import { Card, Accordion } from 'react-bootstrap'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPhoneAlt,
    faEnvelope,
    faArrowAltCircleRight,
    faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons"
import { Carousel } from 'react-responsive-carousel';
import ReactSwipe from "react-swipe"

const row = {
    width: '475px',
    margin: '30px auto',
    boxShadow: '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),inset 0 1px 0 #829fff',
    borderRadius: '4px',
    backgroundColor: '#7795f8',
    position: 'relative',
}

const buttonspace = {
    marginRight: '50px'
}

const image = {
    display: 'flex',
    justifyContent: "center"

}


const pstyle = {
    fontSize: '20px'

}






const ProductTemplate = ({ data }) => {

    const [qty, setQty] = useState(1)
    const { addToCart } = useContext(CartContext)
    let reactSwipeEl

    console.log("ProductTemplate.render data", data)
    return (
        <Layout>

            <div style={{ marginTop: '300px' }}>
                <div>
                    <div class="container ">

                        <div >
                            <div className="product-card" >
                                <div class="container">
                                    <div class="wrapper row  mb-5">
                                        <div class="col-lg-7 mt-5">
                                            <div >

                                                <ReactSwipe
                                                    className="swipe"
                                                    swipeOptions={{ continuous: false }}
                                                    ref={el => (reactSwipeEl = el)}
                                                >
                                                    <div>

                                                        <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} />

                                                    </div>
                                                    <div>
                                                        <Img fixed={data.strapiProduct.products_one.childImageSharp.fixed} />

                                                    </div>
                                                    <div>
                                                        <Img fixed={data.strapiProduct.products_two.childImageSharp.fixed} />

                                                    </div>
                                                    <div>
                                                        <Img fixed={data.strapiProduct.products_three.childImageSharp.fixed} />

                                                    </div>
                                                </ReactSwipe>




                                                <Accordion defaultActiveKey="0">
                                                    <Card>
                                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                                            View Products In Cart
    </Accordion.Toggle>
                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body>

                                                                <ul className="product-list">
                                                                    <li>{data.strapiProduct.item_1}</li>
                                                                    <li>{data.strapiProduct.item_2}</li>
                                                                    <li>{data.strapiProduct.item_3}</li>
                                                                    <li>{data.strapiProduct.item_4}</li>
                                                                    <li>{data.strapiProduct.item_5}</li>
                                                                    <li>{data.strapiProduct.item_6}</li>
                                                                    <li>{data.strapiProduct.item_7}</li>
                                                                    <li>{data.strapiProduct.item_8}</li>
                                                                    <li>{data.strapiProduct.item_9}</li>
                                                                    <li>{data.strapiProduct.item_10}</li>
                                                                    <li>{data.strapiProduct.item_11}</li>
                                                                    <li>{data.strapiProduct.item_12}</li>
                                                                    <li>{data.strapiProduct.item_13}</li>
                                                                    <li>{data.strapiProduct.item_14}</li>
                                                                    <li>{data.strapiProduct.item_15}</li>
                                                                    <li>{data.strapiProduct.item_16}</li>
                                                                    <li>{data.strapiProduct.item_17}</li>
                                                                    <li>{data.strapiProduct.item_18}</li>
                                                                    <li>{data.strapiProduct.item_19}</li>
                                                                    <li>{data.strapiProduct.item_20}</li>
                                                                    <li>{data.strapiProduct.item_21}</li>
                                                                    <li>{data.strapiProduct.item_22}</li>
                                                                    <li>{data.strapiProduct.item_23}</li>
                                                                    <li>{data.strapiProduct.item_24}</li>
                                                                    <li>{data.strapiProduct.item_25}</li>
                                                                    <li>{data.strapiProduct.item_26}</li>
                                                                    <li>{data.strapiProduct.item_27}</li>
                                                                    <li>{data.strapiProduct.item_28}</li>
                                                                    <li>{data.strapiProduct.item_29}</li>
                                                                    <li>{data.strapiProduct.item_30}</li>
                                                                    <li>{data.strapiProduct.item_31}</li>
                                                                    <li>{data.strapiProduct.item_32}</li>
                                                                    <li>{data.strapiProduct.item_33}</li>
                                                                    <li>{data.strapiProduct.item_34}</li>
                                                                    <li>{data.strapiProduct.item_35}</li>
                                                                    <li>{data.strapiProduct.item_36}</li>
                                                                    <li>{data.strapiProduct.item_37}</li>
                                                                    <li>{data.strapiProduct.item_38}</li>
                                                                    <li>{data.strapiProduct.item_39}</li>
                                                                    <li>{data.strapiProduct.item_40}</li>
                                                                    <li>{data.strapiProduct.item_41}</li>
                                                                    <li>{data.strapiProduct.item_42}</li>
                                                                    <li>{data.strapiProduct.item_43}</li>
                                                                    <li>{data.strapiProduct.item_44}</li>
                                                                    <li>{data.strapiProduct.item_45}</li>
                                                                    <li>{data.strapiProduct.item_46}</li>
                                                                    <li>{data.strapiProduct.item_47}</li>
                                                                    <li>{data.strapiProduct.item_48}</li>
                                                                </ul>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Accordion>
                                            </div>
                                        </div>


                                        <div class="details col-lg-4 mt-5">
                                            <h3 class="product-title">{data.strapiProduct.name}</h3> 						<div class="rating"> 							<div class="stars"> 								<span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span> 								<span class="fa fa-star"></span> 					<span class="fa fa-star"></span>							</div>							<span class="review-no">41 reviews</span> 					</div>

                                            <h4 class="price">Current Price: <span>{formatPrice(data.strapiProduct.price_in_cent)}</span></h4>
                                            <div className='mb-5'><p style={pstyle}> </p>


                                                <div>
                                                    <div class="form-group row justify-content-center ">
                                                        <div class="col-xs-2">
                                                            <label for="exampleSelect1"> Select your quanity</label>
                                                            <select value={qty}
                                                                onChange={(event) => setQty(event.target.value)} class="form-control" id="exampleSelect1">
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>


                                                </div>


                                            </div> <Link to="/pickup_delivery"> 							<button onClick={() => addToCart(data.strapiProduct, qty)} class="add-to-cart btn " type="button">add to cart</button>
                                            </Link>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>

    )
}

export default ProductTemplate

export const query = graphql`
    query ProductTemplateQuery($id: String!) {
        strapiProduct(id: {eq: $id}) {
            strapiId
            name
            items {
                id
                name
                qty
                weight
              }
            item_1
            item_2
            item_3
            item_4
            item_5
            item_6
            item_7
            item_8
            item_9
            item_10
            item_11
            item_12
            item_12
            item_13
            item_14
            item_15
            item_16
            item_17
            item_18
            item_19
            item_20
            item_21
            item_22
            item_23
            item_24
            item_25
            item_26
            item_27
            item_28
            item_30
            item_31
            item_32
            item_34
            item_35
            item_36
            item_37
            item_38
            item_39
            item_40
            item_41
            item_42
            item_43
            item_44
            item_45
            item_46
            item_47
            item_48
            price_in_cent
            description
            thumbnail {
                childImageSharp {
                    fixed(width: 300){
                        base64
                        width
                        height
                        src
                        srcSet
                    }
                }
            }
            products_one {
                childImageSharp {
                    fixed(width: 300){
                        base64
                        width
                        height
                        src
                        srcSet
                    }
                }
            }
            products_two {
                childImageSharp {
                    fixed(width: 300){
                        base64
                        width
                        height
                        src
                        srcSet
                    }
                }
            }
            products_three {
                childImageSharp {
                    fixed(width: 300){
                        base64
                        width
                        height
                        src
                        srcSet
                    }
                }
            }
           
        }
    }
`