import React from 'react'

export const Products = () => {
    return (
        <div>
            <div className='w-full bg-orange-100 p-1'>
                <div className='w-5/6 min-h-0 m-auto'>
                    <h2 className='text-center text-4xl my-10'>Todos los productos</h2>
                    <p className='text-center text-xl my-5'>Explora un Mundo de Aromas y Sabores en Nuestro eCommerce de Café: Tu Destino para la Pasión Cafetera</p>
                    <div className='w-4/6 h-10 m-auto my-10 bg-gray-600 text-gray-200 rounded-xl flex items-center justify-evenly'>
                        <button className='hover:text-gray-800'>Cafetería</button>
                        |
                        <button className='hover:text-gray-800'>Delicias Dulces</button>
                        |
                        <button className='hover:text-gray-800'>Postres</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
