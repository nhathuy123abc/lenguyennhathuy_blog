export default function Java07_VongLap() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">🔁 Vòng Lặp Trong Java</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Vòng lặp giúp thực hiện lặp lại các câu lệnh khi điều kiện còn đúng.</p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`for (int i = 1; i <= 5; i++) {
  System.out.println("Lần " + i);
}`}
        </pre>
      </div>
    </div>
  );
}
