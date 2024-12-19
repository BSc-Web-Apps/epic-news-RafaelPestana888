import { Link, NavLink } from '@remix-run/react'
import SocialMediaButtons from '#app/components/molecules/SocialMediaButtons'
import logo from '~/assets/png/logo.png'
import { type FooterProps } from './FooterBasic'

const FooterLogoCentre = ({
	companyName = 'CHANGE THIS TO YOUR COMPANY NAME!',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="dark:bg-dark-secondary bg-secondary lg:py-16">
			<div className="container">
				<div className="dark:border-dark-muted-foreground/75 flex flex-col items-center justify-around border-b border-muted-foreground/75 lg:flex-row lg:pb-8">
					<div
						className="dark:text-dark-secondary-foreground flex flex-col items-start gap-6
					py-8 font-bold text-secondary-foreground lg:flex-row"
					>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
					</div>

					<Link to="/" className="flex w-20 items-center justify-center">
						<img src={logo} alt="Epic News Logo" className="w-16" />
					</Link>

					<div
						className="dark:text-dark-secondary-foreground flex flex-col items-start gap-6
					py-8 font-bold text-secondary-foreground lg:flex-row"
					>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center py-8">
					<div className="block">
						<div className="mb-8 flex justify-center">
							<SocialMediaButtons />
						</div>
						<div className="dark:text-dark-secondary-foreground/75 text-center text-secondary-foreground/75">
							{companyName} | {new Date().getFullYear()}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterLogoCentre
