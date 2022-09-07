import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import {ItemPage} from "components/item-page"
import { useRouter } from 'next/router'

const Item: NextPage = ({itemInfo}: any) => {
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

  const res = await fetch("https://dwf-m9-desafio-backend-ecommerce.vercel.app/api/products/" + productId)
  const productInformation =  await res.json()

return {
  // Passed to the page component as props
  props: { itemInfo: productInformation },
  revalidate: 10,
}
}