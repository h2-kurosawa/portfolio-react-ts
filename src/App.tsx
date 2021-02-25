import React from 'react'
import Header from './components/Header'
import Info from './components/Info'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Footer from './components/Footer'

import MyData from './my_data.json'
import './App.scss'

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Info InfoData={MyData.info} />
				<About AboutData={MyData.about} />
				<Skills SkillsData={MyData.skills} />
				<Works WorksData={MyData.works} />
				<Footer FooterData={MyData.footer} />
			</>
		)
	}
}

export default App
