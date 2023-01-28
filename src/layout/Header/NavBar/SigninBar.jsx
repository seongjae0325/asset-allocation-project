import { Typography, Stack, Box, Container } from "@mui/material";

function SigninBar() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: "85px",
          }}
        >
          <Box
            component="img"
            sx={{ cursor: "pointer", height: "30px", width: "156px" }}
            alt="quantus"
            src="https://quantus.kr/static/media/logo_quantus.f45f17f794c7214f1d63.png"
          ></Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#ec2626",
              cursor: "pointer",
            }}
          >
            로그인 하러가기
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
export default SigninBar;
