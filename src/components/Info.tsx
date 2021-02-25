import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
// import { Transition } from 'react-transition-group'

type Props = { InfoData: MyData.Items.info }
// type Titles = { title: boolean }

const Info: React.FC<Props> = (props) => {
	const { InfoData } = props

	// const [title, setTitle] = useState(false)

	// const ChangeTitle = ({ title: boolean }: Titles) => {
	// 	return (
	// 		<Transition in={title} timeout={550}>
	// 			{InfoData.titles.map((text, index) => {
	// 				return <p key={index}>{text}</p>
	// 			})}
	// 		</Transition>
	// 	)
	// }

	return (
		<section id="info">
			<div className="container">
				<Grid container spacing={3} alignItems="center">
					<Grid item xs={12} md={6}>
						<img src={`${process.env.PUBLIC_URL}/img/icon_info.svg`} />
					</Grid>
					<Grid item xs={12} md={6}>
						<p className="title">{InfoData.name}</p>
						{/* <ChangeTitle title={title} /> */}
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default Info
