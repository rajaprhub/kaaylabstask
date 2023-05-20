import React from 'react'
import '../Styles/ProductTable.css' ;

export const ProductTable = ( props) => {
 const {data} = props  ;

  return (
    <>
        

         <tr>
           <td>{data.id}</td>
           <td>{data.name}</td>
           <td>{data.food_pairing[0]}</td>
           <td>{data.contributed_by}</td>
         </tr>


    
    

    </>
  )
}
