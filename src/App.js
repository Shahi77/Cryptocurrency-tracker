import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',

  },
}))
function App() {

  const classes = useStyles();
  return (

    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact></Route>
          <Route path="/coin/:id" element={<CoinPage />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;