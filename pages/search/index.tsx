import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import { SearchPage } from 'components/search-page'
import { useRouter } from "next/router"

const Search: NextPage = () => {    
  return <Layout>
    <SearchPage />
  </Layout>
}

export default Search
