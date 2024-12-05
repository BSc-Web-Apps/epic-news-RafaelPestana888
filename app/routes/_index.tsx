import { type MetaFunction } from '@remix-run/node'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega">Your Journey Begins!</h1>
			<p className="text-base text-gray-600 md:text-lg lg:text-xl">
				Welcome to Epic News, where the latest developments in tech are found.
			</p>
		</main>
	)
}
