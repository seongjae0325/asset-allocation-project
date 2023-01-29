import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

function Page ({ children, title = "", ...other }){
  return (
    <Box {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
};

export default Page;
