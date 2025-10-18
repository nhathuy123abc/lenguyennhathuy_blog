export default function Java02_CaiDatMoiTruong() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">
        Cài Đặt Môi Trường Lập Trình Java
      </h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        🔹 Bước 1: Tải JDK
        Truy cập: https://www.oracle.com/java/technologies/downloads/

        🔹 Bước 2: Cài đặt và kiểm tra
        Mở terminal hoặc CMD:
        {"\n"}java -version
        {"\n"}javac -version

        🔹 Bước 3: Cài IDE
        - IntelliJ IDEA
        - Eclipse
        - VS Code (kèm plugin Java)

        Sau khi cài xong, bạn đã sẵn sàng viết chương trình đầu tiên bằng Java.
      </p>
    </div>
  );
}
