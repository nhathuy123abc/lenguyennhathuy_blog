export default function Java04_KieuDuLieu() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Kiểu Dữ Liệu Trong Java 💾</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Java có hai nhóm kiểu dữ liệu:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Kiểu nguyên thủy: int, double, char, boolean...</li>
          <li>Kiểu tham chiếu: String, Object, mảng...</li>
        </ul>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`int age = 20;
double pi = 3.14;
char grade = 'A';
boolean isJavaFun = true;
String name = "Huy";`}
        </pre>
      </div>
    </div>
  );
}
