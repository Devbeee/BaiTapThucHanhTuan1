import React from "react";
import styles from "./App.module.css";

class ListSitesImages extends React.Component {
    render() {
        return <ul className={styles.listSitesImages}>
            <li className={styles.itemSiteImage} id="nhatrang">
                <h3 className={styles.itemImageName}>Biển Nha Trang</h3>
                <img src="./images/nhaTrang.jpg" alt="Ảnh biển Nha Trang" className={styles.itemImage}></img>
                <a href="#top" className={styles.back}>Quay về đầu trang</a>
            </li>
            <li className={styles.itemSiteImage} id="dalat">
                <h3 className={styles.itemImageName}>Thành phố Đà Lạt</h3>
                <img src="./images/daLat.jpg" alt="Ảnh thành phố Đà Lạt" className={styles.itemImage}></img>
                <a href="#top" className={styles.back}>Quay về đầu trang</a>
            </li>
            <li className={styles.itemSiteImage} id="brvt">
                <h3 className={styles.itemImageName}>Biển Vũng Tàu</h3>
                <img src="./images/vungTau.jpg" alt="Ảnh biển Vũng Tàu" className={styles.itemImage}></img>
                <a href="#top" className={styles.back}>Quay về đầu trang</a>
            </li>
            <li className={styles.itemSiteImage} id="halong">
                <h3 className={styles.itemImageName}>Vịnh Hạ Long</h3>
                <img src="./images/haLong.jpg" alt="Ảnh vịnh Hạ Long" className={styles.itemImage}></img>
                <a href="#top" className={styles.back}>Quay về đầu trang</a>
            </li>
            <li className={styles.itemSiteImage} id="phanthiet">
                <h3 className={styles.itemImageName}>Biển Phan Thiết</h3>
                <img src="./images/phanThiet.jpg" alt="Ảnh biển Phan Thiết" className={styles.itemImage}></img>
                <a href="#top" className={styles.back}>Quay về đầu trang</a>
            </li>
            <li className={styles.itemSiteImage} id="hatien">
                <h3 className={styles.itemImageName}>Biển Hà Tiên</h3>
                <img src="./images/haTien.jpg" alt="Ảnh biển Hà Tiên" className={styles.itemImage}></img>
                <a href="#top" className={styles.back}>Quay về đầu trang</a>
            </li>
            <li className={styles.itemSiteImage} id="phuquoc">
                <h3 className={styles.itemImageName}>Đảo Phú Quốc</h3>
                <img src="./images/phuQuoc.jpg" alt="Ảnh đảo Phú Quốc" className={styles.itemImage}></img>
                <a href="#top" className={styles.back}>Quay về đầu trang</a>
            </li>
        </ul>
    }
}

export default ListSitesImages;