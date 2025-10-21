export default function Network04_ClientServer() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Mô Hình Client – Server 🖥️
      </h1>

      {/* 1️⃣ Khái niệm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🌐 1. Khái niệm mô hình Client–Server
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Client–Server là mô hình giao tiếp cơ bản trong lập trình mạng, trong đó:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>
          <strong>Server (máy chủ):</strong> Là chương trình chờ và xử lý yêu cầu
          từ phía client.
        </li>
        <li>
          <strong>Client (máy khách):</strong> Là chương trình gửi yêu cầu đến
          server và nhận phản hồi.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        👉 Nói cách khác, <strong>client hỏi – server trả lời</strong>. Ví dụ: khi
        bạn mở trình duyệt và truy cập “google.com”, trình duyệt là client, còn máy
        chủ của Google là server.
      </p>

      {/* 2️⃣ Cách thức hoạt động */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ 2. Cách thức hoạt động
      </h2>
      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-1">
        <li>Server khởi động → mở socket và “lắng nghe” trên một port cụ thể.</li>
        <li>
          Client khởi tạo kết nối → gửi yêu cầu đến IP và cổng của server.
        </li>
        <li>Server chấp nhận → nhận dữ liệu, xử lý, gửi lại phản hồi.</li>
        <li>Client nhận phản hồi → hiển thị hoặc xử lý kết quả.</li>
        <li>Đóng kết nối khi hoàn tất.</li>
      </ol>

      {/* 3️⃣ Cấu trúc */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧩 3. Cấu trúc lập trình Client–Server
      </h2>
      <h3 className="text-xl font-semibold text-blue-500 mb-1">🔹 a. Phía Server</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>Tạo socket (<code>socket()</code>).</li>
        <li>Gán địa chỉ và cổng (<code>bind()</code>).</li>
        <li>Lắng nghe kết nối (<code>listen()</code>).</li>
        <li>Chấp nhận kết nối (<code>accept()</code>).</li>
        <li>Nhận & gửi dữ liệu (<code>recv()</code>, <code>send()</code>).</li>
        <li>Đóng kết nối (<code>close()</code>).</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">🔹 b. Phía Client</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-1">
        <li>Tạo socket (<code>socket()</code>).</li>
        <li>Kết nối đến server (<code>connect()</code>).</li>
        <li>Gửi và nhận dữ liệu (<code>send()</code>, <code>recv()</code>).</li>
        <li>Đóng kết nối (<code>close()</code>).</li>
      </ul>

      {/* 4️⃣ Ví dụ Python */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        💻 4. Ví dụ minh họa: TCP Client–Server bằng Python
      </h2>

      <p className="text-blue-800 font-semibold mb-1">🔸 Server (server.py)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`import socket

# Tạo socket TCP
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Gán IP và port cho server
server.bind(('localhost', 9999))

# Cho phép lắng nghe 1 kết nối
server.listen(1)
print("Server đang chờ kết nối...")

# Chấp nhận kết nối từ client
conn, addr = server.accept()
print("Kết nối từ:", addr)

# Nhận dữ liệu từ client
data = conn.recv(1024).decode()
print("Nhận:", data)

# Gửi phản hồi về client
conn.send("Xin chào, tôi là server!".encode())

# Đóng kết nối
conn.close()`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">🔸 Client (client.py)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`import socket

# Tạo socket TCP
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Kết nối đến server
client.connect(('localhost', 9999))

# Gửi dữ liệu đến server
client.send("Chào server, tôi là client!".encode())

# Nhận phản hồi từ server
data = client.recv(1024).decode()
print("Phản hồi:", data)

# Đóng kết nối
client.close()`}
      </pre>

      <p className="text-gray-700 mb-6 leading-relaxed">
        🧠 <strong>Kết quả:</strong> <br />
        • Server hiển thị: “Server đang chờ kết nối…” và “Nhận: Chào server, tôi
        là client!”. <br />
        • Client hiển thị: “Phản hồi: Xin chào, tôi là server!”.
      </p>

      {/* 5️⃣ Mở rộng */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🌍 5. Mở rộng mô hình
      </h2>
      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 a. Multi-Client Server
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Một server có thể phục vụ nhiều client cùng lúc bằng{" "}
        <strong>đa luồng (multithreading)</strong> hoặc{" "}
        <strong>đa tiến trình (multiprocessing)</strong>. Ví dụ: server chat, game.
      </p>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 b. Client–Server qua Internet
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Thay <code>localhost</code> bằng địa chỉ IP thật (VD:{" "}
        <code>192.168.1.10</code>) để các máy khác trong mạng kết nối. Cần mở{" "}
        <strong>cổng (port)</strong> trên firewall hoặc router nếu kết nối qua Internet.
      </p>

      {/* 6️⃣ Ưu nhược điểm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔐 6. Ưu điểm & Hạn chế
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Ưu điểm</th>
            <th className="p-2 border border-blue-200">Hạn chế</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">
              Dễ quản lý dữ liệu (tập trung tại server)
            </td>
            <td className="p-2 border border-blue-200">
              Nếu server lỗi → toàn hệ thống ngừng
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Dễ bảo mật, sao lưu
            </td>
            <td className="p-2 border border-blue-200">
              Phụ thuộc vào tốc độ mạng
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Hỗ trợ nhiều client cùng lúc
            </td>
            <td className="p-2 border border-blue-200">
              Cần tài nguyên mạnh cho server
            </td>
          </tr>
        </tbody>
      </table>

      {/* 7️⃣ Ứng dụng */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧭 7. Ứng dụng thực tế
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Ứng dụng</th>
            <th className="p-2 border border-blue-200">Giao thức</th>
            <th className="p-2 border border-blue-200">Vai trò</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">
              Web browser ↔ Web server
            </td>
            <td className="p-2 border border-blue-200">HTTP/HTTPS (TCP)</td>
            <td className="p-2 border border-blue-200">Truy cập trang web</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Ứng dụng chat</td>
            <td className="p-2 border border-blue-200">TCP/UDP</td>
            <td className="p-2 border border-blue-200">Trao đổi tin nhắn</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Game online</td>
            <td className="p-2 border border-blue-200">UDP</td>
            <td className="p-2 border border-blue-200">
              Gửi vị trí, hành động nhân vật
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Email client (Outlook, Gmail)
            </td>
            <td className="p-2 border border-blue-200">SMTP/IMAP/POP3</td>
            <td className="p-2 border border-blue-200">Gửi & nhận thư</td>
          </tr>
        </tbody>
      </table>

      {/* Tổng kết */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧠 Tổng kết</h2>
      <p className="text-gray-700 leading-relaxed">
        Client–Server là mô hình nền tảng trong lập trình mạng, nơi{" "}
        <strong>client gửi yêu cầu</strong> và{" "}
        <strong>server phản hồi qua socket</strong>. Thường dùng với TCP (đảm bảo)
        hoặc UDP (nhanh, không đảm bảo). Đây là cơ sở của hầu hết các ứng dụng
        mạng hiện nay như web, chat, game, cloud, và IoT.
      </p>
    </div>
  );
}
