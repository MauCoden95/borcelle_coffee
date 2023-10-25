import React from 'react'

export const Banner = () => {
    return (
        <div>
            <section className='w-full min-h-0 bg-orange-100'>
                <div className='w-4/6 h-auto py-28 m-auto flex items-center justify-between'>
                    <img className="w-80" src="http://localhost:8000/img/Banner-min.png" alt="Banner" />
                    <div className='w-3/5 h-full'>
                        <p className='text-5xl my-6 text-center text-orange-900'>BORCELLE</p>
                        <p className='text-base text-justify my-6 text-center text-orange-900'>¡Despierta tus sentidos, compra café con estilo! 🌟 Explora, Saborea, Disfruta en nuestro Ecommerce Café, donde cada taza cuenta una historia. ☕✨</p>
                        <a className='block w-32 p-2 rounded-md m-auto bg-yellow-400 hover:bg-yellow-600 text-xl text-center' href="#">Ver más <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
