import { type MetaFunction } from '@remix-run/node'
import { json, Link, useLoaderData } from '@remix-run/react'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import { Button } from '~/components/atoms/Button.tsx'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import HeroCallToAction from '~/components/organisms/Hero/HeroCallToAction.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: { isPublished: true },
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()

	return (
		<main>
			<HeroCallToAction
				image={heroImage}
				imageRight={true}
				hasBackgroundColour={true}
			>
				<div className="flex h-full flex-1 flex-col justify-between p-16">
					<div className="flex flex-col gap-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
					</div>
					<Button asChild variant="default" size="lg">
						<Link to="/signup">Sign up</Link>
					</Button>
				</div>
			</HeroCallToAction>

			<div className="container py-16"></div>
			<div class="w-400 flex h-100 flex-col justify-between bg-blue-2000 p-4">
				<h3 class="text-2xl font-bold text-black-400">Top news</h3>
				<p class="text-black-400">
					example text, example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text, example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text, example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text, example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text, example text,example
					text,example text,example text,example text,example text,example text,{' '}
				</p>
				<p class="text-black-400 text-xs">Category</p>
			</div>

			<div className="container py-16">
				<h2 className="mb-8 text-h2 font-bold">Latest news</h2>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{allArticles.length > 0 ? (
						allArticles.map(article => (
							<ArticleCard
								articleId={article.id}
								key={article.id}
								title={article.title}
								category={article.category?.name}
								imageId={article.images[0]?.id}
							/>
						))
					) : (
						<p>No articles found</p>
					)}
				</div>
			</div>


      <div className="container py-16"></div>
			<div class="w-00 flex h-100 flex-col justify-between bg-blue-2000 p-4">
				<h3 class="text-2xl font-bold text-black-400">News headline</h3>
				<p class="text-black-400">
					example text, example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text, example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text, example text,example text,example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text, example text,example
					text,example text,example text,example text,example text,example
					text,example text,example text,example text, example text,example
					text,example text,example text,example text,example text,example 
          text,example text, example text,example text,example text,example
          text,example text,example text,example text,example text,example
          text,example text,example text,example text,example text,example
          text,example text,example text,example text,example text,example
          text,example text, example text,example text,example text,example
          text,example text,example text,example text,example text,example
          text,example text,example text,example text,example text,example
          text,example text, example text,example text,example text,example 
          text,example text,example text,example text,example text,example text,example text,example text,example text, example text,example text,example text,example text,example text,example text,example text,example text,example text,example text, example text,example text,example text,example text,example text,example text,example text,
          {' '}
				</p>
				<p class="text-black-400 text-xs"> Category</p>
			</div>
		</main>



	)
}
