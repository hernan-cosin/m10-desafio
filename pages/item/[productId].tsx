import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import {ItemPage} from "components/item-page"
import { useRouter } from 'next/router'

const Item: NextPage = ({itemInfo}: any) => {
  // console.log("itemInfo", itemInfo)

  return <Layout>
    <ItemPage itemInfo={itemInfo}/>
  </Layout>
}

export default Item

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: any) {
  const { productId } = context.params

  const productsIds = await fetch("http://localhost:3001/api/products/" + productId)
  const productsIdsRes =  await productsIds.json()

return {
  // Passed to the page component as props
  props: { itemInfo: productsIdsRes },
  revalidate: 10,
}
}