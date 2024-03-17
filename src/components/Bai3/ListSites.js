import React from "react";
import "./Bai3.css";

function ListSites () {
    return (
        <div className="listSitesDiv">
          <ul className="ListSites">
            <h2 className="listName">Danh sách địa danh</h2>
            <li className="itemSite">
              <a href="#nhatrang" className="itemSiteLink">
                Biển Nha Trang
              </a>
            </li>
            <li className="itemSite">
              <a href="#dalat" className="itemSiteLink">
                Thành phố Đà Lạt
              </a>
            </li>
            <li className="itemSite">
              <a href="#brvt" className="itemSiteLink">
                Biển Vũng Tàu
              </a>
            </li>
            <li className="itemSite">
              <a href="#halong" className="itemSiteLink">
                Vịnh Hạ Long
              </a>
            </li>
            <li className="itemSite">
              <a href="#phanthiet" className="itemSiteLink">
                Biển Phan Thiết
              </a>
            </li>
            <li className="itemSite">
              <a href="#hatien" className="itemSiteLink">
                Biển Hà Tiên
              </a>
            </li>
            <li className="itemSite">
              <a href="#phuquoc" className="itemSiteLink">
                Đảo Phú Quốc
              </a>
            </li>
          </ul>
        </div>
      );
}

export default ListSites;
