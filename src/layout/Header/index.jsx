import { Box } from "@mui/material";

import StrategyNameBar from "./StrategyNameBar";
import EventBanner from "./EventBanner";
import NavBar from "./NavBar";

function Header() {
  return (
    <Box sx={{ position: "fixed", width: "100%", top: 0, zIndex:10, backgroundColor:"#0E0E0E"}}>
      <EventBanner />
      <NavBar />
      <StrategyNameBar />
    </Box>
  );
}

export default Header;
