import producer from "immer";
import { useRecoilState } from "recoil";
import {
  MenuItem,
  Select,
  Button,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { dualAllocOptionState } from "../../../recoil/allocationAtom";
import { DualOffensiveUniverse, DualDefensiveUniverse } from "../../../utils/assetAllocationConfig";

function Dual() {
  const [dualAllocOption, setDualAllocOption] = useRecoilState(dualAllocOptionState);

  const handleAssetChange = (value, type) => {
    setDualAllocOption((prevState) =>
      producer(prevState, (draft) => {
        draft.assets[type] = value;
      })
    );
  };

  const handleMomentumChange = (value) => {
    setDualAllocOption({ ...dualAllocOption, momentum: value });
  };

  return (
    <>
      <Stack direction="row" spacing={10} sx={{ mt: 5, mb: 5 }}>
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 2 }}
          >
            공격자산 01
          </Typography>
          <Select
            IconComponent={(props) => (
              <ExpandMoreIcon {...props} style={{ color: "#EC6126" }} />
            )}
            size="small"
            sx={{
              width: "214px",
              height: "46px",
              textAlign: "center",
              "& fieldset.MuiOutlinedInput-notchedOutline": {
                border: "1px solid #9f9f9f",
              },
            }}
            value={dualAllocOption.assets.offensive1}
            onChange={(e) => handleAssetChange(e.target.value, "offensive1")}
          >
            {DualOffensiveUniverse.map((universe) => (
              <MenuItem
                key={universe.value}
                value={universe.value}
                sx={{ justifyContent: "center" }}
              >
                {universe.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 2 }}
          >
            공격자산 02
          </Typography>
          <Select
            IconComponent={(props) => (
              <ExpandMoreIcon {...props} style={{ color: "#EC6126" }} />
            )}
            size="small"
            sx={{
              width: "214px",
              height: "46px",
              textAlign: "center",
              "& fieldset.MuiOutlinedInput-notchedOutline": {
                border: "1px solid #9f9f9f",
              },
            }}
            value={dualAllocOption.assets.offensive2}
            onChange={(e) => handleAssetChange(e.target.value, "offensive2")}
          >
            {DualOffensiveUniverse.map((universe) => (
              <MenuItem
                key={universe.value}
                value={universe.value}
                sx={{ justifyContent: "center" }}
              >
                {universe.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Stack>
      <Stack>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 2 }}
        >
          방어자산
        </Typography>
        <Select
          IconComponent={(props) => (
            <ExpandMoreIcon {...props} style={{ color: "#EC6126" }} />
          )}
          size="small"
          sx={{
            width: "214px",
            height: "46px",
            textAlign: "center",
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              border: "1px solid #9f9f9f",
            },
          }}
          value={dualAllocOption.assets.defensive}
          onChange={(e) => handleAssetChange(e.target.value, "defensive")}
        >
          {DualDefensiveUniverse.map((universe) => (
            <MenuItem
              key={universe.value}
              value={universe.value}
              sx={{ justifyContent: "center" }}
            >
              {universe.label}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <Stack alignItems="flex-start" sx={{ mt: 7 }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            mt: 2,
            mb: 2,
          }}
        >
          페어 추가 (지원예정)
        </Typography>
        <Button
          disabled
          sx={{
            backgroundColor: "#3e3e3e",
            color: "black",
            height: "42px",
            width: "105px",
          }}
        >
          추가하기
        </Button>
      </Stack>
      <Stack>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#fff",
            mt: 8,
            mb: 2,
          }}
        >
          모멘텀 기간
        </Typography>
        <Select
          IconComponent={(props) => (
            <ExpandMoreIcon {...props} style={{ color: "#EC6126" }} />
          )}
          size="small"
          sx={{
            width: "640px",
            height: "46px",
            textAlign: "center",
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              border: "1px solid #9f9f9f",
            },
          }}
          value={dualAllocOption.momentum}
          onChange={(e) => handleMomentumChange(e.target.value)}
          displayEmpty
        >
          <MenuItem value={"3"}>3개월</MenuItem>
          <MenuItem value={"6"}>6개월</MenuItem>
          <MenuItem value={"12"}>12개월</MenuItem>
        </Select>
      </Stack>
    </>
  );
}

export default Dual;
