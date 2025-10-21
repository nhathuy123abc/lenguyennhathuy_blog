export default function Network01_GioiThieu() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Giới Thiệu Lập Trình Mạng 🌐
      </h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Lập trình mạng (Network Programming) là lĩnh vực trong khoa học máy tính
        nghiên cứu và phát triển các ứng dụng có khả năng giao tiếp, trao đổi
        dữ liệu qua mạng máy tính. Mục tiêu của lập trình mạng là giúp các chương
        trình trên nhiều máy tính khác nhau có thể kết nối, gửi – nhận dữ liệu,
        và phối hợp hoạt động thông qua các giao thức truyền thông như TCP/IP,
        UDP, HTTP, FTP, v.v.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        🔹 Nội dung chính của lập trình mạng
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <strong>Kết nối giữa các máy tính:</strong> Sử dụng địa chỉ IP và cổng
          (port) để thiết lập kết nối giữa client và server.
        </li>
        <li>
          <strong>Giao thức mạng:</strong> Hiểu và sử dụng các giao thức tầng
          ứng dụng như HTTP (web), SMTP (email), hoặc tầng vận chuyển như TCP,
          UDP.
        </li>
        <li>
          <strong>Mô hình Client–Server:</strong> Client gửi yêu cầu (request),
          còn Server nhận và phản hồi (response).
        </li>
        <li>
          <strong>Lập trình socket:</strong> Socket là giao diện lập trình cho
          phép ứng dụng gửi và nhận dữ liệu qua mạng — đây là phần cốt lõi của
          lập trình mạng.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
        🔹 Ứng dụng của lập trình mạng
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          Xây dựng web server, chat server, ứng dụng chia sẻ file, trò chơi trực
          tuyến, hoặc IoT.
        </li>
        <li>
          Giao tiếp giữa các hệ thống phân tán hoặc dịch vụ web (Web Services,
          REST API, v.v.).
        </li>
      </ul>
    </div>
  );
}
