export default function Java09_Ham() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Hàm Trong Java</h1>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
{`public static int tong(int a, int b) {
  return a + b;
}

public static void main(String[] args) {
  System.out.println(tong(5, 3)); // 8
}`}
      </pre>
      <p className="text-gray-700">Hàm giúp chia nhỏ chương trình thành các phần dễ quản lý.</p>
    </div>
  );
}
