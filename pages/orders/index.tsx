import { Layout } from 'components/layout'
import type { NextPage } from 'next'
import { OrdersPage} from "components/orders-page"

const Orders: NextPage = () => {
  return <Layout>
    <OrdersPage/>
  </Layout>
}

export default Orders
