import { useRecoilState } from "recoil";
import { Container, TextField, Button, Stack } from "@mui/material";

import { strategyNameState } from "../../recoil/allocationAtom";

function StrategyNameBar() {
  const [strategyName, setStrategyName] = useRecoilState(strategyNameState);

  const handleStrategyNameChange = (e) => {
    const { value } = e.target;
    setStrategyName(value);
  };

  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={10}
        sx={{ height: "100px" }}
      >
        <TextField
          variant="standard"
          sx={{ width: "850px", borderBottom: "2px solid #fff" }}
          placeholder="전략 이름을 입력해주세요."
          value={strategyName}
          onChange={handleStrategyNameChange}
          InputProps={{
            disableUnderline: true,
            style: { fontSize: 28, fontWeight: 800 },
          }}
        />
        <Button
          sx={{
            height: "46px",
            width: "146px",
            fontSize: "16px",
            "&.Mui-disabled": {
              color: "black",
              backgroundColor: "#3E3E3E",
            },
            "&:hover": {
              color: "black",
              backgroundColor: "#EC6126",
            },
            color: "black",
            backgroundColor: "#EC6126",
          }}
          disabled={strategyName.length > 0 ? false : true}
        >
          전략저장
        </Button>
      </Stack>
    </Container>
  );
}
export default StrategyNameBar;
