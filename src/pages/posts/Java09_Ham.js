export default function Java09_Ham() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">💡 Hàm Trong Java</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Hàm là khối mã có thể tái sử dụng nhiều lần trong chương trình.</p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`int tong(int a, int b) {
  return a + b;
}

public static void main(String[] args) {
  System.out.println(tong(3, 5)); // 8
}`}
        </pre>
      </div>
    </div>
  );
}
