import { Stack, Box } from '@mui/material'
import CategoryOrder from '../components/order/CategoryOrder'
import ListOrder from '../components/order/ListOrder'
import CartOrder from '../components/order/CartOrder'
import { useState, useEffect } from 'react'
import axios from 'axios'

const order = () => {
  const [listNameCategory, setListNameCategory] = useState('')
  const [dataProduct, setDataProduct] = useState('')

  useEffect(() => {
    const fetchExercisesData = async () => {
      const res = await axios ('https://sleepy-scrubland-61892.herokuapp.com/category/get-category') 
      const listProduct = await axios ('https://sleepy-scrubland-61892.herokuapp.com/product/get-product')
      setListNameCategory(res.data.data.listCategory)
      setDataProduct(listProduct.data.data.listProduct)
    }
    fetchExercisesData()
  })
  return (
    <Stack position='relative' backgroundColor='#fbfbfb' flexDirection='row' width='100vw'justifyContent='space-around'>
        <Box width='33.33%'>
          <CategoryOrder listNameCategory={listNameCategory}/>
        </Box>
        <Stack width='33.33%'>
          {listNameCategory ? listNameCategory.map(item => <ListOrder id={item._id} title={item.name}/>) : ''}
        </Stack>
        <Box width='33.33%'>
          <CartOrder/>
        </Box>
    </Stack>
  )
}

export default order