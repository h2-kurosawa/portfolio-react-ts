// /**
//  * オプショナルのStateを子にわたす
//  * →子でプロパティに参照できない。。
//  */

import React from 'react'

class App_axios extends React.Component {
	render() {
		return <div></div>
	}
}
export default App_axios

// import About from './components/About'
// // import MyData from './my_data_test.json'

// import axios from 'axios'
// /**
//  * 1. my_data.jsonを読み込む
//  * 2. componentにわたす
//  */
// type Props = { name?: string }

// class App extends React.Component<Props, MyData.State> {
// 	//mydataをもたせる
// 	constructor(props: Props) {
// 		super(props)
// 		this.state = {
// 			isLoading: true,
// 		}
// 	}
// 	componentDidMount() {
// 		axios.get('my_data_test.json').then(
// 			(results) => {
// 				console.log(results)
// 				const data: MyData.Response = JSON.parse(JSON.stringify(results.data))
// 				this.setState({
// 					isLoading: false,
// 					info: data.info,
// 				})
// 			},
// 			(err) => {
// 				//★読み込みエラー表示させる
// 				this.setState({ isLoading: true })
// 				console.log(this.state)
// 				console.log(err)
// 			}
// 		)
// 	}
// 	render() {
// 		const { isLoading, info } = this.state
// 		if (isLoading) {
// 			return <div>Error!</div>
// 		}
// 		return (
// 			<>
// 				<div>
// 					<span>Hi</span>
// 				</div>
// 				<About AboutData={info} />
// 				{/* <About AboutData={MyData.info} /> */}
// 			</>
// 		)
// 	}
// }

// export default App
