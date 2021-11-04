import React from 'react'
import './layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
		<footer className=' text-center footer'>

			<div className='container p-4'>
				<section className='mb-4'>
					<a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
						<FontAwesomeIcon icon={faFacebook} />
					</a>

					<a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>

					<a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
						<i className='fab fa-google' />
						<FontAwesomeIcon icon={faGoogle} />
					</a>

					<a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
						<i className='fab fa-instagram' />
						<FontAwesomeIcon icon={faInstagram} />
					</a>

					<a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
						<i className='fab fa-linkedin-in' />
						<FontAwesomeIcon icon={faLinkedin} />
					</a>

					<a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
						<i className='fab fa-github' />
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</section>
				

				

			
				<section className='mb-4'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
						voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta,
						aliquam sequi voluptate quas.
					</p>
				</section>
			
				<section className=''>
					{/* <!--Grid row--> */}
					<div className='row'>
						{/* <!--Grid column--> */}
						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Links</h5>

							<ul className='list-unstyled mb-0'>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 1
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 2
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 3
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 4
									</a>
								</li>
							</ul>
						</div>
					
						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Links</h5>

							<ul className='list-unstyled mb-0'>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 1
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 2
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 3
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 4
									</a>
								</li>
							</ul>
						</div>
					
						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Links</h5>

							<ul className='list-unstyled mb-0'>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 1
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 2
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 3
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 4
									</a>
								</li>
							</ul>
						</div>
					
						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Links</h5>

							<ul className='list-unstyled mb-0'>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 1
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 2
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 3
									</a>
								</li>
								<li>
									<a href='#!' className='text-dark text-decoration-none'>
										Link 4
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>

			{/* <!-- Copyright --> */}
			<div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				© 2021 Copyright: IESA
				{/* <a className='text-dark text-decoration-none' href='https://mdbootstrap.com/'> */}
				{/* </a> */}
			</div>
		</footer>
	)
}
