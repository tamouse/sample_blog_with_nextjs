import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default ({children, title = 'Default Title'}) => (
    <Wrapper>
        <Head>
            <title>{ title }</title>
        </Head>
        <header>
            <Nav/>
        </header>
        <main>
            { children }
        </main>
        <Footer>
            Footer
        </Footer>
    </Wrapper>
)
