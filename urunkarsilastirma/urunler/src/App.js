import './App.css';
import './style/product.css';
import ProductCompare from './component/ProductCompare';
import Product from './component/Product';
import products from './products.json';


import { useState } from 'react';
function App() {
  
	const [productLength,setproductLength] = useState(0);
      
const [productTable, setproductTable]   = useState([])  ;    
const resetTable = () => {
  setproductTable([])
 setproductLength(0)
}


  
	

  
  return (
    <div className = "App">
    
    <>
    <div className = "row"  style = {{height:"600px" , marginTop: "50px"}}>
      <h1 style = {{textAlign:"center"}}> Ürün Karşılaştırma</h1>

       
      {products.map(product =>(
       <Product product = {product} table = {productTable} setTable = {setproductTable} resetTable = {resetTable} tableLength = {productLength} setTableLength = {setproductLength}/>
        
          
       
        ))}
				</div>
        
        </>{productTable.length > 1 &&
        <ProductCompare table={productTable}resetTable={resetTable} products={products}  />
        }
        </div>
    
  );
}

export default App;
