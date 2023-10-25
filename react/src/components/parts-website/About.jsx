import React from 'react'

export const About = () => {
    return (
        <div>
            <div className='w-full bg-orange-100 p-1'>
                <div className='w-5/6 min-h-0 m-auto'>
                    <h2 className='text-center text-4xl my-10'>¿Quiénes Somos?</h2>
                    <div className='w-5/6 min-h-0 m-auto my-10 flex gap-14 items-center justify-between'>
                        <img src="http://localhost:8000/img/Coffee-bag-min.png" alt="" />
                        <p className='text-xl text-justify'>
                            Bienvenidos a Borcelle, el refugio acogedor donde los aromas cautivadores del café se entrelazan con la calidez de las sonrisas. Somos más que una simple tienda de café; somos un oasis para los amantes de la cafeína y los momentos significativos. En Borcelle, cada taza se prepara con pasión, cada grano se tuesta con dedicación y cada encuentro se llena de conexión humana. Descubre nuestra amplia selección de granos artesanales de todo el mundo, maridados con delicias frescas y un ambiente que invita a la relajación y la inspiración.
                        </p>
                    </div>

                    <div className='w-5/6 min-h-0 m-auto my-10 flex gap-14 items-center justify-between'>
                        <p className='w-2/4 text-xl text-justify'>
                            En Borcelle, nos esforzamos por ofrecer algo más que café; proporcionamos experiencias memorables. Nuestro equipo apasionado no solo sirve bebidas excepcionales, sino que también crea un espacio donde las conversaciones fluyen y las ideas se incuban. Desde el primer sorbo hasta la última palabra escrita en nuestras mesas, cada momento en Borcelle está diseñado para nutrir el cuerpo y el alma.
                        </p>
                        <img className='w-2/4' src="http://localhost:8000/img/About-img.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
