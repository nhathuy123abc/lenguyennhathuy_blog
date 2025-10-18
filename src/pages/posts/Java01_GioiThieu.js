export default function Java01_GioiThieu() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
        Giới Thiệu Java ☕
      </h1>
      <div className="space-y-5 leading-relaxed">
        <p>
          🔹 Java là ngôn ngữ lập trình hướng đối tượng mạnh mẽ, được phát triển
          bởi Sun Microsystems (nay là Oracle).
        </p>
        <p>🔸 Ưu điểm nổi bật của Java:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Chạy đa nền tảng — “Write once, run anywhere”.</li>
          <li>Bảo mật cao và có Garbage Collector tự động.</li>
          <li>Cộng đồng lớn, tài liệu học phong phú.</li>
        </ul>
        <p>
          💡 Java thường được dùng để phát triển ứng dụng Android, web backend
          và phần mềm doanh nghiệp.
        </p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`public class Hello {
  public static void main(String[] args) {
    System.out.println("Xin chào Java!");
  }
}`}
        </pre>
      </div>
    </div>
  );
}
