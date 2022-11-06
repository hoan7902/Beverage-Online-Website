import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-scroll'

const Category = ({ listNameCategory }) => {
  return (
    <>
      <Stack position='fixed' width='300px' top='0' left='0' p='20px' justifyContent='center' backgroundColor='#fff' m='10px 100px' borderRadius='5px' height='fit-content' boxShadow='0 2px 7px 0 rgb(0 0 0 / 5%)'>
        <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
            <Typography ml='10px' fontSize='14px' variant='h2' fontWeight={700}>DANH MỤC</Typography>
        </Stack>
        {listNameCategory ? listNameCategory.map(item => (
          <Link id={item.id} to={item._id} spy={true} smooth={true}>
          <Stack sx={{cursor: 'pointer'}} p='10px' flexDirection='row' justifyContent='space-between' alignItems='center' borderBottom='1px solid #f1f1f1'>
            <Typography fontSize='14px' variant='h3' color='#282828'>{item.name}</Typography>
            <Typography fontSize='14px' variant='h3' color='#282828'>22</Typography>
          </Stack>
        </Link>
        )) : ''}
      </Stack>
    </>
  )
}

export default Category