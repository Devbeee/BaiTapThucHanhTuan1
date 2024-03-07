import './Bai4.css'
function Bai4() {
  return (
    <div class="main">
      <form class="form_container">
        <h1 class="form__header">THEO DÕI HỌC TẬP</h1>
        <img src="./img/bút chì.png" alt="" class="form__img" />
        <div class="form-group">
          <label class="form-label" for="fullname">
            Họ tên học sinh:
          </label>
          <input class="form-control input_text" type="text" id="fullname" />
        </div>
        <div class="form-group">
          <label class="form-label" for="teacher">
            Giáo viên phụ trách:
          </label>
          <input class="form-control input_text" type="text" id="teacher" />
        </div>
        <div class="form-group display-inline-block">
          <label class="form-label-mini" for="class">
            Lớp:
          </label>
          <input class="form-control-mini input_text" type="text" id="class" />
        </div>
        <div class="form-group display-inline-block">
          <label class="form-label-mini" for="date">
            Ngày:
          </label>
          <input
            class="form-control-mini input_text"
            type="text"
            id="date"
            placeholder="dd//mm/yyyy"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="complain">
            Những việc phân công chưa làm:
          </label>
          <br />
          <textarea
            name=""
            id="complain"
            cols="61"
            rows="5"
            class="textarea input_text"
          ></textarea>
        </div>
        <p class="completed-form">Chọn hình thức hoàn thành</p>
        <div class="form-group">
          <input type="checkbox" class="" id="atClass" value="Tại lớp" />
          <label class="form-label">
            Những việc chưa làm sẽ được hoàn thành ngay tại lớp:
          </label>
        </div>
        <div class="form-group">
          <input type="checkbox" class="" id="atHome" value="Tại nhà" />
          <label class="form-label">
            Sẽ hoàn thành những việc chưa làm tại nhà và nộp cho giáo viên vào
            ngày hôm sau:
          </label>
        </div>
        <button class="form-submit">Ghi nhận</button>
      </form>
    </div>
  );
}

export default Bai4;
