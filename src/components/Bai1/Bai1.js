import React, { useState } from "react";
import './Bai1.css';

export default function Bai1() {
    const [diemHK1, setDiemHK1] = useState()
    const [diemHK2, setDiemHK2] = useState()
    const [diemTB, setDiemTB] = useState()
    const [ketQua, setKetQua] = useState('')
    const [hocLuc, setHocLuc] = useState('')

    const displayResult = () => {
        let dtb = (+diemHK1 + +diemHK2 * 2) / 3
        setDiemTB(dtb)
        if (dtb >= 5) {
            setKetQua("Được lên lớp")
        }
        else {
            setKetQua("Ở lại lớp")
        }

        if (dtb >= 8) {
            setHocLuc("Giỏi")
        }
        else if (dtb > 6) {
            setHocLuc("Khá")
        }
        else if (dtb >= 5) {
            setHocLuc("Trung bình")
        }
        else {
            setHocLuc("Yếu")
        }
    }

    return (
        <div className="form">
            <label className="title">KẾT QUẢ HỌC TẬP</label> <br />

            <label className="textLabel">Điểm HK1:
                <input
                    type="number"
                    name="diemHK1" className="inputField"
                    value={diemHK1}
                    onChange={(e) => setDiemHK1(e.target.value)}
                    max={10}
                />
            </label>

            <label className="textLabel">Điểm HK2:
                <input
                    type="number"
                    name="diemHK2"
                    className="inputField"
                    value={diemHK2}
                    onChange={(e) => setDiemHK2(e.target.value)}
                    max={10}
                />
            </label>

            <label className="textLabel">Điểm Trung bình:
                <input
                    type="number"
                    name="diemTB"
                    className="inputField readOnlyInput"
                    readOnly
                    value={diemTB}
                />
            </label>

            <label className="textLabel">Kết quả:
                <input
                    type="text"
                    name="ketqua"
                    className="inputField readOnlyInput"
                    readOnly
                    value={ketQua}
                />
            </label>

            <label className="textLabel">Xếp loại học lực:
                <input
                    type="text"
                    name="hocluc"
                    className="inputField readOnlyInput"
                    readOnly
                    value={hocLuc}
                />
            </label>

            <div className="buttonDiv">
                <button
                    className="button"
                    onClick={() => displayResult()}>
                    Xem kết quả
                </button>
                
            </div>
        </div>
    )
}