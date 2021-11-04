import Footer from './Components/Layout/Footer'
import Navigator from './Components/Layout/Navigator'
import Routes from './Components/Routes/RoutesComponent'
import './app.css'

function App() {
	return (
		<div className='App'>
			<Navigator />
			<Routes />
			{/* <Footer/> */}
		</div>
	)
}

export default App
