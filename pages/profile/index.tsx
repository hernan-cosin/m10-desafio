import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import {ProfilePage} from "components/profile-page"


const Profile: NextPage = () => {
  return <Layout>
    <ProfilePage/>

  </Layout>
}

export default Profile
