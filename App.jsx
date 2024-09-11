import { lazy, Suspense } from 'react'
import { Router } from './src/components/Router.jsx'
import { Route } from './src/components/Route.jsx'

const HomePage = lazy(() => import('./src/pages/Home.jsx'))
const AboutPage = lazy(() => import('./src/pages/About.jsx'))
const SearchPage = lazy(() => import('./src/pages/SearchPage.jsx'))
const Page404 = lazy(() => import('./src/pages/404.jsx'))

export const App = () => {
    return (
        <main>
            <Suspense fallback={ <div> Loading... </div> }>
                <Router
                    defaultComponent={Page404}    
                    >
                    <Route path={'/'} Component={HomePage} />
                    <Route path={'/about'} Component={AboutPage} />
                    <Route path={'/:lang/about'} Component={AboutPage} />
                    <Route path={'/search/:query'} Component={SearchPage} />
                </Router>
            </Suspense>
        </main>
    )
}