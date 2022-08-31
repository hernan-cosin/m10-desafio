import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import {SigninPage} from "components/signin-page"


const Signin: NextPage = () => {
  return <Layout>
    <SigninPage/>

  </Layout>
}

export default Signin
