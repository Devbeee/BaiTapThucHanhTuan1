import { Route, Routes } from "react-router-dom";
import Bai4 from "./components/Bai4/Bai4";
function App() {
  return (
    <Routes>
      <Route path="/bai4" element={<Bai4/>}></Route>
    </Routes>
  );
}

export default App;
