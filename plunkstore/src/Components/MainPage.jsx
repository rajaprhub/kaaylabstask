import React from 'react'
import { useState,useEffect } from 'react'
import '../Styles/MainPage.css' ;

// import { ProductTable } from './ProductTable';

import { Pagination } from './Pagination'



export const MainPage = () => {
    const [product, setProduct] = useState([]);
    const [current, setCurrent] = useState(1);
  const [brewedbefore, setBrewedbefore] = useState("");
  const [brewedafter, setBrewedafter] = useState("");

  const callback = (payload) => {
    setCurrent((prev) => {
      setCurrent(prev + payload);
 
    });
  };


  useEffect(() => {
    if (brewedbefore != "" && brewedafter != "") {
      fetch(
        `https://api.punkapi.com/v2/beers?page=${current}&per_page=10&brewed_before=${brewedbefore}&brewed_after=${brewedafter}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setProduct(res);
        });
    } else if (brewedafter != "") {
      fetch(
        `https://api.punkapi.com/v2/beers?page=${current}&per_page=10&brewed_after=${brewedafter}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setProduct(res);
        });
    } else {
      fetch(
        `https://api.punkapi.com/v2/beers?page=${current}&per_page=10&brewed_before=${brewedbefore}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setProduct(res);
          });
    }
  }, [brewedafter, brewedbefore]);


  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${current}&per_page=10`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
       });
  }, [current]);

  // console.log(product)



   
  return (
    <div>

          
        <input type="text"  onChange={(e) => {  setBrewedbefore(e.target.value);}}   placeholder="brewed before"
          />
       <input  type="text"   onChange={(e) => {  setBrewedafter(e.target.value) }} placeholder="brewed after"
          />



            <table className='tablecontent' >
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>name</th>
                        <th>Brewers_tips</th>
                        <th>Contributed By</th>
                        <th>first_brewed By</th>

                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}

                    {
                        product.map((data,index)=>{ 
                            return (
                                // <ProductTable key={index} data = {data}  />  
                              <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.food_pairing[0]}</td>
                                <td>{data.contributed_by}</td>
                                <td>{data.first_brewed}</td>
                              </tr>


                            )
                        
                       })
                  }
                  
                </tbody>
            </table>
          

            <div>
            {/* Pagination */}
            <Pagination onChange={callback} current={current} />
          </div>


    </div>
  )
}
