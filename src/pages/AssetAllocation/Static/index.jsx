import { forwardRef } from "react";
import producer from "immer";
import { useRecoilState } from "recoil";
import {
  MenuItem,
  Select,
  OutlinedInput,
  InputAdornment,
  Autocomplete,
  TextField,
  IconButton,
  Button,
  Stack,
  Box,
  Typography,
  ListItem,
  ListItemText,
} from "@mui/material";
import { List } from "react-virtualized";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import mockData from "../../../utils/mockData";
import { staticAllocOptionState } from "../../../recoil/allocationAtom";
import { RebalFrequencyMenuItems } from "../../../utils/assetAllocationConfig";

const ListboxComponent = forwardRef(function ListboxComponent(props, ref) {
  const { children, role, ...other } = props;
  const itemCount = Array.isArray(children) ? children.length : 0;
  const itemSize = 45;

  return (
    <Box ref={ref}>
      <Box {...other}>
        <List
          style={{ border: "1px solid #9f9f9f" }}
          height={370}
          width={640}
          rowHeight={itemSize}
          overscanCount={5}
          rowCount={itemCount}
          rowRenderer={(props) => {
            return (
              <ListItem
                key={props.key}
                style={{ ...props.style, borderBottom: "1px solid #9f9f9f" }}
              >
                <ListItemText>{children[props.index]}</ListItemText>
              </ListItem>
            );
          }}
          role={role}
        />
      </Box>
    </Box>
  );
});

