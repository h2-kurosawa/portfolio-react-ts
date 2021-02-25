import React from 'react'
import axios from 'axios'

/**
 * 1. my_data.jsonを読み込む
 * 2. componentにわたす
 */
// interface Props {
// 	name?: string
// }
// type MyDataState = {
// 	isLoading: boolean
// 	info?: {
// 		name: string
// 		titles: string
// 		social: []
// 		image: string
// 		description: string
// 		experience: []
// 		section_name: {
// 			[key: string]: string
// 		}
// 	}
// }

class AppTest extends React.Component {
	//mydataをもたせる
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
		}
		this.loadMyData = this.loadMyData.bind(this)
	}
	showMyData(Data) {
		if (Data) {
			const dataList = Object.keys(Data).map((item) => {
				return <li key={item}>{item}</li>
			})
			return <ul>{dataList}</ul>
		}
	}
	loadMyData() {
		axios.get('my_data_test.json').then((results) => {
			const data = JSON.parse(JSON.stringify(results.data))
			console.log(data)
			this.setState({
				info: data.info,
				isLoading: false,
			})
			console.log(this.state)
		})
	}
	render() {
		return (
			<>
				<div>
					<span>Hi</span>
					<button onClick={this.loadMyData}>loadMyData</button>
					{console.log(this.state.info)}
					{this.showMyData(this.state.info)}
				</div>
			</>
		)
	}
}

export default AppTest
