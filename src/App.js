// import logo from './logo.svg';
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Routes, Route } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchVideo from "./components/WatchVideo";
import { VideoProvider } from "./utils/appContext/VideoContext";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <VideoProvider>
          <header>
            <Head />
            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="/" element={<Maincontainer />} />
                <Route path="/watch" element={<WatchVideo />} />
              </Route>
            </Routes>
          </header>
        </VideoProvider>
      </Provider>
    </div>
  );
}

export default App;
