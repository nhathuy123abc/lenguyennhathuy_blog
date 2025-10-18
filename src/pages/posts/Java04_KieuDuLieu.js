export default function Java04_KieuDuLieu() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">
        Kiểu Dữ Liệu Trong Java
      </h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        Java có 2 nhóm kiểu dữ liệu:
        
        🔹 1. Kiểu nguyên thủy (Primitive)
        - int, float, double, boolean, char, byte, short, long
        
        🔹 2. Kiểu đối tượng (Non-Primitive)
        - String, Array, Class, Interface
        
        Ví dụ:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4">
{`int age = 20;
double salary = 1500.5;
boolean isJavaFun = true;
String name = "Huy";`}
      </pre>
    </div>
  );
}
