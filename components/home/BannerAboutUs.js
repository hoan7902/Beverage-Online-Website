import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Banner from '../../assets/image/banner_about_us.png'
import Homeline from '../../assets/image/home_line.webp'

const BannerAboutUs = () => {
  return (
    <Stack m='40px 180px' flexDirection='row' justifyContent='flex-end' position='relative'>
        <Image style={{borderRadius: '7px'}} src={Banner} alt='banner'/>
        <Stack top='240px' right='50px' position='absolute' zIndex='2' justifyContent='center' alignItems='center'>
            <Typography p='10px' textTransform='capitalize' color='#d3b673' variant='h3' fontSize='25px' fontWeight={700}>
                Story
            </Typography>
            <Typography p='10px' textTransform='uppercase' letterSpacing={1.8} fontWeight='700' fontSize='36px' color='#00000'>
                Về chúng tôi
            </Typography>
            <Image src={Homeline} alt='home-line'/>
            <Typography mt='15px' textAlign='center' fontSize='15px' fontStyle='light'>Bên cạnh niềm tự hào về những ly trà sữa ngon – sạch – tươi,<br/> chúng tôi luôn tự tin mang đến khách hàng những trải nghiệm <br/> tốt nhất về dịch vụ và không gian.</Typography>
    </Stack>
    </Stack>
  )
}

export default BannerAboutUs