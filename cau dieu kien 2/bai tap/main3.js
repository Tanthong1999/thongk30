function nhapSo(so) {
    document.getElementById('display').value += so;
  }

  function thucHienPhepToan(phepToan) {
    document.getElementById('display').value += phepToan;
  }

  function xoaManHinh() {
    document.getElementById('display').value = '';
  }

  function KetQua() {
    try {
      var ketQua = eval(document.getElementById('display').value);
      document.getElementById('display').value = ketQua;
    } catch (error) {
      document.getElementById('display').value = 'Lỗi';
    }
  }