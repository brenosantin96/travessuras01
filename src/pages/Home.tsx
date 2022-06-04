import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CustomNavBar } from '../components/CustomNavBar'
import '../index.css';

export function Home() {

  return (
    <>
      <section className='introduceSection'>
        <CustomNavBar />

        <div className="widget d-flex flex-column justify-content-center align-items-start">
          <div className="widget-content d-flex flex-column text-white mx-5">
            <h1 className='fw-bold pb-3'>
              Travessuras Kids
            </h1>
            <h4 className='pb-3'>Moda infanto juvenil</h4>
            <div className="buttonLink">
              <Link className='linkStyle' to="#">Produtos</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='container midSection'>
        <div className="midSectionDescription text-center text-black">
          <h2>Como asesora de imagen de profesión encontrarás lo último en <br /> TENDENCIAS Y MODA</h2>
        </div>
        <hr />
        <div className="categories">
          <div className="row d-flex justify-center">
            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center categories-item-boots">
              <h4 className='text-white'>Sapatos e calçados</h4>
              <div className="buttonLink">
                <Link className='linkStyle' to="#">Entrar</Link>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center categories-item-shirts">
              <h4 className='text-white'>Camisetas e Camisas</h4>
              <div className="buttonLink">
                <Link className='linkStyle' to="#">Entrar</Link>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center categories-item-pants">
              <h4 className='text-white'>Calças</h4>
              <div className="buttonLink">
                <Link className='linkStyle' to="#">Entrar</Link>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center categories-item-jackets">
              <h4 className='text-white'>Jaquetas e moletons</h4>
              <div className="buttonLink">
                <Link className='linkStyle' to="#">Entrar</Link>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center categories-item-shorts">
              <h4 className='text-white'>Bermudas e shorts</h4>
              <div className="buttonLink">
                <Link className='linkStyle' to="#">Entrar</Link>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center categories-item-accessories">
              <h4 className='text-white'>Acessórios</h4>
              <div className="buttonLink">
                <Link className='linkStyle' to="#">Entrar</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>

  )
}


