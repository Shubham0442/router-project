import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import style from "./cart.module.css"

const Womens = () => {

  const [women, setwomen] = useState([])


  useEffect(() => {
    
    fetch("http://localhost:8080/womensData")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
      setwomen(...women,res)
    })
   
  }, [])
  



  return (
    <div className={style.container}>
      <h1>Womens Page</h1> 
            
           
            <Grid templateColumns='repeat(4,1fr)' gap={6}>
                            
                    {women.map((elem)=>(
                      <Box className={style.box}>
                        <Image className={style.pic} src={elem.images}/>
                        <Text >{elem.name}</Text>
                        <p>{elem.price}</p>
                      </Box>
                    ))
                    }
            </Grid>
                


    </div>
  )
}

export default Womens