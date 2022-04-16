import React from 'react'
import { Link } from 'react-router-dom'
import { Banner1, Banner2, BannerGloves, BannerHelmets } from './Banner'

export const Inicio = () => {
    return (
        <>
            <Banner1/>
            <h1>WM Indumentaria</h1>
            <div className='lorem'>
                <div data-aos="fade-right" className='lorem__left'>
                    <p className='lorem__pLeft'>Bienvenido a <span className='esp'>WM Indumentaria</span>, aqui encontraras todo lo necesario para tus dias de ruta, indumentaria diaria y accesorios necesarios para facilitar tu dia a dia sobre las dos ruedas. <br/>
                    Fundada en 2022, WM es una empresa que se enfoca en dar la mejor calidad de productos y asesoramiento a nuestros clientes, atencion de motociclistas para motociclistas,    ponemos enfasis en la mejor atencion a nuestros consumidores para que se sientan como en casa a la hora de elegirnos en la busqueda de su indumentaria ideal. <br/>
                    Navega por nuestros productos y no dudes en consultar ante cualquier duda!</p>
                </div>
                <div data-aos="fade-left" className='lorem__right'>
                    <p className='lorem__pRight'>Bienvenido a <span className='esp'>WM Indumentaria</span>, aqui encontraras todo lo necesario para tus dias de ruta, indumentaria diaria y accesorios necesarios para facilitar tu dia a dia sobre las dos ruedas. <br/>
                    Fundada en 2022, WM es una empresa que se enfoca en dar la mejor calidad de productos y asesoramiento a nuestros clientes, atencion de motociclistas para motociclistas,    ponemos enfasis en la mejor atencion a nuestros consumidores para que se sientan como en casa a la hora de elegirnos en la busqueda de su indumentaria ideal. <br/>
                    Navega por nuestros productos y no dudes en consultar ante cualquier duda!</p>
                </div>
            </div>
            <div className='full' data-aos="fade-up">
                <h2>CATEGORIAS</h2>
            </div>
            <div className='full' data-aos="fade-up">
                <Link className='inicio__a' to='/categorias/cascos'><BannerHelmets/></Link>
            </div>
            <div className='full' data-aos="fade-up">
                <Link className='inicio__a' to='/categorias/guantes'><BannerGloves/></Link>
            </div>
            
            
            <Banner2/>
        </>
    )
}

