import React from 'react'
import Grid from '@material-ui/core/Grid'

type Props = { SkillsData: MyData.Items.skills }

const Skills: React.FC<Props> = ({ SkillsData }) => {
	return (
		<section id="skills">
			<div className="container">
				<Grid container spacing={3} alignItems="flex-start">
					<Grid item xs={12} md={6} container alignItems="center">
						<Grid item xs={12} md={7}>
							<img src={`${process.env.PUBLIC_URL}/img/icon_skills.svg`} />
						</Grid>
						<Grid item xs={12} md={5}>
							<div className="title">{SkillsData.section}</div>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6} container justify="flex-start" alignItems="center" spacing={2}>
						{SkillsData.skill.map((skill, index) => {
							return (
								<Grid item xs={4} md={3} key={index}>
									<div className="icon-box">
										<div className="iconify" data-icon={skill.icon}></div>
										<br />
										<span>
											<b>{skill.name}</b>
										</span>
									</div>
								</Grid>
							)
						})}
						<ul className="skill-description">
							{SkillsData.description.map((desc, index) => {
								return <li key={index}>{desc}</li>
							})}
						</ul>
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default Skills
