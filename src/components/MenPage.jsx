import React, { useEffect,useState } from 'react'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import style from "./cart.module.css"

const MenPage = () => {

    const [mens, setMens] = useState([])

    useEffect(() => {
      fetch("http://localhost:8080/mensData")
      .then((res)=>{
          return res.json()
      })
      .then((res)=>{
          setMens(...mens,res)
      })
    
      
    }, [])
    
  return (
    <div className={style.container}>
           <h1>Mens Page</h1> 
            
            <Grid templateColumns='repeat(4,1fr)' gap={6}>
                
                {mens.map((elem)=>(
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

export default MenPage