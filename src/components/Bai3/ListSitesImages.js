import React from "react";
import "./Bai3.css";

function ListSitesImages() {
  return (
    <ul className="listSitesImages">
      <li className="itemSiteImage" id="nhatrang">
        <h3 className="itemImageName">Biển Nha Trang</h3>
        <img
          src="./images/nhaTrang.jpg"
          alt="Ảnh biển Nha Trang"
          className="itemImage"
        ></img>
        <a href="#top" className="back">
          Quay về đầu trang
        </a>
      </li>
      <li className="itemSiteImage" id="dalat">
        <h3 className="itemImageName">Thành phố Đà Lạt</h3>
        <img
          src="./images/daLat.jpg"
          alt="Ảnh thành phố Đà Lạt"
          className="itemImage"
        ></img>
        <a href="#top" className="back">
          Quay về đầu trang
        </a>
      </li>
      <li className="itemSiteImage" id="brvt">
        <h3 className="itemImageName">Biển Vũng Tàu</h3>
        <img
          src="./images/vungTau.jpg"
          alt="Ảnh biển Vũng Tàu"
          className="itemImage"
        ></img>
        <a href="#top" className="back">
          Quay về đầu trang
        </a>
      </li>
      <li className="itemSiteImage" id="halong">
        <h3 className="itemImageName">Vịnh Hạ Long</h3>
        <img
          src="./images/haLong.jpg"
          alt="Ảnh vịnh Hạ Long"
          className="itemImage"
        ></img>
        <a href="#top" className="back">
          Quay về đầu trang
        </a>
      </li>
      <li className="itemSiteImage" id="phanthiet">
        <h3 className="itemImageName">Biển Phan Thiết</h3>
        <img
          src="./images/phanThiet.jpg"
          alt="Ảnh biển Phan Thiết"
          className="itemImage"
        ></img>
        <a href="#top" className="back">
          Quay về đầu trang
        </a>
      </li>
      <li className="itemSiteImage" id="hatien">
        <h3 className="itemImageName">Biển Hà Tiên</h3>
        <img
          src="./images/haTien.jpg"
          alt="Ảnh biển Hà Tiên"
          className="itemImage"
        ></img>
        <a href="#top" className="back">
          Quay về đầu trang
        </a>
      </li>
      <li className="itemSiteImage" id="phuquoc">
        <h3 className="itemImageName">Đảo Phú Quốc</h3>
        <img
          src="./images/phuQuoc.jpg"
          alt="Ảnh đảo Phú Quốc"
          className="itemImage"
        ></img>
        <a href="#top" className="back">
          Quay về đầu trang
        </a>
      </li>
    </ul>
  );
}

export default ListSitesImages;
