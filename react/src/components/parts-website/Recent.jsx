import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Recent = () => {

  const [products, useProducts] = useState([]);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recents')
      .then((response) => {
        const products = response.data;
        useProducts(products);

        console.log(products);

      });
  }, []);



  return (
    <div>
      <div className='w-full bg-orange-100 p-1'>
        <div className='w-5/6 min-h-0 m-auto'>
          <h2 className='text-center text-4xl my-10'>Productos recientes</h2>
          <p className='text-center text-xl my-5'>Explora los Sabores del Presente en Nuestro Café, descubre las Últimas Delicias Cafeteras</p>
          <div className='w-5/6 min-h-0 m-auto my-10 flex gap-4 items-center justify-between'>
            {products.map((p) => (
              <div className='relative w-2/6 h-80 bg-transparent rounded-xl border-2 border-gray-400 p-2'>
                <img className='absolute top-0 left-1/2 transform -translate-x-1/2 block w-28' src={`http://localhost:8000/img/${p.img}`} alt={p.img} />
                <p className='absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full text-center text-xs sm:text-base my-7'><h2 className='block text-base sm:text-2xl'></h2> {p.name}</p>
                <p className='absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-sm sm:text-xl my-7'><h2 className='block text-base sm:text-2xl'></h2> <span className='text-orange-800'>{p.price}</span> $</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
