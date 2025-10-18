export default function Java05_ToanTu() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">🧮 Toán Tử Trong Java</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Java hỗ trợ nhiều loại toán tử khác nhau.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Số học: +, -, *, /, %</li>
          <li>So sánh: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li>Logic: &&, ||, !</li>
        </ul>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`int a = 5, b = 3;
System.out.println(a + b); // 8
System.out.println(a > b); // true
System.out.println(a == b && b < 10); // true`}
        </pre>
      </div>
    </div>
  );
}
