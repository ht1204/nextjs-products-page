/*
  Consider nextJS creates dynamic routes, this should correspond to route: /products/[id]
  Maybe this file requires to be relocated and renamed.

*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

import { API_URL } from '../utils/constants';

import "../styles/product-detail.styles.css";
import { Navbar } from "@/src/components/Navbar";


type RatingType = {
    rate: number;
}

type ProductType = {
    title: string;
    image: string;
    description: string;
    rating: RatingType
}


export default function ProductDetail() {
  const [product, setProduct] = useState<ProductType>({
    title: "Product Title",
    image: "",
    description: "Product Description",
    rating: {
        rate: 0
    }
  });

  /*
    Catch the id from url using nextJS resources.
  */
  const id = 0;

   /*
    Fetch selected product data item from API_URL and catched id above,
    you can use the proposed axios or fetch with useEffect or 
    if you want to try reactQuery or useSWR, awesome!
  */

  const { title, image, description, rating } = product;


  function handleGoBack() {
    // send me back to main product landing page!
  }


  return (
    <>
    <Navbar />
    <button
      className="btn-back"
      onClick={handleGoBack}
    >
      Back to Landing Page
    </button>
      {Object.keys(product).length ? (
        <section className='vessel'>
          <div className='detail-card'>
            <div className='product-img'>
              <Image 
                className='' 
                src={image} 
                alt='Product Detail'  
                width={400} 
                height={300}
              />
            </div>
            <div className='product-description'>
              <h1 className='product-title'>{title}</h1>
              <p className='product-d'>{description}</p>
            </div>
            <div className='product-rating'>
              <h2>Rating</h2>
              <strong>{rating?.rate}</strong>
              {rating?.rate <= 3.0 ? (
                <p>Not a good score</p>
              ) : rating?.rate >= 3.1 && rating?.rate <= 4.0 ? (
                <p>Good Score</p>
              ) : (
                <strong>Excellent Score</strong>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className='dots-bars-2'></div>
      )}
    </>
  );
}

