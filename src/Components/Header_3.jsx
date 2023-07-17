import React from 'react'

function Header_3() {
  return (
    <div className='header-3'>
        <div className="h3-1">
            <h1>trendyol</h1>
        </div>
        <div className="h3-2">
            <input type="text" placeholder='Aradığınız ürünü,karegori veya markayı yazın ' />
            
        </div>
        <div className="h3-3">
            <a className='user' href=""><i class="fa-solid fa-user"></i>Giriş Yap
            <div className='user-alt'>
                <button className='btn1'><a className='user-a1' href="">Giriş Yap</a></button>
                <button className='btn2'><a className='user-a2' href="">Üye ol</a></button>
            </div>
            </a>
            <a href=""><i class="fa-solid fa-heart"></i>Favorilerim</a>
            <a href=""><i class="fa-solid fa-cart-shopping"></i>Sepetim</a>
        </div>
    </div>
  )
}

export default Header_3