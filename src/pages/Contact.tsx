import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CustomNavBar } from '../components/CustomNavBar'
import { Footer } from '../components/Footer'
import logoInsta from "../../imgs/logoInsta.png";
import { instaAPI } from '../api/api'
import { PostType } from '../types/PostType'
import '../index.css';
import { InstaCard } from '../components/InstaCard';

export function Contact() {



  return (
    <>
      <section className='introduceSectionContact'>
        <CustomNavBar />

        <div className='widget-contact d-flex justify-content-center align-items-center'>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <div className="contact-left-side">
                  <h1 className='fw-bold pb-3'>
                    Precisa falar conosco?
                  </h1>
                  <p className='lh-base'>
                    Fique a vontade para preencher nosso formulário.
                  </p>
                  <p className='lh-base'>Se preferir pode nos ligar em <span>{"(34) 3825-4559"}</span>.</p>
                  <p className='lh-base'>
                    Rua João da Silva, 122 - 38700-122 Patos de Minas MG
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="containerForm">
                  <form action="" className='d-flex flex-column'>
                    <label id='fname'>Nome
                      <input type="text" id="fname" placeholder="Seu nome..." />
                    </label>
                    <label id="email">E-mail
                      <input type="text" id="email" placeholder="Seu email..." />
                    </label>
                    <label id="telefone">Telefone
                      <input type="text" id="email" placeholder="Seu telefone/celular..." />
                    </label>
                    <label id="msg">Mensagem
                      <textarea id="msg" placeholder="Escreva algo..." style={{ height: '200px' }}></textarea>
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>

  )
}


