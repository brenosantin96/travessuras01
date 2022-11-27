import React from 'react'
import { CustomNavBar2 } from '../components/CustomNavBar2'
import kidsImg from "../../imgs/happyKids.png";
import kidsImg2 from "../../imgs/happyKids3.png";
import { Footer } from '../components/Footer';

export const About = () => {
    return (
        <>
            <CustomNavBar2 />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3">
                        <h2>Sobre nós</h2>
                        <p className='lh-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, veniam asperiores dolorem temporibus illum nesciunt ullam. Laudantium quis rerum accusantium, similique, labore cupiditate soluta recusandae ullam error, fugit quibusdam voluptas?
                            Harum maiores voluptatem officiis. Esse libero assumenda fugiat nemo ab. Molestiae fugit ut hic sunt ratione magni ab dolor voluptatem velit ea? Atque quis voluptate ab ipsum sapiente quia architecto.</p>
                        <div className='about-div-image-left d-flex justify-content-center'>
                            <img src={kidsImg2} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3">
                        <div className='about-div-image-right d-flex justify-content-center'>
                            <img src={kidsImg} alt="" />
                        </div>
                        <h2>Missão</h2>
                        <p className='lh-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, veniam asperiores dolorem temporibus illum nesciunt ullam. Laudantium quis rerum accusantium, similique, labore cupiditate soluta recusandae ullam error, fugit quibusdam voluptas?
                            Harum maiores voluptatem officiis. Esse libero assumenda fugiat nemo ab. Molestiae fugit ut hic sunt ratione magni ab dolor voluptatem velit ea? Atque quis voluptate ab ipsum sapiente quia architecto.</p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}


{/* <section className='aboutSection d-flex align-items-center justify-content-center'>
    <div className="container d-flex">
        <div className="aboutLeft p-2 m-1">
            <h2>Sobre nós</h2>
            <p className='lh-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, veniam asperiores dolorem temporibus illum nesciunt ullam. Laudantium quis rerum accusantium, similique, labore cupiditate soluta recusandae ullam error, fugit quibusdam voluptas?
                Harum maiores voluptatem officiis. Esse libero assumenda fugiat nemo ab. Molestiae fugit ut hic sunt ratione magni ab dolor voluptatem velit ea? Atque quis voluptate ab ipsum sapiente quia architecto.</p>
            <div className='d-flex justify-content-center'>
                <img src={kidsImg2} alt="" />
            </div>
        </div>
        <div className="aboutRight p-2 m-1">
            <div className='d-flex justify-content-center'>
                <img src={kidsImg} alt="" />
            </div>
            <h2>Missão</h2>
            <p className='lh-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, veniam asperiores dolorem temporibus illum nesciunt ullam. Laudantium quis rerum accusantium, similique, labore cupiditate soluta recusandae ullam error, fugit quibusdam voluptas?
                Harum maiores voluptatem officiis. Esse libero assumenda fugiat nemo ab. Molestiae fugit ut hic sunt ratione magni ab dolor voluptatem velit ea? Atque quis voluptate ab ipsum sapiente quia architecto.</p>
        </div>
    </div>
</section> */}