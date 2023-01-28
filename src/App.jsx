import { BrowserRouter } from "react-router-dom";

import Router from "./routes";
import ThemeConfig from "./theme";
import Header from "./layout/Header/index"

function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <Header/>
        <Router />
      </ThemeConfig>
    </BrowserRouter>
  );
}

export default App;
