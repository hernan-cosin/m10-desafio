import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import {HomePage} from "components/home-page"


const Home: NextPage = () => {
  return <Layout>
    <HomePage/>

  </Layout>
}

export default Home
