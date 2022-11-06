import { Stack, Box } from '@mui/material'
import CategoryOrder from '../components/order/CategoryOrder'
import ListOrder from '../components/order/ListOrder'
import CartOrder from '../components/order/CartOrder'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Order = () => {
  const [listNameCategory, setListNameCategory] = useState('')

  useEffect(() => {
    const fetchExercisesData = async () => {
      const res = await axios ('https://sleepy-scrubland-61892.herokuapp.com/category/get-category') 
      setListNameCategory(res.data.data.listCategory)
    }
    fetchExercisesData()
  })
  return (
    <Stack position='relative' backgroundColor='#fbfbfb' flexDirection='row' width='100vw'justifyContent='space-around'>
        <Box width='33.33%'>
          <CategoryOrder listNameCategory={listNameCategory}/>
        </Box>
        <Stack width='33.33%'>
          {listNameCategory ? listNameCategory.map(item => <ListOrder key={item._id} id={item._id} title={item.name}/>) : ''}
        </Stack>
        <Box width='33.33%'>
          <CartOrder/>
        </Box>
    </Stack>
  )
}

export default Order