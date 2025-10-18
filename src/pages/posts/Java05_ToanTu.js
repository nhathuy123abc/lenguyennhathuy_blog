export default function Java05_ToanTu() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">
        Toán Tử Trong Java
      </h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        Java hỗ trợ các nhóm toán tử sau:
        
        🔹 Toán tử số học: +, -, *, /, %
        🔹 Toán tử so sánh: ==, !=, {'>'}, {'<'}, {'>='}, {'<='}
        🔹 Toán tử logic: &&, ||, !
        
        Ví dụ:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
{`int a = 5, b = 3;
System.out.println(a + b); // 8
System.out.println(a > b); // true
System.out.println(a == b && b < 10); // true`}
      </pre>
    </div>
  );
}
