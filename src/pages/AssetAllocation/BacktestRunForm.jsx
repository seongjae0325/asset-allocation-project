import { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  Button,
  Stack,
  CircularProgress,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";

import {
  staticAllocOptionState,
  dualAllocOptionState,
  vaaAllocOptionState,
  daaAllocOptionState,
  selectedAlgorithmState,
  strategyNameState,
  dateRangeBeginState,
  dateRangeEndState,
} from "../../recoil/allocationAtom";

function BacktestRunForm() {
  const selectedAlgorithm = useRecoilValue(selectedAlgorithmState);
  const staticAllocOption = useRecoilValue(staticAllocOptionState);
  const dualAllocOption = useRecoilValue(dualAllocOptionState);
  const vaaAllocOption = useRecoilValue(vaaAllocOptionState);
  const daaAllocOption = useRecoilValue(daaAllocOptionState);
  const strategyName = useRecoilValue(strategyNameState);
  const dateRangeBegin = useRecoilValue(dateRangeBeginState);
  const dateRangeEnd = useRecoilValue(dateRangeEndState);
  const [isloading, setIsLoading] = useState(false);
  const [isProgress, setIsProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  const addOptions = (allocOption) => {
    const resultOption = JSON.stringify({
      name: strategyName,
      ...allocOption,
      date: { begin: dateRangeBegin, end: dateRangeEnd },
    });
    setProgress(0);
    setIsProgress(false);
    alert(resultOption);
  };

  const validationBacktestOptions = () => {
    if (!dateRangeBegin || !dateRangeEnd) {
      alert("백테스트 수행 날짜를 입력하세요.");
      return false;
    }
    if (strategyName === "") {
      alert("전략 이름을 입력해주세요.");
      return false;
    }
    if (selectedAlgorithm === "Static") {
      const sum = staticAllocOption.assets.reduce((acc, obj) => {
        return acc + obj.weight;
      }, 0);

      if (sum !== 100) {
        alert("자산의 총합이 100이 되도록 설정해주세요.");
        return false;
      }
    }
    return true;
  };

  const runBacktest = () => {
    setIsLoading(true);
    if (!validationBacktestOptions()) {
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsProgress(true);
      const handleProgress = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          const result = Math.min(oldProgress + diff, 100);
          if (result === 100) {
            if (selectedAlgorithm === "Static") {
              addOptions(staticAllocOption);
              clearInterval(handleProgress);
            }
            if (selectedAlgorithm === "Dual") {
              addOptions(dualAllocOption);
              clearInterval(handleProgress);
            }
            if (selectedAlgorithm === "VAA") {
              addOptions(vaaAllocOption);
              clearInterval(handleProgress);
            }
            if (selectedAlgorithm === "DAA") {
              addOptions(daaAllocOption);
              clearInterval(handleProgress);
            }
          } else {
            return result;
          }
        });
      }, 800);
    }, 1500);
  };

  return (
    <Stack alignItems="center" sx={{ mt: 13, mb: 13 }}>
      {!isProgress && (
        <Button
          disabled={isloading}
          sx={{
            height: "53px",
            width: "210px",
            color: "black",
            backgroundImage:
              !isloading &&
              "linear-gradient(to right, #EC6126 0%, #EC2825  50%, #EC2825  100%)",
            fontSize: "18px",
            border: isloading && "1px solid #EC6126",
          }}
          onClick={runBacktest}
        >
          <Typography
            sx={{ color: isloading ? "#fff" : "black", fontWeight: 800, mr: 2 }}
          >
            {isloading ? "대기중..." : "백테스트"}
          </Typography>
          {isloading && <CircularProgress size={25} />}
        </Button>
      )}
      {!isloading && isProgress && (
        <Box sx={{ width: 210 }}>
          <LinearProgress
            sx={{
              height: 53,
              borderRadius: 1,
              backgroundColor: "black",
              border: "1px solid #EC6126",
            }}
            variant="determinate"
            value={progress}
          />
        </Box>
      )}
    </Stack>
  );
}

export default BacktestRunForm;
