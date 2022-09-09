import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import {CheckoutPage} from "components/checkout-page"
import { useRouter } from 'next/router'
import {useRecoilValue} from "recoil"
import {buyingProductInformation} from "lib/atoms"

const Checkout: NextPage = () => {
  const router = useRouter()
  const {productId} = router.query
  const buyingProductInformationVal = useRecoilValue(buyingProductInformation)
      
  const productData = {
    productId: productId,
    amount: buyingProductInformationVal.amount,
    flavor: buyingProductInformationVal.flavor
  }
  
  return <Layout>
    <CheckoutPage productData={productData}/>
  </Layout>
}

export default Checkout
