import { useState } from "react";
import "./Bai4.css";
function Bai4() {
    const [formInfo, setFormInfo] = useState({
        hoTen: "",
        giaoVien: "",
        lop: "",
        ngay: "",
        dscv: "",
        hinhThuc: {
            taiLop: false,
            veNha: false,
        },
    });
    const [result, setResult] = useState();
    var handleSubmit = (e) => {
        e.preventDefault();
        setResult(formInfo);
    };

    return (
        <div className="main">
            <form className="form_container">
                <h1 className="form__header">THEO DÕI HỌC TẬP</h1>
                <img src={require("./img/pencil.png")} alt="" className="form__img" />
                <div className="form-group">
                    <label className="form-label">Họ tên học sinh:</label>
                    <input onChange={(e) => setFormInfo({ ...formInfo, hoTen: e.target.value })} className="form-control input_text" type="text" id="fullname" />
                </div>
                <div className="form-group">
                    <label className="form-label">Giáo viên phụ trách:</label>
                    <input onChange={(e) => setFormInfo({ ...formInfo, giaoVien: e.target.value })} className="form-control input_text" type="text" id="teacher" />
                </div>
                <div className="form-group display-inline-block">
                    <label className="form-label-mini">Lớp:</label>
                    <input onChange={(e) => setFormInfo({ ...formInfo, lop: e.target.value })} className="form-control-mini input_text" type="text" id="className" />
                </div>
                <div className="form-group display-inline-block">
                    <label className="form-label-mini">Ngày:</label>
                    <input onChange={(e) => setFormInfo({ ...formInfo, ngay: e.target.value })} className="form-control-mini input_text" type="text" id="date" placeholder="dd//mm/yyyy" />
                </div>
                <div className="form-group">
                    <label className="form-label">Những việc phân công chưa làm:</label>
                    <br />
                    <textarea onChange={(e) => setFormInfo({ ...formInfo, dscv: e.target.value })} name="" id="complain" cols="61" rows="5" className="textarea input_text"></textarea>
                </div>
                <p className="completed-form">Chọn hình thức hoàn thành</p>
                <div className="form-group">
                    <input
                        onChange={(e) => setFormInfo({ ...formInfo, hinhThuc: { ...formInfo.hinhThuc, taiLop: !formInfo.hinhThuc.taiLop } })}
                        type="checkbox"
                        className=""
                        id="atClassName"
                        value="Tại lớp"
                    />
                    <label className="form-label">Những việc chưa làm sẽ được hoàn thành ngay tại lớp:</label>
                </div>
                <div className="form-group">
                    <input
                        onChange={(e) => setFormInfo({ ...formInfo, hinhThuc: { ...formInfo.hinhThuc, veNha: !formInfo.hinhThuc.veNha } })}
                        type="checkbox"
                        className=""
                        id="atHome"
                        value="Tại nhà"
                    />
                    <label className="form-label">Sẽ hoàn thành những việc chưa làm tại nhà và nộp cho giáo viên vào ngày hôm sau:</label>
                </div>
                <button onClick={(e) => handleSubmit(e)} className="form-submit">
                    Ghi nhận
                </button>
            </form>
            {result ? (
                <div className="result">
                    <h2 className="resultHeading">Thông tin phiếu theo dõi</h2>
                    <div className="resultTextContainer">
                        <p className="resultText">
                            Tên học sinh: {result.hoTen} - Lớp: {result.lop}
                        </p>
                    </div>
                    <div className="resultTextContainer">
                        <p className="resultText">
                            Ngày đăng ký: {result.ngay} - Giáo viên phụ trách: {result.giaoVien}
                        </p>
                    </div>
                    <div className="resultTextContainer">
                        <p className="resultText">Những công việc đã phân công nhưng chưa hoàn thành: {result.dscv}</p>
                    </div>
                    <div className="resultTextContainer">
                        <p className="resultText">
                            Cam kết sẽ hoàn thành tại: {result.hinhThuc.taiLop ? "Tại lớp    " : null} {result.hinhThuc.veNha ? "Tại nhà    " : null}
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Bai4;
