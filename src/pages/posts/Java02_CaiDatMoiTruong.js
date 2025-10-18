export default function Java02_CaiDatMoiTruong() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Cài Đặt Môi Trường Java 🧩</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Bước 1: Tải JDK (Java Development Kit)</p>
        <p>Truy cập: <a href="https://www.oracle.com/java/technologies/downloads/" className="text-blue-600 hover:underline">https://www.oracle.com/java/technologies/downloads/</a></p>
        <p>🔹 Bước 2: Cài đặt và kiểm tra phiên bản Java:</p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`java -version
javac -version`}
        </pre>
        <p>✅ Nếu hiển thị phiên bản như <code>java version "17.0.2"</code> thì bạn đã cài thành công.</p>
        <p>🔹 Bước 3: Cài đặt IDE: IntelliJ IDEA, Eclipse hoặc VS Code.</p>
      </div>
    </div>
  );
}
