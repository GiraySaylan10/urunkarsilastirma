import React from 'react';
import '../style/product.css';
import TableItem from './TableItem';
const ProductCompare = ({table,resetTable,products}) =>{
      
        
return(
<>

						<TableItem  products={table}/>
		<p></p>			
           <button className="basket-reset-btn" onClick={resetTable}>Tabloyu Sıfırla</button>
          </>
         
);
        };
export default ProductCompare