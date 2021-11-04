import React from 'react'
import './Home.css'
import Footer from './../../Layout/Footer'
import svg1 from './../../../assets/factory.svg'
import svg2 from './../../../assets/people.svg'
import svg3 from './../../../assets/engenier.svg'
import svg4 from './../../../assets/rueda.svg'

export default function Home() {
	return (
		<div>
			<div className='home-container d-flex align-items-center justify-content-center flex-column'>
				<span className='align-text-bottom'>
					<h1 className='text-center text-hero align-text-bottom'>
						SERVICIOS INTEGRALES <br /> PARA <br /> TRANSFORMADORES
					</h1>
				</span>
				<a href='#saber-mas' className='learn-more home-button button'>
					<span aria-hidden='true' className='circle'>
						<span className='icon arrow' />
					</span>
					<span className='button-text'>Saber más</span>
				</a>
			</div>
			<div className='scroll-container'>
				<img
					className='scroll-image'
					src='https://icon-library.com/images/scroll-down-icon-png/scroll-down-icon-png-29.jpg'
					alt='scroll icon'
				/>
			</div>
			<div className='container saber-mas'>
				<div className='row justify-content-center align-items-center '>
					<div className='col-6'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
					<div className='col-6'>
						<img src={svg1} alt='lorem' />
					</div>
				</div>
				<div className='row justify-content-center align-items-center'>
					<div className='col-6'>
						<img src={svg2} alt='lorem' />
					</div>
					<div className='col-6'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
				</div>
				<div className='row justify-content-center align-items-center '>
					<div className='col-6'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
					<div className='col-6'>
						<img src={svg3} alt='lorem' />
					</div>
				</div>
				<div className='row justify-content-center align-items-center '>
					<div className='col-6'>
						<img src={svg4} alt='lorem' />
					</div>
					<div className='col-6'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
