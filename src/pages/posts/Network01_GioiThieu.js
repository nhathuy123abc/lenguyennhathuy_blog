export default function Network01_GioiThieu() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Giới Thiệu Lập Trình Mạng 🌐
      </h1>
      <p className="text-gray-700 mb-4">
        Lập trình mạng là kỹ năng cho phép máy tính giao tiếp, trao đổi dữ liệu
        với nhau thông qua Internet hoặc mạng nội bộ. Đây là nền tảng của mọi
        ứng dụng trực tuyến như web, chat, game, API, v.v.
      </p>
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        🧠 Các khái niệm cơ bản
      </h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>IP Address – Địa chỉ định danh mỗi thiết bị trong mạng.</li>
        <li>Port – Cổng giao tiếp giữa ứng dụng và hệ thống.</li>
        <li>TCP & UDP – Hai giao thức truyền dữ liệu phổ biến.</li>
        <li>Socket – Cầu nối giúp hai máy tính gửi và nhận dữ liệu.</li>
      </ul>
    </div>
  );
}
