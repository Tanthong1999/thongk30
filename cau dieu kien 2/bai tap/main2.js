
function tinhSoNgayTrongThang() {
    // Lấy giá trị năm và tháng từ các ô input
    var nam = document.getElementById("nam").value;
    var thang = document.getElementById("thang").value;

    // Kiểm tra tính hợp lệ của năm và tháng
    if (nam === "" || thang === "") {
      alert("Vui lòng nhập đầy đủ năm và tháng.");
      return;
    }

    // Chuyển đổi năm và tháng thành số nguyên
    nam = parseInt(nam);
    thang = parseInt(thang);

    // Kiểm tra tính hợp lệ của tháng
    if (thang < 1 || thang > 12) {
      alert("Tháng không hợp lệ. Vui lòng nhập tháng từ 1 đến 12.");
      return;
    }

    // Tạo đối tượng Date với ngày là 1 và tháng, năm được nhập
    var date = new Date(nam, thang - 1, 1);

    // Lấy ngày cuối cùng của tháng bằng cách trừ 1 ngày từ ngày đầu tiên của tháng tiếp theo
    var ngayCuoiCung = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // Tính số ngày trong tháng
    var soNgay = ngayCuoiCung.getDate();

    // Hiển thị kết quả
    document.getElementById("ketQua").innerHTML = "Số ngày trong tháng " + thang + "/" + nam + " là: " + soNgay;
  }