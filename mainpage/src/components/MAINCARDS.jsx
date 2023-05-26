import React, { useEffect } from "react"
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom"
import { Box, Card, CardContent, Typography, CardActions,CardMedia , Button, Stack, Grid,makeStyles,IconButton,ButtonBase, CardActionArea } from "@mui/material"
import { useState } from "react"

 const MAINCARDS = () => {
   
    const cardData = [
        {
            title:'Cryptocurrency',
            info: 'Click learn more to visit cryptocurrency website.',
            img : 'https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg',
            alt : 'Etherium',
            url : 'https://unitifycrypto.netlify.app/',
            key : 1
        },
        {
            title:'NFT',
            info: 'Click learn more to visit NFT website ',
            img : 'https://w0.peakpx.com/wallpaper/393/15/HD-wallpaper-technology-nft-thumbnail.jpg',
            alt : 'NFT',
            url : 'https://unitifynft.netlify.app/',
            key : 2
        },
    
        {
            title:'E-Commerce',
            info: 'Click learn more to visit NFT website ',
            img : 'https://s.alicdn.com/@sc04/kf/H689864f61cb54afd9472a9785fb641ee2.png',
            alt : 'NFT',
            key : 2,
            url : 'http://3.108.247.218',
        }
    
    ]
    
    const [data, setData] = useState([cardData]);

    useEffect(()=>{
       console.log("test") 
       setData(cardData)
    },[])

   
    
return (

<div  >

 <Box width='200x' marginTop={5} marginLeft={5} marginRight={5}  >
 <Grid container spacing={5} style={{display:"flex", justifyContent: "center", alignContent: "center", height:"100vh"}}>
        
    {
        data.map(item => (

         <Grid item xs={12} md={3} > 
        <Link size="small" color="primary" to={item.url} >
        <Card>
        <CardActionArea href="">
        <CardMedia
                     key={item.key} 
                     component = "img"
                     height = "200"
                     image = {`${item.img}`}
                     alt = {item.alt}
        />
            <CardContent >
                    <Typography  variant="h5">{item.title}</Typography>
            </CardContent>
         
        </CardActionArea>
        <CardActions>
      
      </CardActions>
        </Card>
        </Link>
        </Grid>
        ))
       }

</Grid>

 </Box>
 </div>
)

}

export default MAINCARDS
