export default function Java06_CauTrucDieuKien() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">
        Cấu Trúc Điều Kiện Trong Java
      </h1>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
{`int age = 18;
if (age >= 18) {
  System.out.println("Đủ tuổi bầu cử");
} else {
  System.out.println("Chưa đủ tuổi");
}`}
      </pre>
      <p className="text-gray-700">Cấu trúc `if`, `else if`, `switch` đều được hỗ trợ.</p>
    </div>
  );
}
