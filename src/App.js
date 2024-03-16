import { Route, Routes } from "react-router-dom";
import Bai1 from "./components/Bai1";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/bai1" element={<Bai1/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
