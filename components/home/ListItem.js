import { Box, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import homeStyles from '../../styles/Home.module.css'
import Item from './Item'
import Homeline from '../../assets/image/home_line.webp'

const fakeApi = [
    {
        id: '1',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '2',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '3',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '4',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '5',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '6',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '7',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '8',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    {
        id: '9',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống'
    },
    
]

const ListItem = ({ title, description }) => {
  return (
    <Stack
        flexDirection='column'
        width='100%'
        justifyContent='center'
        alignItems='center'
        mt='60px'
    >
        <Typography p='10px' textTransform='uppercase' color='#d3b673' variant='h3' fontSize='25px' fontWeight={700}>{title}</Typography>
        <Typography p='10px' textTransform='uppercase' letterSpacing={1.8} fontWeight='700' fontSize='36px' color='#00000'>{description}</Typography>
        <Image src={Homeline} alt='home-line'/>
        <Stack
            width='70%'
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='center'
            m='30px 0'
        >   
            {fakeApi.map(item => (<Item key={item.id} item={item} title=''/>))}
            <Box className={homeStyles.mainButton} mt='20px' p='10px 20px' backgroundColor='#d3b673' borderRadius='6px' style={{cursor: 'pointer'}}>
                <Typography className={homeStyles.textButton} textTransform='uppercase' color='#fff'>Xem tất cả</Typography>
            </Box>
        </Stack>
    </Stack>
  )
}

export default ListItem