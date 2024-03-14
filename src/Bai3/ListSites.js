import React from "react";
import styles from "./App.module.css";

class ListSites extends React.Component {
    render() {
        return <div className={styles.listSitesDiv}>
            <ul className={styles.ListSites}>
                <h2 className={styles.listName}>Danh sách địa danh</h2>
                <li className={styles.itemSite}>
                    <a href="#nhatrang" className={styles.itemSiteLink}>Biển Nha Trang</a>
                </li>
                <li className={styles.itemSite}>
                    <a href="#dalat" className={styles.itemSiteLink}>Thành phố Đà Lạt</a>
                </li>
                <li className={styles.itemSite}>
                    <a href="#brvt" className={styles.itemSiteLink}>Biển Vũng Tàu</a>
                </li>
                <li className={styles.itemSite}>
                    <a href="#halong" className={styles.itemSiteLink}>Vịnh Hạ Long</a>
                </li>
                <li className={styles.itemSite}>
                    <a href="#phanthiet" className={styles.itemSiteLink}>Biển Phan Thiết</a>
                </li>
                <li className={styles.itemSite}>
                    <a href="#hatien" className={styles.itemSiteLink}>Biển Hà Tiên</a>
                </li>
                <li className={styles.itemSite}>
                    <a href="#phuquoc" className={styles.itemSiteLink}>Đảo Phú Quốc</a>
                </li>
            </ul>
        </div>
    }
}

export default ListSites;