import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Page/Game"
import Addition from "./Page/Addition";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Other from "./Page/Other";

function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/addition" element={<Addition />} />
            <Route path="/other" element={<Other />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App
