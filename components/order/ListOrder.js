import { Typography, Stack } from '@mui/material'
import ItemOrder from './ItemOrder'
import { useRef, useState } from 'react'
import orderStyles from '../../styles/Order.module.css'
import Image from 'next/image'
import Down from '../../assets/image/chevron-down-solid.svg'
import TraSua from '../../assets/image/O-Long-xoai-kem-coffee.jpg'
import Matcha from '../../assets/image/Tra-Sua-Matcha-1-copy.jpg'
import Tradao from '../../assets/image/Tra-dao-buoi-hong-tran-chau-baby.jpg'
import Traman from '../../assets/image/tra-man-hat-sen.png'
import Traxoai from '../../assets/image/trà-xoài-bưởi-hồng.png'
import Tiger from '../../assets/image/tiger-sugar.jpg'
import TraSuaHanhPhuc from '../../assets/image/Tra-Sua-Hanh-Phuc-1-copy.jpg'
import Ngucoc from '../../assets/image/Hình-ảnh-sp-website_1000x1000_choco-ngũ-cốc-kem-cafe.png'
import Olongkem from '../../assets/image/oolong-kem-pho-mai_75e8d3f11fb3402196416da77c8ff33a_grande.png'

const fakeApi = [
    {
        id: '1',
        price: '69.000 VND',
        name: 'Trà Sữa Truyền Thống',
        image: TraSua,
    },
    {
        id: '2',
        price: '69.000 VND',
        name: 'Trà Sữa Matcha',
        image: Matcha,
    },
    {
        id: '3',
        price: '69.000 VND',
        name: 'Trà Đào',
        image: Tradao,
    },
    {
        id: '4',
        price: '69.000 VND',
        name: 'Trà Mận',
        image: Traman,
    },
    {
        id: '5',
        price: '69.000 VND',
        name: 'Trà Xoài Bưởi Hồng',
        image: Traxoai,
    },
    {
        id: '6',
        price: '69.000 VND',
        name: 'Tiger Sugar',
        image: Tiger,
    },
    {
        id: '7',
        price: '69.000 VND',
        name: 'Trà Sữa Hạnh Phúc',
        image: TraSuaHanhPhuc,
    },
    {
        id: '8',
        price: '69.000 VND',
        name: 'Ngũ Cốc Kem',
        image: Ngucoc,
    },
    {
        id: '9',
        price: '69.000 VND',
        name: 'Ô Long Kem Phô Mai',
        image: Olongkem,
    },
    
]

const ListOrder = ({ title, id }) => {
  const [orderCategory, setOrderCategory] = useState(true)
  const element = useRef()
  const handleClick = () => {
    setOrderCategory(!orderCategory)
  }
  return (
    <Stack
        flexDirection='column'
        width='100%'
        justifyContent='center'
        mt='10px'
        id={id}
    >      
        <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Typography m='20px 0px' fontWeight={600} variant='h1' fontSize='16px'>{title}</Typography>
            <Typography onClick={handleClick} style={{cursor: 'pointer'}} m='20px 0px' fontWeight={600} variant='h2' fontSize='16px'>
                <Image className={orderStyles.iconDownListOrder} height={15} width={15} src={Down} alt='down'/>
            </Typography>
        </Stack>
        <Stack
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='space-between'
            ref={element}
            className={orderCategory ? orderStyles.wrapperListOrder : orderStyles.wrapperListOrderHidden}
        >   
            {fakeApi.map(item => (<ItemOrder key={item.id} item={item} title=''/>))}
        </Stack>
    </Stack>
  )
}

export default ListOrder