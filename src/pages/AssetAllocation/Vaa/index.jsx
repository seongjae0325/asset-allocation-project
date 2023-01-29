import producer from "immer";
import { useRecoilState } from "recoil";
import {
  MenuItem,
  Select,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { vaaAllocOptionState } from "../../../recoil/allocationAtom";
import { DualVaaOffensiveUniverse, DefensiveUniverse } from "../../../utils/assetAllocationConfig";

function Vaa() {
  const [vaaAllocOption, setVaaAllocOption] = useRecoilState(vaaAllocOptionState);

  const handleAssetChange = (value, type) => {
    setVaaAllocOption((prevState) =>
      producer(prevState, (draft) => {
        draft.assets[type] = value;
      })
    );
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
            value={vaaAllocOption.assets.offensive1}
            onChange={(e) => handleAssetChange(e.target.value, "offensive1")}
          >
            {DualVaaOffensiveUniverse.map((universe) => (
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
            value={vaaAllocOption.assets.offensive2}
            onChange={(e) => handleAssetChange(e.target.value, "offensive2")}
          >
            {DualVaaOffensiveUniverse.map((universe) => (
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
            공격자산 03
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
            value={vaaAllocOption.assets.offensive3}
            onChange={(e) => handleAssetChange(e.target.value, "offensive3")}
          >
            {DualVaaOffensiveUniverse.map((universe) => (
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
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 2 }}
          >
            공격자산 04
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
            value={vaaAllocOption.assets.offensive4}
            onChange={(e) => handleAssetChange(e.target.value, "offensive4")}
          >
            {DualVaaOffensiveUniverse.map((universe) => (
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
      <Stack direction="row" spacing={10} sx={{ mt: 5, mb: 5 }}>
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 2 }}
          >
            방어자산01
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
            value={vaaAllocOption.assets.defensive1}
            onChange={(e) => handleAssetChange(e.target.value, "defensive1")}
          >
            {DefensiveUniverse.map((universe) => (
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
            방어자산02
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
            value={vaaAllocOption.assets.defensive2}
            onChange={(e) => handleAssetChange(e.target.value, "defensive2")}
          >
            {DefensiveUniverse.map((universe) => (
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
            방어자산03
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
            value={vaaAllocOption.assets.defensive3}
            onChange={(e) => handleAssetChange(e.target.value, "defensive3")}
          >
            {DefensiveUniverse.map((universe) => (
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
    </>
  );
}

export default Vaa;
