import { Container, Typography, Stack, Box } from "@mui/material";

function Footer() {
    
  const openPage = (e) => {
    if (e.target.innerText === "공식 카페 바로가기") {
      window.open("https://cafe.naver.com/quantus");
    }
    if (e.target.innerText === "개인정보처리방침") {
      window.open("https://www.quantus.kr/service/useservice");
    }
    if (e.target.innerText === "이용약관") {
      window.open("https://www.quantus.kr/service");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          spacing={2}
          sx={{
            pt: 5,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              component="img"
              sx={{ cursor: "pointer", height: "30px", width: "156px" }}
              alt="quantus"
              src="https://quantus.kr/static/media/logo_quantus.f45f17f794c7214f1d63.png"
            ></Box>
            <Stack direction="row" spacing={5}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#9f9f9f",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={openPage}
              >
                공식 카페 바로가기
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#9f9f9f",
                  cursor: "pointer",
                }}
                onClick={openPage}
              >
                개인정보처리방침
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#9f9f9f",
                  cursor: "pointer",
                }}
                onClick={openPage}
              >
                이용약관
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#9f9f9f",
              pt: 2,
            }}
          >
            주식회사 퀀터스테크놀로지스
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#9f9f9f",
            }}
          >
            대표자명: 이재민 ┃ 주소: 서울특별시 강남구 테헤란로2길 27
            패스트파이브빌딩
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#9f9f9f",
            }}
          >
            사업자등록번호: 245-88-02569
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#9f9f9f",
            }}
          >
            문의: info@quantus.kr
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#9f9f9f",
            }}
          >
            Tel: 070-4193-5192 (평일 10:00 ~ 17:00, 휴게시간: 12:00 ~ 13:30,
            주말 및 공휴일 휴무)
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#6E6E6E",
              pb: 10,
            }}
          >
            © 2023 Quantus Technologies. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
