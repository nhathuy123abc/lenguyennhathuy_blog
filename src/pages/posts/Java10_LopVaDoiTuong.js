export default function Java10_LopVaDoiTuong() {
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">🧩 Lớp & Đối Tượng Trong Java</h1>
      <div className="space-y-5 leading-relaxed">
        <p>🔹 Java là ngôn ngữ hướng đối tượng, dựa trên khái niệm “class” và “object”.</p>
        <pre className="bg-black text-green-300 p-4 rounded-lg">
{`class Student {
  String name;
  int age;

  void study() {
    System.out.println(name + " đang học Java");
  }
}

public class Main {
  public static void main(String[] args) {
    Student s = new Student();
    s.name = "Huy";
    s.age = 20;
    s.study();
  }
}`}
        </pre>
      </div>
    </div>
  );
}
