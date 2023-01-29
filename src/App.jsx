import { BrowserRouter } from "react-router-dom";

import Router from "./routes";
import ThemeConfig from "./theme";
import Header from "./layout/Header"
import Footer from "./layout/Footer"

function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <Header/>
        <Router />
        <Footer/>
      </ThemeConfig>
    </BrowserRouter>
  );
}

export default App;
