import Header from "./Bai3/Header.js";
import styles from "./Bai3/App.module.css";
import ListSites from "./Bai3/ListSites.js";
import ListSitesImages from "./Bai3/ListSitesImages.js"


function App() {
  return (
    <div class={styles.App}>
      <div className={styles.container}>
        <Header />
        <div class={styles.body}>
          <ListSites />
          <ListSitesImages />
        </div>
      </div>
    </div >
  );
}

export default App;
