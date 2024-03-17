import { Route, Routes } from "react-router-dom";
import Bai1 from "./components/Bai1/Bai1";
import Bai3 from "./components/Bai3/Bai3";
import Bai4 from "./components/Bai4/Bai4";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/bai1" element={<Bai1 />}></Route>
        <Route path="/bai3" element={<Bai3 />}></Route>
        <Route path="/bai4" element={<Bai4 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
