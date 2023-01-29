import producer from "immer";
import { useRecoilState } from "recoil";
import { MenuItem, Select, Stack, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { daaAllocOptionState } from "../../../recoil/allocationAtom";
import { DaaOffensiveUniverse, DefensiveUniverse, DaaCanaryUniverse } from "../../../utils/assetAllocationConfig";

function DAA() {
  const [daaAllocOption, setDaaAllocOption] = useRecoilState(daaAllocOptionState);

  const handleAssetChange = (value, type) => {
    setDaaAllocOption((prevState) =>
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
            value={daaAllocOption.assets.offensive1}
            onChange={(e) => handleAssetChange(e.target.value, "offensive1")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            value={daaAllocOption.assets.offensive2}
            onChange={(e) => handleAssetChange(e.target.value, "offensive2")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            value={daaAllocOption.assets.offensive3}
            onChange={(e) => handleAssetChange(e.target.value, "offensive3")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
      <Stack direction="row" spacing={10}>
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
            value={daaAllocOption.assets.offensive4}
            onChange={(e) => handleAssetChange(e.target.value, "offensive4")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 05
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
            value={daaAllocOption.assets.offensive5}
            onChange={(e) => handleAssetChange(e.target.value, "offensive5")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 06
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
            value={daaAllocOption.assets.offensive6}
            onChange={(e) => handleAssetChange(e.target.value, "offensive6")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 07
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
            value={daaAllocOption.assets.offensive7}
            onChange={(e) => handleAssetChange(e.target.value, "offensive7")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 08
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
            value={daaAllocOption.assets.offensive8}
            onChange={(e) => handleAssetChange(e.target.value, "offensive8")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 09
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
            value={daaAllocOption.assets.offensive9}
            onChange={(e) => handleAssetChange(e.target.value, "offensive9")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 10
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
            value={daaAllocOption.assets.offensive10}
            onChange={(e) => handleAssetChange(e.target.value, "offensive10")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 11
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
            value={daaAllocOption.assets.offensive11}
            onChange={(e) => handleAssetChange(e.target.value, "offensive11")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            공격자산 12
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
            value={daaAllocOption.assets.offensive12}
            onChange={(e) => handleAssetChange(e.target.value, "offensive12")}
          >
            {DaaOffensiveUniverse.map((universe) => (
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
            value={daaAllocOption.assets.defensive1}
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
            value={daaAllocOption.assets.defensive2}
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
            value={daaAllocOption.assets.defensive3}
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
      <Stack direction="row" spacing={10} sx={{ mt: 5, mb: 5 }}>
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 2 }}
          >
            카나리아자산01
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
            value={daaAllocOption.assets.canary1}
            onChange={(e) => handleAssetChange(e.target.value, "canary1")}
          >
            {DaaCanaryUniverse.map((universe) => (
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
            카나리아자산02
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
            value={daaAllocOption.assets.canary2}
            onChange={(e) => handleAssetChange(e.target.value, "canary2")}
          >
            {DaaCanaryUniverse.map((universe) => (
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

export default DAA;
