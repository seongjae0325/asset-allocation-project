import { Button, Stack } from "@mui/material";

function BacktestRunForm() {
  return (
    <Stack alignItems="center" sx={{ mt: 13, mb: 13 }}>
      <Button
        sx={{
          height: "53px",
          width: "210px",
          color: "black",
          backgroundImage:
            "linear-gradient(to right, #EC6126 0%, #EC2825  50%, #EC2825  100%)",
          fontSize: "18px",
          fontWeight: 800,
          "&:hover": {
            color: "black",
            backgroundColor: "#EC6126",
          },
        }}
      >
        백테스트
      </Button>
    </Stack>
  );
}

export default BacktestRunForm;
