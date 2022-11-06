import { Stack, Box, Typography } from '@mui/material'
import contactStyles from '../styles/Contact.module.css'
import motor from '../assets/image/motor-scooter.png'
import trash from '../assets/image/delete-dismiss-24-filled.png'
import Image from 'next/image'
import Footer from '../components/home/Footer'
import Advertisement from '../components/home/Advertisement'
import homeStyles from '../styles/Home.module.css'

const Checkout = () => {
  return (
    <Stack 
        className={contactStyles.backgroundImage}
        position='relative'
        justifyContent='center'
        alignItems='center'
    >
        {/* Địa chỉ */}
        <Stack width='700px' m='40px 0' p='20px' backgroundColor='#fff' borderRadius='8px'>
            <Stack flexDirection='row'>
                <Image src={motor} alt='motor'/>
                <Stack justifyContent='center' ml='25px'>
                    <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
                        <Typography textTransform='uppercase' variant='h2' fontSize='20px' fontWeight={700}>chuyển đến</Typography>
                        <Box className={homeStyles.mainButton} p='5px 25px' backgroundColor='#d3b673' borderRadius='6px' style={{cursor: 'pointer'}}>
                            <Typography textAlign='center' className={homeStyles.textButton} textTransform='uppercase' color='#fff' fontSize='13px' fontWeight={500}>Đổi</Typography>
                        </Box>
                    </Stack>
                    <Typography mt='20px' variant='h3' fontSize='15px' fontWeight={500}>210/14 Hoàng Diệu 2, phường Linh Chiểu, quận Thủ Đức, thành phố Hồ Chí Minh</Typography>
                </Stack>
            </Stack>
        </Stack>
        {/* Đơn hàng */}
        <Stack width='700px' mb='40px' p='20px' backgroundColor='#fff' borderRadius='8px'>
            <Typography textTransform='uppercase' fontSize='20px' fontWeight={600}>Đơn hàng của bạn</Typography>
            <Stack m='10px 0'>
                <Stack mb='5px' flexDirection='row' justifyContent='space-between'>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>1x</Typography>
                        <Typography>Trà Sữa Matcha</Typography>
                    </Stack>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>69.000đ</Typography>
                        <Image src={trash} alt='trash' width='20px' height='20px'/>
                    </Stack>
                </Stack>
                <Stack mb='5px' flexDirection='row' justifyContent='space-between'>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>1x</Typography>
                        <Typography>Trà Sữa Matcha</Typography>
                    </Stack>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>69.000đ</Typography>
                        <Image src={trash} alt='trash' width='20px' height='20px'/>
                    </Stack>
                </Stack>
            </Stack>
            <Typography color='#d3b673' fontWeight={700} textShadow='0 0 3px #FF0000'>+ Thêm món</Typography>
        </Stack>
        {/* Chốt đơn */}
        <Stack width='700px' mb='40px' p='20px' backgroundColor='#fff' borderRadius='8px'>
            <Typography textTransform='uppercase' fontSize='20px' fontWeight={600}>Đơn hàng của bạn</Typography>
            <Stack m='10px 0'>
                <Stack mb='5px' flexDirection='row' justifyContent='space-between'>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>Tổng đơn</Typography>
                    </Stack>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>138.000đ</Typography>
                    </Stack>
                </Stack>
                <Stack mb='5px' flexDirection='row' justifyContent='space-between'>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>Phí giao hàng</Typography>
                    </Stack>
                    <Stack flexDirection='row'>
                        <Typography mr='10px'>69.000đ</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box className={homeStyles.mainButton} p='5px 25px' backgroundColor='#d3b673' borderRadius='6px' style={{cursor: 'pointer'}}>
                <Typography textAlign='center' className={homeStyles.textButton} textTransform='uppercase' color='#fff' fontSize='13px' fontWeight={500}>Đặt hàng</Typography>
            </Box>
        </Stack>
        <Advertisement/>
        <Footer/>
    </Stack>
  )
}

export default Checkout