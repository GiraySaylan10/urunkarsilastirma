import React from 'react';
import '../style/product.css';
import products from '../products.json';
import { useState } from 'react';
import ProductCompare from './ProductCompare';


  
 
 

const Product = ( {product,table ,setTable, resetTable ,  tableLength,setTableLength}) =>{

  const tableItem = table.find(item => item.id === product.id)

	const addTable = () => {
		const checkTable = table.find(item => item.id === product.id)
		
		if (checkTable) {
			
		} else {
			setTable([...table, {
				id: product.id,
				title : product.title,
				condition : product.condition,
        price : product.price

			}])
		}
	}

	const removeTable = () => {
		
		const tableWithoutCurrent = table.filter(item => item.id !== product.id)
		
		setTable([...tableWithoutCurrent])
	}
     
      

    
      
      
     
      
      

    
    
  
  
  
    return(
      <div  className ="col-lg-3 product" style = {{float:"left" ,width:"23%",marginLeft:"10px"}}>
        
  <img class="card-img-top   " src= {product.image} alt="Card image" style = {{width:"100%",height:"180px",marginBot:"0px"}}/>
  <div class="card-body" id =  {("product" + product.id)} style ={{width:"350px",marginTop:"0px",height:"200px"}} >
    <h2 class="card-title" >{product.title} </h2>
    <p class="card-text">{product.price} TL</p>
    <button  class="btn btn-primary" disabled ={tableItem} style = {{backgroundColor : "red",height:"50px" ,fontWeight: "bold", fontSize : "20px",fontFamily: "Lucida Console"}}  onClick={addTable}>Compare</button>
   
    <button  class="btn btn-primary" disabled = {!tableItem} style  = {{marginLeft:"30px",backgroundColor:"yellow",fontWeight: "bold", color : "white" , fontSize : "20px", height:"50px",fontFamily: "Lucida Console" }} onClick={removeTable}>Remove</button>
  </div>

  </div>
  
    );
};

export default Product

