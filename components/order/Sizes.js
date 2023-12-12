import { Box, Stack, Typography } from '@mui/material'; // Import Typography from MUI
import stylesHome from "../../styles/Home.module.css";

const Sizes = ({ sizes, indexOfSize, setIndexOfSize }) => {
  if (!sizes || sizes.length === 0) return null;

  return (
    <Stack direction="row" spacing={2}>
      {sizes.map((size, index) => (
        <Box
          key={index}
          className={(index !== indexOfSize) ? stylesHome.mainButton : stylesHome.mainButtonReverse}
          p="7px 12px"
          backgroundColor="#d3b673"
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => setIndexOfSize(index)}
        >
          <Typography
            className={(index !== indexOfSize) && stylesHome.textButton}
            textTransform="capitalize"
            color={(index !== indexOfSize) && "#fff"}
            fontSize="14px"
            variant="body1"
            letterSpacing={1}
          >
            {size.sizeName}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default Sizes;
