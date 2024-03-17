import React from "react";
import './Bai1.css';

export default function Bai01 () {
    return(
        <form className="form">
            <label className="title">KẾT QUẢ HỌC TẬP</label> <br />
            
            <label className="textLabel">Điểm HK1: <input type="text" name="diemHK1" className="inputField" /></label>
            
            <label className="textLabel">Điểm HK2: <input type="text" name="diemHK2" className="inputField" /></label>
            
            <label className="textLabel">Điểm Trung bình: <input type="text" name="diemTB" className="inputField readOnlyInput" readOnly /></label>
            
            <label className="textLabel">Kết quả: <input type="text" name="ketqua" className="inputField readOnlyInput" readOnly /></label>
            
            <label className="textLabel">Xếp loại học lực: <input type="text" name="hocluc" className="inputField readOnlyInput" readOnly /></label>
            
            <div className="buttonDiv">
                <input type="submit" className="button" value="Xem kết quả"></input>
            </div>
        </form>
    )
}