import { useRecoilState } from "recoil";
import { TextField, Stack, Typography } from "@mui/material";

import {
  dateRangeBeginState,
  dateRangeEndState,
} from "../recoil/allocationAtom";

function DatePicker() {
  const [dateRangeBegin, setDateRangeBegin] = useRecoilState(dateRangeBeginState);
  const [dateRangeEnd, setDateRangeEnd] = useRecoilState(dateRangeEndState);

  const handleDateRangeCahnge = (value, type) => {
    if (type === "begin") {
      if (value === "") {
        setDateRangeBegin(null);
      } else {
        setDateRangeBegin(value);
      }
    }
    if (type === "end") {
      if (value === "") {
        setDateRangeEnd(null);
      } else {
        setDateRangeEnd(value);
      }
    }
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 4 }}>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}>
          시작일 설정
        </Typography>
        <TextField
          sx={{
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              border: "1px solid #9f9f9f",
            },
            '& input[type="date"]::-webkit-calendar-picker-indicator': {
              filter:
                "invert(41%) sepia(91%) saturate(1503%) hue-rotate(348deg) brightness(97%) contrast(90%)",
            },
          }}
          InputProps={{
            inputProps: {
              style: { textAlign: "center", width: "284px", height: "16px" },
            },
          }}
          type="date"
          value={dateRangeBegin}
          onChange={(e) => handleDateRangeCahnge(e.target.value, "begin")}
        />
      </Stack>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}>
          종료일 설정
        </Typography>
        <TextField
          sx={{
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              border: "1px solid #9f9f9f",
            },
            '& input[type="date"]::-webkit-calendar-picker-indicator': {
              filter:
                "invert(41%) sepia(91%) saturate(1503%) hue-rotate(348deg) brightness(97%) contrast(90%)",
            },
          }}
          InputProps={{
            inputProps: {
              style: { textAlign: "center", width: "284px", height: "16px" },
            },
          }}
          type="date"
          value={dateRangeEnd}
          onChange={(e) => handleDateRangeCahnge(e.target.value, "end")}
        />
      </Stack>
    </Stack>
  );
}

export default DatePicker;
