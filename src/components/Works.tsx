import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'

type Props = { WorksData: MyData.Items.works }

const Works: React.FC<Props> = ({ WorksData }) => {
	return (
		<section id="works">
			<div className="container">
				<Grid container spacing={3} alignItems="flex-start">
					<Grid item xs={12} md={6} container alignItems="center">
						<Grid item xs={12} md={7}>
							<img src={`${process.env.PUBLIC_URL}/img/icon_works.svg`} />
						</Grid>
						<Grid item xs={12} md={5}>
							<div className="title">{WorksData.section}</div>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6} container spacing={2} justify="space-around">
						{WorksData.app.map((work, index) => {
							return (
								<Grid item xs={12} lg={6} key={index}>
									<Card className="card-box">
										<img src={`${process.env.PUBLIC_URL}/img/${work.icon}`} height="180" />
										<CardContent>
											<p>
												<a href={work.source}>
													{work.name}&nbsp;&nbsp;
													<span className="iconify icon:cib:github icon-inline:false"></span>
												</a>
											</p>
											<span className="card-description">{work.description}</span>
											{work.technologies.map((tech, ind) => {
												return (
													<Chip key={ind} label={tech} size="small" className="card-chip" />
												)
											})}
										</CardContent>
									</Card>
								</Grid>
							)
						})}
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default Works
