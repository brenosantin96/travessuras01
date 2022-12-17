import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { CustomNavBar } from '../components/CustomNavBar'
import { Footer } from '../components/Footer';
import logoInsta from "./logoInstagram.png"
import { instaAPI, instagramAppID, instagramGrantType, instagramRedirectURI, instagramSecretKey } from '../api/api'
import { PostType } from '../types/PostType'
import '../index.css';
import { InstaCard } from '../components/InstaCard';
import { authURL, businessURL } from '../utils/initFacebookSdk'

export function Home() {


  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const [searchParams] = useSearchParams();

  const [posts, setPosts] = useState<PostType[]>([]);
  const [countPosts, setCountPosts] = useState(12);

  //getURLPARAMETERS, if false (execute the function to redirect, if true, get the PARAMETER and store in a variable)

  useEffect(()=> {
    getURLCode();
  }, []);

  useEffect(()=> {
    if(code !== ""){
      getCodigoAcceso();
    } else {
      console.log("Bleh")
    }
  }, [code])

  function initInstagramApi() {
    window.location.href = authURL;
  }

  async function getCodigoAcceso() {
    let response = await instaAPI.getAccessToken2(instagramAppID, instagramSecretKey, code, instagramGrantType, instagramRedirectURI);
    console.log(response)
  }

  function getURLCode() {
    let codigo = searchParams.get("code");
    if(codigo === null){
      initInstagramApi()
    } else {
      setCode(codigo);
    }
  }

  const getPosts = async () => {
    const data = await instaAPI.getPosts();
    if (data !== null) {
      setPosts(data.data);
      console.log(posts);
    }
  }

  const showMoreItens = async () => {
    setCountPosts((prevValue) => prevValue + 4)
  }


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
            <div className="buttonLinkProdutos">
              <Link className='linkStyle' to="#">Saiba mais</Link>
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
            <div className="col-12 p-2 col-md-4 col-sm-6">
              <div className="categories-item-boots d-flex flex-column align-items-center justify-content-center">
                <h4 className='text-white'>Sapatos e calçados</h4>
                <div className="buttonLink">
                  <Link className='linkStyle' to="#">Entrar</Link>
                </div>
              </div>
            </div>
            <div className="col-12 p-2 col-md-4 col-sm-6">
              <div className="categories-item-pants d-flex flex-column align-items-center justify-content-center">
                <h4 className='text-white'>Calças e shorts</h4>
                <div className="buttonLink">
                  <Link className='linkStyle' to="#">Entrar</Link>
                </div>
              </div>
            </div>
            <div className="col-12 p-2 col-md-4 col-sm-6">
              <div className="categories-item-shirts d-flex flex-column align-items-center justify-content-center">
                <h4 className='text-white'>Camisas e camisetas</h4>
                <div className="buttonLink">
                  <Link className='linkStyle' to="#">Entrar</Link>
                </div>
              </div>
            </div>
            <div className="col-12 p-2 col-md-4 col-sm-6">
              <div className="categories-item-jackets d-flex flex-column align-items-center justify-content-center">
                <h4 className='text-white'>Jaquetas e moletons</h4>
                <div className="buttonLink">
                  <Link className='linkStyle' to="#">Entrar</Link>
                </div>
              </div>
            </div>
            <div className="col-12 p-2 col-md-4 col-sm-6 ">
              <div className="categories-item-shorts d-flex flex-column align-items-center justify-content-center ">
                <h4 className='text-white'>Conjuntos</h4>
                <div className="buttonLink">
                  <Link className='linkStyle' to="#">Entrar</Link>
                </div>
              </div>
            </div>
            <div className="col-12 p-2 col-md-4 col-sm-6">
              <div className="categories-item-accessories d-flex flex-column align-items-center justify-content-center ">
                <h4 className='text-white'>Acessórios</h4>
                <div className="buttonLink">
                  <Link className='linkStyle' to="#">Entrar</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <hr />
      </section>

      <section className="container insta_images mt-5 ">
        <div className="header-insta-images">
          <h2 className='mx-5'>Confira nosso instagram!</h2>
          <div className="logofeed mx-5 mb-1 d-flex flex-row justify-content-start align-items-center">
            <img className='logoInsta' src={logoInsta} alt="" />
            <span className='fs-4 p-2'>breno.santin</span>
          </div>
          <div className="row g-0">
            {posts &&
              posts.slice(0, countPosts).map((item, index) => {

                if (index > countPosts) {
                  setCountPosts(countPosts + 3);
                  return;
                }

                if (index <= countPosts) {
                  return (
                    <div className="p-1 col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
                      <InstaCard data={item} />
                    </div>
                  )
                }
              })
            }
          </div>
          <div className="row d-flex justify-content-center align-items-center mb-5">
            <div className="buttonLink">
              <Link className='linkStyle' onClick={showMoreItens} to="#">Ver mais</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='FBArea'>

        <div className="buttonLink">
          <a href={authURL}>Autenticar</a>
        </div>

        <div className='container'>
          <a target="_blank" href={businessURL}>Teste</a>
        </div>
      </section>

      <Footer />



    </>

  )
}


