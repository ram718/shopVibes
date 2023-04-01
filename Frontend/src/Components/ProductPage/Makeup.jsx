import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Productcard } from './Productcard'
import Styles from "../../Styles/Product.module.css"
import axios from 'axios'

export const Makeup = () => {

    const [pro,setPro]=useState([])
    const category='makeup';
    useEffect(()=>{
        axios.get(`https://long-lime-fly-tux.cyclic.app/products?category=${category}`).then((res)=>{
            console.log(res.data)
            setPro(res.data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <Box>
        <h1>Mens</h1>
        <Box className={Styles.container} gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
      
      {pro.length>0 && pro.map((el)=>{
          return <Productcard key={el.id} {...el} category={category}/>
      })}
  </Box>
    </Box>
  )
}