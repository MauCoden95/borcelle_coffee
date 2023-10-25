import React from 'react'

export const Header = () => {
  return (
    <div>
      <header className='w-full h-auto bg-orange-100 border-b-2 border-dashed border-orange-900 py-1'>
        <div className='w-5/6 h-auto m-auto flex items-center justify-between'>
          <a href="">
            <img className="w-28" src="http://localhost:8000/img/Logo-min.png" alt="Banner" />
          </a>
          <nav className='w-2/4 h-auto'>
            <ul className='w-full h-full flex items-center justify-between'>
              <li><a className='text-xl text-orange-900 hover:text-orange-500' href="">Inicio</a></li>
              <li><a className='text-xl text-orange-900 hover:text-orange-500' href="">Nosotros</a></li>
              <li><a className='text-xl text-orange-900 hover:text-orange-500' href="">Sucursales</a></li>
              <li><a className='text-xl text-orange-900 hover:text-orange-500' href="">Productos</a></li>
              <li><a className='text-xl text-orange-900 hover:text-orange-500' href="">Contacto</a></li>
            </ul>
          </nav>

          <button className='text-2xl bg-orange-900 hover:bg-orange-500 text-orange-300 px-6 py-2 rounded-md'><i className='fas fa-user'></i> Login</button>
        </div>
      </header>
    </div>
  )
}
