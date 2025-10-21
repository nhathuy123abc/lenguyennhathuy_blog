export default function Network03_TCP_UDP() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Kết Nối TCP & UDP ⚙️
      </h1>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🌐 1. Tổng quan về TCP và UDP
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Cả TCP (Transmission Control Protocol) và UDP (User Datagram Protocol)
        đều là giao thức tầng vận chuyển (Transport Layer) trong mô hình TCP/IP.
        Chúng có nhiệm vụ truyền dữ liệu giữa hai ứng dụng trên mạng — nhưng cách
        chúng hoạt động lại rất khác nhau.
      </p>

      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Đặc điểm</th>
            <th className="p-2 border border-blue-200">TCP</th>
            <th className="p-2 border border-blue-200">UDP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Kiểu truyền</td>
            <td className="p-2 border border-blue-200">Kết nối (Connection-oriented)</td>
            <td className="p-2 border border-blue-200">Không kết nối (Connectionless)</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Độ tin cậy</td>
            <td className="p-2 border border-blue-200">Đảm bảo dữ liệu đến đúng, đủ, theo thứ tự</td>
            <td className="p-2 border border-blue-200">Không đảm bảo (có thể mất hoặc đảo thứ tự gói)</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Tốc độ</td>
            <td className="p-2 border border-blue-200">Chậm hơn do kiểm tra và xác nhận</td>
            <td className="p-2 border border-blue-200">Nhanh hơn, ít kiểm tra</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Ứng dụng</td>
            <td className="p-2 border border-blue-200">Web, Email, FTP, SSH...</td>
            <td className="p-2 border border-blue-200">Game, VoIP, Video streaming...</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Đơn vị dữ liệu</td>
            <td className="p-2 border border-blue-200">Luồng (Stream)</td>
            <td className="p-2 border border-blue-200">Gói tin (Datagram)</td>
          </tr>
        </tbody>
      </table>

      {/* TCP Section */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ 2. Cơ chế hoạt động của TCP
      </h2>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">🔹 a. Đặc điểm chính</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        TCP là giao thức hướng kết nối (connection-oriented). Trước khi truyền
        dữ liệu, TCP thiết lập kết nối giữa client và server để đảm bảo:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Gói tin đến đúng thứ tự.</li>
        <li>Không mất mát dữ liệu.</li>
        <li>Phát hiện và gửi lại nếu có lỗi.</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔹 b. Quá trình 3 bước bắt tay (Three-way Handshake)
      </h3>
      <ol className="list-decimal ml-6 text-gray-700 mb-4 space-y-1">
        <li>Client → Server: Gửi gói SYN (yêu cầu kết nối).</li>
        <li>Server → Client: Gửi SYN-ACK (đồng ý kết nối).</li>
        <li>Client → Server: Gửi ACK (xác nhận).</li>
      </ol>
      <p className="text-gray-700 mb-4">
        Khi hoàn tất 3 bước này, hai bên thiết lập kênh truyền ổn định và an toàn.
      </p>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔹 c. Truyền và xác nhận dữ liệu
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        TCP chia dữ liệu thành các segment, gắn số thứ tự (sequence number) và
        mã kiểm tra (checksum) để phát hiện lỗi, đảm bảo dữ liệu đến đúng vị trí.
        Nếu gói bị mất hoặc sai, TCP sẽ tự động gửi lại.
      </p>

      <h3 className="text-xl font-semibold text-blue-500 mb-2">
        🔹 d. Ví dụ: TCP Client – Server trong Python
      </h3>

      <p className="text-blue-800 font-semibold mb-1">Server:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 12345))
server.listen(1)
print("Server đang chờ kết nối...")

conn, addr = server.accept()
print("Kết nối từ:", addr)

data = conn.recv(1024).decode()
print("Nhận:", data)
conn.send("Đã nhận dữ liệu!".encode())

conn.close()`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">Client:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 12345))
client.send("Xin chào server!".encode())

data = client.recv(1024).decode()
print("Phản hồi:", data)

client.close()`}
      </pre>

      {/* UDP Section */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚡ 3. Cơ chế hoạt động của UDP
      </h2>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">🔹 a. Đặc điểm chính</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        UDP là giao thức không kết nối (connectionless). Nó gửi dữ liệu trực tiếp
        đến địa chỉ IP và port đích mà không cần thiết lập kết nối hay xác nhận
        phản hồi. UDP nhanh, nhẹ, và rất phù hợp cho các ứng dụng thời gian thực.
      </p>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">🔹 b. Ứng dụng</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Game online – truyền vị trí nhân vật liên tục, mất vài gói không sao.</li>
        <li>Video call / streaming – ưu tiên độ trễ thấp hơn độ chính xác.</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-500 mb-2">
        🔹 c. Ví dụ: UDP Client – Server trong Python
      </h3>

      <p className="text-blue-800 font-semibold mb-1">Server:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`import socket

server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server.bind(('localhost', 12345))
print("Server UDP đang chạy...")

while True:
    data, addr = server.recvfrom(1024)
    print("Nhận từ", addr, ":", data.decode())
    server.sendto("Đã nhận!".encode(), addr)`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">Client:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`import socket

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client.sendto("Xin chào server UDP!".encode(), ('localhost', 12345))

data, addr = client.recvfrom(1024)
print("Phản hồi:", data.decode())`}
      </pre>

      {/* Comparison Table */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔍 4. So sánh chi tiết TCP và UDP
      </h2>

      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Tiêu chí</th>
            <th className="p-2 border border-blue-200">TCP</th>
            <th className="p-2 border border-blue-200">UDP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Kết nối</td>
            <td className="p-2 border border-blue-200">Phải thiết lập trước (3-way handshake)</td>
            <td className="p-2 border border-blue-200">Không cần kết nối</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Độ tin cậy</td>
            <td className="p-2 border border-blue-200">Cao – có cơ chế ACK, resend</td>
            <td className="p-2 border border-blue-200">Thấp – không kiểm tra lỗi</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Tốc độ</td>
            <td className="p-2 border border-blue-200">Chậm hơn</td>
            <td className="p-2 border border-blue-200">Nhanh hơn</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Truyền dữ liệu</td>
            <td className="p-2 border border-blue-200">Liên tục (stream)</td>
            <td className="p-2 border border-blue-200">Rời rạc (packet)</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Trật tự dữ liệu</td>
            <td className="p-2 border border-blue-200">Bảo đảm</td>
            <td className="p-2 border border-blue-200">Không đảm bảo</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Kiểm soát luồng</td>
            <td className="p-2 border border-blue-200">Có (flow control)</td>
            <td className="p-2 border border-blue-200">Không có</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Kích thước gói</td>
            <td className="p-2 border border-blue-200">Linh hoạt</td>
            <td className="p-2 border border-blue-200">Giới hạn (~64 KB)</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Ứng dụng thực tế</td>
            <td className="p-2 border border-blue-200">HTTP, HTTPS, FTP, Email, SSH</td>
            <td className="p-2 border border-blue-200">DNS, VoIP, video stream, game</td>
          </tr>
        </tbody>
      </table>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧠 5. Kết luận</h2>
      <p className="text-gray-700 leading-relaxed">
        <strong>TCP</strong>: Dùng khi độ tin cậy quan trọng hơn tốc độ — như web,
        email, truyền file.<br />
        <strong>UDP</strong>: Dùng khi tốc độ và thời gian thực quan trọng hơn độ
        chính xác — như game, voice, video.<br />
        Cả hai đều dựa trên IP để định tuyến, nhưng khác nhau trong cách truyền và
        kiểm soát dữ liệu.
      </p>
    </div>
  );
}
