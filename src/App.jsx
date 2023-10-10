import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyle } from "./styles/GlobalStyle";
import Drawer from "./components/Drawer";


function App() {
  const [themeDark, setthemeDark] = useState(true);

  const [isOpen, setisOpen] = useState(false);
  const toggleIsOpen = () => setisOpen(!isOpen);
  return (
    <ThemeProvider theme={themeDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div className="App">
        <Drawer isOpen={isOpen} onClose={toggleIsOpen} isThemeDark={themeDark} toggleThemeDark={() => setthemeDark(!themeDark)
 }/>
        <NavBar onClickButtonMenu={toggleIsOpen}  />
        <Outlet> </Outlet>
      </div>
    </ThemeProvider>
  );
}

export default App;
