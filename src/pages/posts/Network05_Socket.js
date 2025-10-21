export default function Network05_Socket() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Lập Trình Socket 🧱
      </h1>

      {/* 1️⃣ Socket là gì */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🌐 1. Socket là gì?
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Socket là một giao diện lập trình (API) cho phép chương trình gửi và nhận
        dữ liệu qua mạng. Nói đơn giản, socket là điểm cuối (endpoint) của một kết
        nối mạng giữa hai tiến trình (process).
      </p>
      <p className="text-gray-700 mb-4">
        👉 Mỗi kết nối mạng có <strong>hai socket</strong>: một ở phía client và
        một ở phía server. Khi hai socket kết nối với nhau, chúng tạo thành{" "}
        <strong>kênh truyền thông hai chiều</strong> (two-way communication
        channel).
      </p>

      {/* 2️⃣ Vai trò */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ 2. Vai trò của Socket trong lập trình mạng
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Socket là lớp trung gian giữa ứng dụng và hệ thống mạng của hệ điều hành.
        Khi bạn dùng Python, C hoặc Java để gửi dữ liệu, chương trình không trực
        tiếp thao tác với phần cứng mạng. Thay vào đó, hàm{" "}
        <code>socket()</code> sẽ gọi hệ điều hành để xử lý việc truyền nhận dữ
        liệu qua card mạng (Network Interface).
      </p>

      {/* 3️⃣ Cấu trúc */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧩 3. Cấu trúc của Socket
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Mỗi socket được định danh bằng bộ 4 thông tin (socket pair):
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-sm">
{`(IP nguồn, Port nguồn, IP đích, Port đích)

Ví dụ:
(192.168.1.2, 5000, 192.168.1.10, 80)`}
      </pre>
      <p className="text-gray-700 mb-4">
        → Nghĩa là: máy <code>192.168.1.2</code> (port 5000) đang gửi dữ liệu đến
        <code>192.168.1.10</code> (port 80 – thường là web server).
      </p>

      {/* 4️⃣ Các loại socket */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 4. Các loại socket chính
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Loại socket</th>
            <th className="p-2 border border-blue-200">Giao thức</th>
            <th className="p-2 border border-blue-200">Đặc điểm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">SOCK_STREAM</td>
            <td className="p-2 border border-blue-200">TCP</td>
            <td className="p-2 border border-blue-200">
              Hướng kết nối, đáng tin cậy
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">SOCK_DGRAM</td>
            <td className="p-2 border border-blue-200">UDP</td>
            <td className="p-2 border border-blue-200">
              Không kết nối, nhanh hơn, có thể mất gói
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">SOCK_RAW</td>
            <td className="p-2 border border-blue-200">IP trực tiếp</td>
            <td className="p-2 border border-blue-200">
              Dành cho xử lý gói tin thô (ít dùng)
            </td>
          </tr>
        </tbody>
      </table>

      {/* 5️⃣ Quá trình hoạt động */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔧 5. Quá trình hoạt động của Socket
      </h2>
      <h3 className="text-xl font-semibold text-blue-500 mb-1">🔹 a. Phía Server</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Tạo socket → socket()</li>
        <li>Gán IP và port → bind()</li>
        <li>Lắng nghe kết nối → listen()</li>
        <li>Chấp nhận kết nối → accept()</li>
        <li>Gửi / nhận dữ liệu → send(), recv()</li>
        <li>Đóng kết nối → close()</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">🔹 b. Phía Client</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li>Tạo socket → socket()</li>
        <li>Kết nối đến server → connect()</li>
        <li>Gửi / nhận dữ liệu → send(), recv()</li>
        <li>Đóng kết nối → close()</li>
      </ul>

      {/* 6️⃣ TCP Socket Example */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        💻 6. Ví dụ minh họa – TCP Socket
      </h2>

      <p className="text-blue-800 font-semibold mb-1">🔸 Server (TCP)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`import socket

# Tạo socket TCP (AF_INET = IPv4, SOCK_STREAM = TCP)
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Gán IP và port cho server
server.bind(('localhost', 9999))

# Lắng nghe kết nối
server.listen(1)
print("Server đang chờ kết nối...")

# Chấp nhận kết nối từ client
conn, addr = server.accept()
print("Kết nối từ:", addr)

# Nhận dữ liệu
data = conn.recv(1024).decode()
print("Nhận:", data)

# Gửi phản hồi
conn.send("Server đã nhận được dữ liệu!".encode())

# Đóng kết nối
conn.close()`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">🔸 Client (TCP)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`import socket

# Tạo socket TCP
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Kết nối tới server
client.connect(('localhost', 9999))

# Gửi dữ liệu
client.send("Xin chào server!".encode())

# Nhận phản hồi
data = client.recv(1024).decode()
print("Phản hồi:", data)

# Đóng kết nối
client.close()`}
      </pre>

      <p className="text-gray-700 mb-6 leading-relaxed">
        🧾 <strong>Kết quả:</strong> Server in ra “Nhận: Xin chào server!” và Client
        in ra “Phản hồi: Server đã nhận được dữ liệu!”.
      </p>

      {/* 7️⃣ UDP Socket Example */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚡ 7. Ví dụ – UDP Socket
      </h2>

      <p className="text-blue-800 font-semibold mb-1">🔸 Server (UDP)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`import socket

server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server.bind(('localhost', 9999))
print("Server UDP đang chạy...")

while True:
    data, addr = server.recvfrom(1024)
    print("Nhận từ", addr, ":", data.decode())
    server.sendto("Đã nhận dữ liệu UDP!".encode(), addr)`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">🔸 Client (UDP)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`import socket

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client.sendto("Xin chào server UDP!".encode(), ('localhost', 9999))

data, addr = client.recvfrom(1024)
print("Phản hồi:", data.decode())`}
      </pre>

      <p className="text-gray-700 mb-6">
        📘 <strong>Điểm khác biệt:</strong> UDP không cần listen() hay connect() —
        nó chỉ gửi và nhận trực tiếp.
      </p>

      {/* 8️⃣ Các hàm socket */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔍 8. Một số hàm socket quan trọng
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Hàm</th>
            <th className="p-2 border border-blue-200">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">socket()</td>
            <td className="p-2 border border-blue-200">Tạo socket mới</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">bind()</td>
            <td className="p-2 border border-blue-200">
              Gán IP và port cho socket
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">listen()</td>
            <td className="p-2 border border-blue-200">Cho phép chờ kết nối</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">accept()</td>
            <td className="p-2 border border-blue-200">
              Nhận kết nối từ client
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">connect()</td>
            <td className="p-2 border border-blue-200">
              Kết nối đến server
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">send() / sendto()</td>
            <td className="p-2 border border-blue-200">Gửi dữ liệu</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">recv() / recvfrom()</td>
            <td className="p-2 border border-blue-200">Nhận dữ liệu</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">close()</td>
            <td className="p-2 border border-blue-200">Đóng socket</td>
          </tr>
        </tbody>
      </table>

      {/* 9️⃣ Mô hình minh họa */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧩 9. Mô hình minh họa đơn giản
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm">
{`Client (Socket)                 Server (Socket)
   |                                 |
   | ---->  connect()  ------------> |
   | <----  accept()   --------------|
   | ---->  send("Hi") ------------> |
   | <----  recv("Hello") ---------- |
   | ---->  close()  ----------------|`}
      </pre>

      {/* 🔟 Tổng kết */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 10. Tổng kết kiến thức
      </h2>
      <table className="w-full text-left border border-blue-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Nội dung</th>
            <th className="p-2 border border-blue-200">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Socket</td>
            <td className="p-2 border border-blue-200">
              Giao diện để giao tiếp qua mạng
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">TCP Socket</td>
            <td className="p-2 border border-blue-200">
              Dữ liệu đáng tin cậy, có kết nối
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">UDP Socket</td>
            <td className="p-2 border border-blue-200">
              Dữ liệu nhanh, không kết nối
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Hàm chính (socket, bind, connect…)
            </td>
            <td className="p-2 border border-blue-200">
              Thực hiện các thao tác giao tiếp mạng
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Ứng dụng</td>
            <td className="p-2 border border-blue-200">
              Web, Chat, Game, IoT, File transfer...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
