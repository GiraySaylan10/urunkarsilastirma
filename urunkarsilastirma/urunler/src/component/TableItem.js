import {useState} from 'react'

function TableItem({ products}) {
      const fruitsPrice = [] 
      {products.map( product =>
      fruitsPrice.push(product.price)
      )}
    const enKucuk =[] 
    {products.map( product =>
      enKucuk.push(product.price)
      )}
      enKucuk.sort(function(a,b){return a  - b });

  const enBuyuk= fruitsPrice.reduce(
    (acc, mevcut) => {
      return (acc < mevcut ?mevcut  :acc );
  });
  const fruit =  products.find( product => product.price === enBuyuk)
  const meyve = products.find(product=>product.price===(enKucuk[0]))

	return(
		<>
			<div className = "container mt-3" >
        
    <table class="table" >
      <thead  >
        
          <tr >
          <th >
                
            </th>
            {products.map(product =>
              
                
               <td > {product.title}</td>
              
            )}
          </tr>
          </thead>
        <tbody>
          <tr className = "table-primary">
            <th >Price</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.price} TL</td>
            )}
          </tr>
          
          <tr >
            <th >Condition</th>
            {products.map(product =>
              <td key={product.id} style={{color:product.condition === "Taze" ? "red" : "blue"}}>
                {product.condition}
              </td>
            )}
          </tr>
        </tbody>
      </table>
      </div>
      <div style = {{marginTop : "20px"}}>
   
      En pahalı meyve {fruit.title}. 
      {fruit. title === "Portakal" &&
      <div>
          Ayrıca Portakal pahalı olmasına rağmen taze değil. 
          </div>
           }
          
           { products.length ===4 &&
            <div>
             
           Havuç portakaldan 7 TL pahalı olsa da çok daha kaliteli ve tazedir.
              </div>
                                }
           
           
              
            
             
          
          {fruit.title === "Elma"   &&
          <div>
              İkisi de tazedir. Ama mandalina çok daha ucuz olduğu için tercih edilebilir.
            </div>
            }
           </div>
           En ucuz meyve {meyve.title}.
           {meyve.title === "Elma" && products.length ===3 &&
             <div> Elma Portakaldan daha ucuzdur ve  kalitelidir. Bu yüzden portakala göre daha iyidir. </div>
           } 
           
  </>
  
  );
};
export default TableItem