import React from 'react'
import visa from '../img/visa.png'
import master from '../img/master.png'
import amex from '../img/amex.png'
import troy from '../img/troy.png'
import apple from '../img/apple.svg'
import google from '../img/google.svg'
import huawei from '../img/huawei.svg'
import etbis from '../img/etbis-qr.png'
import trust from '../img/trust-stamp.png'

function Header_14() {
  return (
    <div className='header_14'>
       <div className="header-14">
       <div className="h14-1">
            <h5>Trendyol</h5>
            <a href="">Biz Kimiz</a>
            <a href="">Kariyer</a>
            <a href="">İletişim</a>
            <a href="">Trendyol'da Satış Yap</a>
            <p>Güvenli Alışveriş</p>
            <div className='h14-img1'>
                <img  src={visa} alt="" />
                <img src={master} alt="" />
                <img src={troy} alt="" />
                <img src={amex} alt="" />
            </div>
        </div>
        <div className="h14-2">
            <h5>About us</h5>
            <a href="">BWho we are</a>
            <a href="">Careers</a>
            <a href="">İletişim</a>
            <a href="">Trendyol'da Satış Yap</a>
            <p>Mobil Uygulamalar</p>
            <div className='h14-img2'>
                <img src={apple} alt="" />
                <img src={google} alt="" />
                <img src={huawei} alt="" />
            </div>
        </div>
        <div className="h14-3">
            <h5>Kampanyalar</h5>
            <a href="">Aktif Kampanyalar</a>
            <a href="">Elite Üyelik</a>
            <a href="">Hediye Fikirleri</a>
            <a href="">Trendyol Fırsatları</a>
            <p>Sosyal Medya</p>
            <div>
                <div className="h14-icon icon1"><i class="fa-brands fa-facebook-f"></i></div>
                <div className="h14-icon icon2"><i class="fa-brands fa-square-instagram"></i></div>
                <div className="h14-icon icon1"><i class="fa-brands fa-twitter"></i></div>
                <div className="h14-icon icon2"><i class="fa-brands fa-youtube"></i></div>
            </div>
        </div>
        <div className="h14-4">
            <h5>Yardım</h5>
            <a href="">Sıkça Sorulan Sorular</a>
            <a href="">Canlı Yardım</a>
            <a href="">Nasıl İade Edebilirim</a>
            <a href="">İşlem Rehberi</a>
            <p className='h14-4-p'>Ülke Değiştir</p>
            <div>
                <img src={etbis} alt="" />
                <img src={trust} alt="" />
            </div>
            
        </div>
       </div>
    </div>
  )
}

export default Header_14