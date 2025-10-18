export default function Java03_HelloWorld() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Chương Trình Hello World 👋</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Đây là chương trình đầu tiên trong hành trình học Java.</p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Xin chào Java!");
  }
}`}
        </pre>
        <p>💡 Kết quả hiển thị: <code>Xin chào Java!</code></p>
      </div>
    </div>
  );
}
