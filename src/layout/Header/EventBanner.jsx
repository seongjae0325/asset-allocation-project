import { useState } from "react";
import { Container, Typography, Stack, Box } from "@mui/material";

function EventBanner() {
  const [open, setOpen] = useState(true);

  const handleBannerClick = (e) => {
    const { innerText } = e.target;
    if (innerText === "x") {
      setOpen(false);
    } else {
      window.open(
        "https://opposite-theater-c57.notion.site/96e3cdb5d71f4607b418252a5c153722"
      );
    }
  };

  return (
    <>
      {open && (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#ec2626",
            cursor: "pointer",
          }}
          onClick={handleBannerClick}
        >
          <Container maxWidth="lg">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                height: "44px",
              }}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: 800, color: "black" }}
              >
                퀀터스 정식버전 출시기념 이벤트!
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 800, color: "black" }}
                onClick={handleBannerClick}
              >
                x
              </Typography>
            </Stack>
          </Container>
        </Box>
      )}
    </>
  );
}
export default EventBanner;
