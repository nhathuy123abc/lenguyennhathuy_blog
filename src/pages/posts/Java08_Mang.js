export default function Java08_Mang() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Mảng Trong Java</h1>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
{`int[] numbers = {1, 2, 3, 4, 5};
for (int n : numbers) {
  System.out.println(n);
}`}
      </pre>
      <p className="text-gray-700">Mảng giúp lưu trữ nhiều giá trị cùng kiểu dữ liệu.</p>
    </div>
  );
}
