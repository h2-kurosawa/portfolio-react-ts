import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.scss'
// import AppTest from './AppTest'
// import App_axios from './App_axios'

ReactDom.render(
	<React.StrictMode>
		<App />
		{/* <AppTest /> */}
		{/* <App_axios /> */}
	</React.StrictMode>,
	document.getElementById('root')
)
