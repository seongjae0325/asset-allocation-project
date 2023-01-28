import { BrowserRouter } from "react-router-dom";

import Router from "./routes";
import ThemeConfig from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <Router />
      </ThemeConfig>
    </BrowserRouter>
  );
}

export default App;
