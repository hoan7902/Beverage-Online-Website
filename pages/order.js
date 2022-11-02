import { Stack, Box } from '@mui/material'
import CategoryOrder from '../components/order/CategoryOrder'
import ListOrder from '../components/order/ListOrder'
import CartOrder from '../components/order/CartOrder'

const order = () => {
  return (
    <Stack position='relative' backgroundColor='#fbfbfb' flexDirection='row' width='100vw'justifyContent='space-around'>
        <Box width='33.33%'>
          <CategoryOrder/>
        </Box>
        <Stack width='33.44%'>
          <ListOrder id='order1' title='Món nổi bật'/>
          <ListOrder id='order2' title='Trà Sữa'/>
          <ListOrder id='order3' title='Fresh Fruit Tea'/>
          <ListOrder id='order4' title='Macchiato Cream Cheese'/>
          <ListOrder id='order5' title='Sữa chua dẻo'/>
        </Stack>
        <Box width='33.33%'>
          <CartOrder/>
        </Box>
    </Stack>
  )
}

export default order