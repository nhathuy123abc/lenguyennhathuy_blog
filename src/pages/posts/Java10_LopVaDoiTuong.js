export default function Java10_LopVaDoiTuong() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">
        Lớp Và Đối Tượng Trong Java
      </h1>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
{`class SinhVien {
  String ten;
  int tuoi;

  void hienThi() {
    System.out.println(ten + " - " + tuoi);
  }
}

public class Main {
  public static void main(String[] args) {
    SinhVien sv = new SinhVien();
    sv.ten = "Huy";
    sv.tuoi = 20;
    sv.hienThi();
  }
}`}
      </pre>
      <p className="text-gray-700">Đây là nền tảng của lập trình hướng đối tượng trong Java.</p>
    </div>
  );
}
