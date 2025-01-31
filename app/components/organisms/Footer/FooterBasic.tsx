import logo from '~/assets/png/logo.png'

export interface FooterProps {
	companyName?: string
	altText?: string
}

const FooterBasic = ({
	companyName = 'Epic News!',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="bg-secondary py-16 dark:bg-dark-secondary">
			<div className="container flex flex-col items-center justify-between gap-y-8 lg:flex-row">
				<div className="w-20">
				<img src={logo} alt="Epic News Logo" className="w-16" />
				</div>

				<div className="text-xs text-muted-foreground text-opacity-50 dark:text-dark-muted-foreground">
					&copy; {companyName} | {new Date().getFullYear()}
				</div>
			</div>
		</footer>
	)
}

export default FooterBasic
