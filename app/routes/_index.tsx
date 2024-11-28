import { type MetaFunction } from '@remix-run/node'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega">Welcome to Epic News!</h1>
			<div className="w-full py-16">
				<HeroCallToAction image="https://www.helpguide.org/wp-content/uploads/2020/01/Social-Media-and-Mental-Health.webp">
					<div className="flex flex-col gap-8 px-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
					</div>
				</HeroCallToAction>
			</div>
		</main>
	)
}
