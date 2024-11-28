import { type LinksFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import Document from '~/components/shared-layout/Document'
import ThemeSwitch from '~/components/shared-layout/ThemeSwitch'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import { loader } from './__root.server'
import useTheme from './hooks/useTheme.tsx'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import FooterMenuRight from './components/organisms/Footer/FooterMenuRight'
import HeroCallToAction from './components/organisms/Hero/HeroCallToAction.tsx'

export const links: LinksFunction = () => {
  return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
  const data = useLoaderData<typeof loader>()
  const nonce = useNonce()
  const theme = useTheme()

  return (
    <Document nonce={nonce} theme={theme}>
      <div className="flex h-screen flex-col justify-between">
        <HeaderWithSearch />

        <div className="flex-1">
          {/* <main className="grid h-full place-items-center">
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
          </main> */}
          <Outlet />
        </div>

        <div className="container flex justify-between pb-5">
          <ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
        </div>

        <FooterMenuRight />
      </div>
    </Document>
  )
}