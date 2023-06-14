import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";

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
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;