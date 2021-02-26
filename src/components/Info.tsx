import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { JokeType } from '../@types/joke'

import axios from 'axios'

type Props = { InfoData: MyData.Items.info }

const Info: React.FC<Props> = ({ InfoData }) => {
	const [show, setShow] = useState<boolean>(false)
	const [joke, setJoke] = useState<string>('')

	const onShowModal = (): void => setShow(true)
	const onCloseModal = (): void => setShow(false)

	useEffect(() => {
		axios
			.get('https://icanhazdadjoke.com/', {
				headers: {
					Accept: 'application/json',
				},
			})
			.then(
				(results) => {
					const data: JokeType = JSON.parse(JSON.stringify(results.data))
					console.log(data)
					setJoke(data.joke)
				},
				(err) => {
					console.log(err)
				}
			)
	}, [])

	return (
		<section id="info">
			<div className="container">
				<Grid container spacing={3} alignItems="center">
					<Grid item xs={12} md={6}>
						<img src={`${process.env.PUBLIC_URL}/img/icon_info.svg`} />
					</Grid>
					<Grid item xs={12} md={6}>
						<p className="title">{InfoData.name}</p>
						<br />
						<br />
						<button onClick={onShowModal}> GET a JOKE !</button>
						{show && (
							<div id="modal-overlay">
								<div id="modal-content">
									<p>Today&apos;s Dad Joke</p>
									<span>{joke}</span>
									<button onClick={onCloseModal}>Close</button>
								</div>
							</div>
						)}
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default Info
