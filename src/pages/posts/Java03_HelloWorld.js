export default function Java03_HelloWorld() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">
        Viết Chương Trình “Hello World” Trong Java
      </h1>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Xin chào Java!");
  }
}`}
      </pre>
      <p className="text-gray-700 leading-relaxed">
        💡 Giải thích:
        <br />- <code>class HelloWorld</code>: khai báo lớp.
        <br />- <code>main()</code>: điểm bắt đầu của chương trình.
        <br />- <code>System.out.println()</code>: in ra màn hình.
      </p>
    </div>
  );
}
