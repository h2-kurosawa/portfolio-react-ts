import React from 'react'

type Props = { FooterData: MyData.Items.footer }

const Footer: React.FC<Props> = ({ FooterData }) => {
	return (
		<section id="footer">
			<p>
				<small>{FooterData.copy}</small>
			</p>
		</section>
	)
}

export default Footer
