export default function Java08_Mang() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">📦 Mảng Trong Java</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Mảng lưu trữ nhiều giá trị cùng kiểu dữ liệu trong một biến.</p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`int[] numbers = {1, 2, 3, 4, 5};
for (int n : numbers) {
  System.out.println(n);
}`}
        </pre>
      </div>
    </div>
  );
}
