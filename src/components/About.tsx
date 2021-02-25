import React from 'react'
import Grid from '@material-ui/core/Grid'

type Props = { AboutData: MyData.Items.about }

const About: React.FC<Props> = ({ AboutData }) => {
	return (
		<section id="about">
			<div className="container">
				<Grid container spacing={3} alignItems="center">
					<Grid item xs={12} md={6} container alignItems="center">
						<Grid item xs={12} md={7}>
							<img src={`${process.env.PUBLIC_URL}/img/icon_about.svg`} />
						</Grid>
						<Grid item xs={12} md={5}>
							<div className="title">{AboutData.section}</div>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6} className="about-description">
						<p>{AboutData.hello}</p>
						<span>{AboutData.description_en}</span>
						<span>{AboutData.description_ja}</span>
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default About
