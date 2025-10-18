export default function Java06_CauTrucDieuKien() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">🧠 Cấu Trúc Điều Kiện</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Dùng để ra quyết định dựa vào điều kiện đúng hoặc sai.</p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`int age = 18;
if (age >= 18) {
  System.out.println("Đủ tuổi!");
} else {
  System.out.println("Chưa đủ tuổi!");
}`}
        </pre>
      </div>
    </div>
  );
}
