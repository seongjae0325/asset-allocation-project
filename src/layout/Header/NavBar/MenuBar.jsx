import { Stack, Box, Container, MenuItem } from "@mui/material";
import { useState } from "react";

import { MenuBarItems } from "../../../utils/layoutConfig";

function MenuBar() {
  const [selectedMenuId, setSelectedMenuId] = useState(2);

  const handleMenuClick = (id) => {
    setSelectedMenuId(id);
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderColor: "#1E1E1E",
        borderWidth: "0.1px 0",
        borderStyle: "solid",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{
            height: "52px",
          }}
        >
          {MenuBarItems.map((item, idx) => {
            return (
              <MenuItem
                key={item.id}
                sx={{
                  fontSize: "16px",
                  fontWeight: 550,
                  color: selectedMenuId === item.id && "#ec2626",
                  cursor: "pointer",
                }}
                onClick={() => handleMenuClick(item.id)}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
export default MenuBar;
