import React from 'react'
import './Home.css'
import '../../parallax/parallax.css'
import Footer from './../../Layout/Footer'
import svg1 from './../../../assets/factory.svg'
import svg2 from './../../../assets/people.svg'
import svg3 from './../../../assets/engenier.svg'
import svg4 from './../../../assets/rueda.svg'

export default function Home() {
	;(function() {
		

		const applyScrollEffects = () => {
			// Navbar morph
			// window.scrollY > 100
			// 	? document.querySelector('.navigation').classList.add('sticky')
			// 	: document.querySelector('.navigation').classList.remove('sticky')

			// Parallax transition effects
			
			// Reveal effects
			document.querySelectorAll('.reveal').forEach(elm => {
				isInViewport(elm) ? elm.classList.add('visible') : elm.classList.remove('visible')
			})

			// Dynamic background generator
			document.querySelectorAll('.change-background').forEach(elm => {
				if (isInViewport(elm)) {
					document.querySelector('.fake-bg').style.backgroundColor = elm.dataset.color
					document.querySelector('.fake-bg').classList.add('on')
				} else {
					document.querySelector('.fake-bg').classList.remove('on')
				}
			})
		}

		document.addEventListener('scroll', applyScrollEffects)

		// Scroll navigation links
		const scrollButtons = document.querySelectorAll('.scrollto')
		scrollButtons.forEach(elm => {
			elm.onclick = e => {
				e.preventDefault()
				const href = elm.getAttribute('href')
				document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
			}
		})

		// Isometric mobile layers mouse inertia
		// document.querySelector('.contact').onmousemove = e => {
		// 	mobilescreens[0].style.transform = `translate(${e.x * 0.03}px, ${-e.y * 0.03}px)`
		// 	mobilescreens[1].style.transform = `translate(${e.x * 0.06}px, ${-e.y * 0.06}px)`
		// 	mobilescreens[2].style.transform = `translate(${e.x * 0.09}px, ${-e.y * 0.09}px)`
		// 	mobilescreens[3].style.transform = `translate(${e.x * 0.12}px, ${-e.y * 0.12}px)`
		// }

		// Object viewport detection
		const isInViewport = el => {
			const rect = el.getBoundingClientRect()
			const vertInView = rect.top <= window.innerHeight && rect.top + rect.height >= 0
			const horInView = rect.left <= window.innerWidth && rect.left + rect.width >= 0
			return vertInView && horInView
		}
	})()

	return (
		<div className='contanier-fluid'>
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
			<section id='saber-mas' className='container saber-mas'>
				<div className='row justify-content-center align-items-center '>
					<div className='col-6 reveal fadeInLeft' dataDelay='300ms'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
					<div className='col-6 reveal fadeInRight text-center' dataDelay='300ms'>
						<img src={svg1} alt='lorem' />
					</div>
				</div>
				<div className='row justify-content-center align-items-center'>
					<div className='col-6 reveal fadeInLeft text-center' dataDelay='300ms'>
						<img src={svg2} alt='lorem' />
					</div>
					<div className='col-6 reveal fadeInRight' dataDelay='300ms'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
				</div>
				<div className='row justify-content-center align-items-center '>
					<div className='col-6 reveal fadeInLeft' dataDelay='300ms'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
					<div className='col-6 reveal fadeInRight text-center' dataDelay='300ms'>
						<img src={svg3} alt='lorem' />
					</div>
				</div>
				<div className='row justify-content-center align-items-center '>
					<div className='col-6 reveal fadeInLeft text-center' dataDelay='300ms'>
						<img src={svg4} alt='lorem' />
					</div>
					<div className='col-6 fadeInRight' dataDelay='300ms'>
						<h2>Lorem ipsum dolor sit.</h2>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque facere,
							minus quibusdam sint ut consectetur quidem consequatur fugiat optio itaque unde totam vero
							et illo alias corrupti harum sunt.
						</h4>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}
