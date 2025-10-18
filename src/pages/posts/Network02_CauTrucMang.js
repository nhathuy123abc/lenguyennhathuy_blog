export default function Network02_CauTrucMang() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Cấu Trúc Mạng & Giao Thức 🧩
      </h1>
      <p className="text-gray-700 mb-4">
        Mạng máy tính được chia thành nhiều tầng (layer) theo mô hình OSI và TCP/IP.
        Mỗi tầng đảm nhiệm vai trò khác nhau trong việc truyền tải dữ liệu.
      </p>
      <h2 className="text-2xl font-semibold text-blue-600 mt-4 mb-2">
        📶 Mô hình OSI gồm 7 tầng:
      </h2>
      <ul className="list-decimal ml-6 text-gray-700">
        <li>Application</li>
        <li>Presentation</li>
        <li>Session</li>
        <li>Transport</li>
        <li>Network</li>
        <li>Data Link</li>
        <li>Physical</li>
      </ul>
    </div>
  );
}
