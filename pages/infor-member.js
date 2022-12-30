import React from "react";
import Layout from "../components/layout";
import { Box, Stack, Typography } from "@mui/material";
function MissPassWordPage() {
  return (
    <Layout>
      <Stack position="relative" justifyContent="center" alignItems="center">
        <Typography
          mt="25px"
          textTransform="uppercase"
          variant="h2"
          fontSize="20px"
          fontWeight={600}
        >
          Thông tin các thành viên trong nhóm
        </Typography>
        <Box maxWidth="420px" width="100%">
          <Typography mt="20px" fontWeight={600}>
            Cao Lương Phúc
          </Typography>
          <Typography mt="20px">Mssv: 1914677</Typography>
          <Typography mt="20px">Email: phuccao.30012001@gmail.com</Typography>
          <Typography mt="20px" fontWeight={600}>
            Nguyễn Lương Gia Huy
          </Typography>
          <Typography mt="20px">Mssv: 2013314</Typography>
          <Typography mt="20px">
            Email: huy.nguyen1092002@hcmut.edu.vn
          </Typography>
          <Typography mt="20px" fontWeight={600}>
            Nguyễn Hữu Hùng
          </Typography>
          <Typography mt="20px">Mssv: 2013364</Typography>
          <Typography mt="20px">Email: nguyenhung.220102@gmail.com</Typography>
          <Typography mt="20px" fontWeight={600}>
            Hồ Ngọc An
          </Typography>
          <Typography mt="20px">Mssv: 2012548</Typography>
          <Typography mt="20px">Email: hongocan792002@gmail.com</Typography>
        </Box>
      </Stack>
    </Layout>
  );
}

export default MissPassWordPage;
