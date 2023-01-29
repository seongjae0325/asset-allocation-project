import { useRecoilState } from "recoil";
import { MenuItem, Select, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AlgorithmMenuItems } from "../../utils/assetAllocationConfig";
import { selectedAlgorithmState } from "../../recoil/allocationAtom";

function AssetAllocationSelect() {
  const [selectedAlgorithm, setSelectedAlgorithmState] = useRecoilState(selectedAlgorithmState);

  return (
    <>
      <Typography
        sx={{ fontSize: "18px", fontWeight: 700, color: "#fff", mt: 5 }}
      >
        자산배분 설정
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#fff",
          mb: 1,
          mt: 4,
        }}
      >
        자산배분 알고리즘
      </Typography>
      <Select
        IconComponent={(props) => (
          <ExpandMoreIcon {...props} style={{ color: "#EC6126" }} />
        )}
        sx={{
          width: "640px",
          height: "46px",
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            border: "1px solid #9f9f9f",
          },
          textAlign: "center",
        }}
        value={selectedAlgorithm}
        onChange={(e) => setSelectedAlgorithmState(e.target.value)}
      >
        {AlgorithmMenuItems.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ justifyContent: "center" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default AssetAllocationSelect;
