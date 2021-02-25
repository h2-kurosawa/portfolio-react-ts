import React from 'react'
import Header from './components/Header'
import Info from './components/Info'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Footer from './components/Footer'

import MyData from './my_data.json'
import './App.scss'

/**
 * 1. my_data.jsonを読み込む
 * 2. componentにわたす
 */

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Info InfoData={MyData.info} />
				<About AboutData={MyData.about} />
				<Skills SkillsData={MyData.skills} />
				<Works WorksData={MyData.works} />
				<Footer />
			</>
		)
	}
}

export default App
