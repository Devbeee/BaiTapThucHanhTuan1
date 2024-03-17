import Header from "./Header.js";
import "./Bai3.css";
import ListSites from "./ListSites.js";
import ListSitesImages from "./ListSitesImages.js";
export default function Bai3() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="body">
          <ListSites />
          <ListSitesImages />
        </div>
      </div>
    </div>
  );
}
