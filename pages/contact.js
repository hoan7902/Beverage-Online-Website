import { Stack, Box, Typography } from '@mui/material'
import contactStyles from '../styles/Contact.module.css'
import qrImage from '../assets/image/QRCode.png'
import Image from 'next/image'
import Footer from '../components/home/Footer'
import Advertisement from '../components/home/Advertisement'
import homeStyles from '../styles/Home.module.css'

const Contact = () => {
  return (
    <Stack 
        className={contactStyles.backgroundImage}
        position='relative'
        justifyContent='center'
        alignItems='center'
    >
        <Stack m='40px 0' p='20px' backgroundColor='#fff' borderRadius='8px'>
            <Stack flexDirection='row' justifyContent='space-between'>
                <Image src={qrImage} alt='qr'/>
                <Stack ml='10px' justifyContent='space-between'>
                    <Typography mt='25px' textTransform='uppercase' variant='h2' fontSize='20px' fontWeight={600}>Công ty cổ phần giải khát Jucify</Typography>
                    <Box>
                        <Typography mt='20px'>GPDKKD số 0314525625 do Sở KHDT TP.HCM cấp ngày 19/07/2017</Typography>
                        <Typography mt='20px'>7/3 Hồ Biểu Chánh, Phường 12, Quận Phú Nhuận</Typography>
                        <Typography mt='20px'>www.flyfood.vn - www.tiectrongoi.vn</Typography>
                        <Typography mt='20px'>flyfoodhcm@gmail.com</Typography>
                        <Typography mt='20px'>02839911911</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Typography fontWeight={900} variant='h1' fontSize='23px' letterSpacing='1px' mt='15px' textTransform='uppercase'>Liên hệ</Typography>
            <Stack m='10px 0'>
                <Typography>Họ và tên</Typography>
                <input type='text' placeholder='Điền họ và tên' className={contactStyles.inputCss}/>
            </Stack>
            <Stack m='10px 0'>
                <Typography>Email</Typography>
                <input type='text' placeholder='Điền Email' className={contactStyles.inputCss}/>
            </Stack>
            <Stack m='10px 0'>
                <Typography>Số điện thoại</Typography>
                <input type='text' placeholder='Điền Số điện thoại' className={contactStyles.inputCss}/>
            </Stack>
            <Stack m='10px 0'>
                <Typography>Địa chỉ</Typography>
                <input type='text' placeholder='Điền Địa chỉ' className={contactStyles.inputCss}/>
            </Stack>
            <Stack m='10px 0'>
                <Typography>Tiêu đề</Typography>
                <input type='text' placeholder='Điền Tiêu đề' className={contactStyles.inputCss}/>
            </Stack>
            <Stack m='10px 0'>
                <Typography>Nội dung</Typography>
                <input style={{minHeight: '100px'}} type='text'className={contactStyles.inputCss}/>
            </Stack>
            <Box width='100%' mt='10px' className={homeStyles.mainButton} p='10px' backgroundColor='#d3b673' borderRadius='6px' style={{cursor: 'pointer'}}>
                <Typography textAlign='center' className={homeStyles.textButton} textTransform='uppercase' color='#fff' fontSize='15px' fontWeight={500}>Gửi thông tin</Typography>
            </Box>
        </Stack>
        <Advertisement/>
        <Footer/>
    </Stack>
  )
}

export default Contact