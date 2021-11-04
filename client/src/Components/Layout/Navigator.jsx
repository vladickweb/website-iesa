import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigator() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<Link to='/' className='navbar-brand' href='#'>
						IESA
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link to='/productos' className='nav-link active' aria-current='page' href='#'>
									Productos
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/servicios' className='nav-link' href='#'>
									Servicios
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/quienes-somos' className='nav-link' href='#'>
									¿Quienes somos?
								</Link>
							</li>
                            <li className='nav-item'>
								<Link to='/contacto' className='nav-link' href='#'>
									Contacto
								</Link>
							</li>
						</ul>
				
					</div>
				</div>
			</nav>
		</div>
	)
}