function Static() {
  const [staticAllocOption, setStaticAllocOption] = useRecoilState(staticAllocOptionState);

  const handleSelectChange = (assetIndex, e, value) => {
    setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        if (value) {
          draft.assets[assetIndex].id = value.value;
          draft.assets[assetIndex].name = value.label;
        } else if (value === null) {
          draft.assets[assetIndex].id = "";
          draft.assets[assetIndex].name = "";
        }
      })
    );
  };

  const handleWeightChange = (assetIndex, value) => {
    if (value < 0) {
      setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        draft.assets[assetIndex].weight = 0
      })
    );
    } else if (value > 100) {
      setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        draft.assets[assetIndex].weight = 0
      })
    );
    } else {
      setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        draft.assets[assetIndex].weight = Number(value);
      })
    );
    }
  };

  const handleMoveIndex = (assetIndex, direction) => {
    const next = assetIndex + direction;
    setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        [draft.assets[next], draft.assets[assetIndex]] = [
          draft.assets[assetIndex],
          draft.assets[next],
        ];
      })
    );
  };

  const handleAddAsset = () => {
    setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        draft.assets.push({ id: "", name: "", weight: 0 });
      })
    );
  };

  const removeAsset = (assetIndex) => {
    setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        draft.assets.splice(assetIndex, 1);
      })
    );
  };

  const handleRebalancingChange = (value, type) => {
    setStaticAllocOption((prevState) =>
      producer(prevState, (draft) => {
        if (type === "freq") {
          draft.rebalancing.rebalancing_freq = value;
        }
        if (type === "band") {
          if (value < 0) {
            draft.rebalancing.rebalancing_band = "";
          } else if (value > 100) {
            draft.rebalancing.rebalancing_band = "";
          } else {
            draft.rebalancing.rebalancing_band = value;
          }
        }
      })
    );
  };

  return (
    <>
      <Typography
        sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 1, mt: 4 }}
      >
        주기 리밸런싱
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
        value={staticAllocOption.rebalancing.rebalancing_freq}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                주기 리밸런싱을 선택해주세요.
              </Typography>
            );
          }
          const item = RebalFrequencyMenuItems.find(
            (x) => x.value === selected
          );
          return item.label;
        }}
        displayEmpty
        onChange={(e) => handleRebalancingChange(e.target.value, "freq")}
      >
        {RebalFrequencyMenuItems.map((option, index) => (
          <MenuItem
            key={index}
            value={option.value}
            sx={{ justifyContent: "center" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <Typography
        sx={{ fontSize: "16px", fontWeight: 500, color: "#fff", mb: 1, mt: 4 }}
      >
        밴드 리밸런싱
      </Typography>
      <OutlinedInput
        inputProps={{
          style: { textAlign: "center" },
        }}
        sx={{
          width: "640px",
          height: "46px",
          textAlign: "center",
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            border: "1px solid #9f9f9f",
          },
        }}
        type="number"
        placeholder="밴드 리밸런싱 기준을 입력해주세요."
        endAdornment={
          <InputAdornment position="end">
            <Typography sx={{ color: "#fff" }}>%</Typography>
          </InputAdornment>
        }
        value={staticAllocOption.rebalancing.rebalancing_band}
        onChange={(e) => handleRebalancingChange(e.target.value, "band")}
      />
      <Typography
        sx={{ fontSize: "13px", fontWeight: 500, color: "gray", mt: 2 }}
      >
        0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)
      </Typography>
      <Typography
        sx={{ fontSize: "18px", fontWeight: 700, color: "#fff", mt: 5 }}
      >
        자산군 추가
      </Typography>
      {staticAllocOption.assets.length > 0 ? (
        staticAllocOption.assets.map((asset, assetIndex) => (
          <>
            <Typography
              key={asset.id}
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#fff",
                mb: 1,
                mt: 4,
              }}
            >
              {`자산 0${assetIndex + 1}`}
            </Typography>
            <Stack direction="row" spacing={5}>
              <Autocomplete
                popupIcon={<ExpandMoreIcon sx={{ color: "#EC6126" }} />}
                sx={{
                  width: "640px",
                  height: "46px",
                }}
                disableListWrap
                disableClearable
                ListboxComponent={ListboxComponent}
                options={mockData.stocks}
                value={asset.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      "& .MuiInputBase-root": { height: "46px" },
                      "& fieldset.MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #9f9f9f",
                      },
                    }}
                  />
                )}
                onChange={(e, value) =>
                  handleSelectChange(assetIndex, e, value)
                }
              />
              <IconButton
                sx={{
                  ml: 5,
                  color: "#fff",
                  "&.Mui-disabled": {
                    color: "gray",
                  },
                }}
                style={{ marginLeft: "0px" }}
                onClick={(e) => handleMoveIndex(assetIndex, -1)}
                disabled={assetIndex === 0}
              >
                <KeyboardArrowUpIcon style={{ marginBottom: "-3px" }} />
              </IconButton>
            </Stack>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#fff",
                mb: 1,
                mt: 6.5,
              }}
            >
              비중
            </Typography>
            <Stack direction="row" spacing={5}>
              <OutlinedInput
                inputProps={{
                  style: { textAlign: "center" },
                }}
                sx={{
                  width: "640px",
                  height: "46px",
                  textAlign: "center",
                  "& fieldset.MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #9f9f9f",
                  },
                }}
                type="number"
                defaultValue={0}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography sx={{ color: "#fff" }}>%</Typography>
                  </InputAdornment>
                }
                value={asset.weight}
                onChange={(e) => handleWeightChange(assetIndex, e.target.value)}
              />
              <IconButton
                sx={{
                  ml: 5,
                  color: "#fff",
                  "&.Mui-disabled": {
                    color: "gray",
                  },
                }}
                style={{ marginLeft: "0px" }}
                onClick={(e) => handleMoveIndex(assetIndex, +1)}
                disabled={staticAllocOption.assets.length - 1 === assetIndex}
              >
                <KeyboardArrowDownIcon style={{ marginTop: "-3px" }} />
              </IconButton>
            </Stack>
            <Typography
              sx={{ fontSize: "13px", fontWeight: 500, color: "gray", mt: 2 }}
            >
              0 ~ 100 까지 입력할 수 있습니다.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mt: 2 }}
            >
              <Button
                sx={{
                  height: "42px",
                  width: "105px",
                  color: "#fff",
                  backgroundColor: "black",
                  fontSize: "16px",
                  display: "block",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "black",
                  },
                }}
                size="small"
                onClick={() => removeAsset(assetIndex)}
              >
                삭제하기
              </Button>
              {assetIndex === staticAllocOption.assets.length - 1 && (
                <Button
                  onClick={handleAddAsset}
                  sx={{
                    height: "42px",
                    width: "105px",
                    color: "black",
                    backgroundColor: "#EC6126",
                    fontSize: "16px",
                    "&:hover": {
                      color: "black",
                      backgroundColor: "#EC6126",
                    },
                  }}
                >
                  추가하기
                </Button>
              )}
            </Stack>
          </>
        ))
      ) : (
        <Button
          onClick={handleAddAsset}
          sx={{
            height: "42px",
            width: "105px",
            color: "black",
            backgroundColor: "#EC6126",
            fontSize: "16px",
            "&:hover": {
              color: "black",
              backgroundColor: "#EC6126",
            },
            mt: 1,
          }}
        >
          추가하기
        </Button>
      )}
    </>
  );
}

export default Static;
