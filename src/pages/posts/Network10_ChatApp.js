export default function Network10_ChatApp() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        💬 Chat App – Ứng Dụng Trò Chuyện Qua Mạng
      </h1>

      <p className="text-gray-700 mb-6">
        Đây là ví dụ điển hình cho việc vận dụng lập trình mạng (socket, client-server, đa luồng, bảo mật) trong thực tế.
        Bài này hướng dẫn bạn hiểu từ nguyên lý hoạt động → cấu trúc chương trình → code minh họa, kèm phần mở rộng như chat nhóm, mã hóa và REST API.
      </p>

      {/* 1️⃣ Khái niệm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧠 1. Khái niệm Chat App là gì?</h2>
      <p className="text-gray-700 mb-4">
        Chat App là chương trình cho phép nhiều người dùng gửi và nhận tin nhắn thời gian thực (real-time) qua Internet hoặc LAN.
      </p>
      <p className="text-gray-700 mb-6">
        💡 <strong>Ví dụ:</strong> Zalo, Messenger, Telegram, Discord, Slack,...
      </p>

      {/* 2️⃣ Nguyên lý hoạt động */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">⚙️ 2. Nguyên lý hoạt động</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li>Server khởi động, lắng nghe kết nối trên port cụ thể.</li>
        <li>Client kết nối đến server qua IP + port.</li>
        <li>Server tạo thread riêng cho từng client.</li>
        <li>Khi 1 client gửi tin → server broadcast đến tất cả client khác.</li>
        <li>Mọi client đều nhận được tin nhắn theo thời gian thực.</li>
      </ul>

      {/* 3️⃣ Sơ đồ */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🌐 3. Cấu trúc tổng quát</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 overflow-x-auto text-sm">
{`          ┌────────────────────┐
          │      Server        │
          │  - Lắng nghe TCP   │
          │  - Tạo thread mỗi client
          │  - Gửi lại tin nhắn (broadcast)
          └─────────┬──────────┘
                    │
     ┌──────────────┴──────────────┐
     ▼                             ▼
  Client A                     Client B
(Gửi tin nhắn)              (Nhận tin nhắn)`}
      </pre>

      {/* 4️⃣ Code ví dụ */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        💻 4. Ví dụ: Chat App đơn giản bằng Python (TCP + Đa luồng)
      </h2>

      <p className="text-blue-800 font-semibold mb-1">🔸 Server (chat_server.py)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-sm overflow-x-auto">
{`import socket
import threading

clients = []

def handle_client(conn, addr):
    print(f"Client {addr} đã kết nối.")
    while True:
        try:
            msg = conn.recv(1024).decode()
            if not msg:
                break
            print(f"{addr}: {msg}")
            broadcast(f"{addr}: {msg}", conn)
        except:
            break
    conn.close()
    clients.remove(conn)
    print(f"Client {addr} đã ngắt kết nối.")

def broadcast(message, sender_conn):
    for client in clients:
        if client != sender_conn:
            try:
                client.send(message.encode())
            except:
                client.close()
                clients.remove(client)

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 9999))
server.listen()
print("Server đang chạy...")

while True:
    conn, addr = server.accept()
    clients.append(conn)
    thread = threading.Thread(target=handle_client, args=(conn, addr))
    thread.start()`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">🔸 Client (chat_client.py)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`import socket
import threading

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 9999))

def receive_messages():
    while True:
        try:
            msg = client.recv(1024).decode()
            print(msg)
        except:
            print("Đã mất kết nối tới server.")
            client.close()
            break

def send_messages():
    while True:
        msg = input()
        client.send(msg.encode())

threading.Thread(target=receive_messages).start()
threading.Thread(target=send_messages).start()`}
      </pre>

      <p className="text-gray-700 mb-6">
        📘 <strong>Kết quả:</strong> Khi một client gửi tin nhắn, tất cả các client khác đều nhận được – giống như phòng chat thật.
      </p>

      {/* 5️⃣ Giải thích */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">⚡ 5. Giải thích nhanh cơ chế</h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr><th className="p-2 border">Thành phần</th><th className="p-2 border">Vai trò</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">socket()</td><td className="p-2 border">Tạo kênh kết nối TCP</td></tr>
          <tr><td className="p-2 border">bind() + listen()</td><td className="p-2 border">Server lắng nghe kết nối</td></tr>
          <tr><td className="p-2 border">connect()</td><td className="p-2 border">Client kết nối tới server</td></tr>
          <tr><td className="p-2 border">threading.Thread</td><td className="p-2 border">Xử lý song song nhiều client</td></tr>
          <tr><td className="p-2 border">broadcast()</td><td className="p-2 border">Phát tin nhắn đến tất cả client</td></tr>
          <tr><td className="p-2 border">recv() / send()</td><td className="p-2 border">Gửi – nhận dữ liệu</td></tr>
        </tbody>
      </table>

      {/* 6️⃣ Bảo mật */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🔐 6. Mở rộng: Chat an toàn (Secure Chat)</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Dùng <strong>SSL/TLS</strong> để mã hóa kết nối TCP.</li>
        <li>Mã hóa nội dung tin nhắn bằng <strong>AES</strong> hoặc <strong>RSA</strong>.</li>
        <li>Xác thực người dùng bằng username/password hoặc JWT.</li>
      </ul>

      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-sm overflow-x-auto">
{`import ssl
context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
secure_socket = context.wrap_socket(sock, server_hostname='localhost')`}
      </pre>

      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`from cryptography.fernet import Fernet
key = Fernet.generate_key()
cipher = Fernet(key)
msg = cipher.encrypt(b"Hello")  # gửi dữ liệu mã hóa`}
      </pre>

      {/* 7️⃣ Mở rộng nâng cao */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧩 7. Mở rộng nâng cao: Chat nhóm / Chat riêng</h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr><th className="p-2 border">Tính năng</th><th className="p-2 border">Cách triển khai</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Chat nhóm (Room)</td><td className="p-2 border">Tạo dict rooms = {'{'}"room_name": [list_client]{'}'}</td></tr>
          <tr><td className="p-2 border">Chat riêng</td><td className="p-2 border">Server định tuyến tin đến đúng người nhận</td></tr>
          <tr><td className="p-2 border">Tên người dùng</td><td className="p-2 border">Client gửi username khi kết nối</td></tr>
          <tr><td className="p-2 border">Lưu lịch sử chat</td><td className="p-2 border">Ghi log vào file hoặc database</td></tr>
        </tbody>
      </table>

      {/* 8️⃣ REST API & WebSocket */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🌍 8. Chat qua REST API và WebSocket</h2>
      <p className="text-gray-700 mb-2">
        REST API dùng để lưu lịch sử hoặc xác thực tài khoản (đăng nhập, gửi tin,...)
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><strong>POST /login</strong> – đăng nhập</li>
        <li><strong>GET /messages</strong> – lấy lịch sử tin nhắn</li>
        <li><strong>POST /send</strong> – gửi tin nhắn mới</li>
      </ul>
      <p className="text-gray-700 mb-6">
        WebSocket dùng cho chat thời gian thực – kết nối liên tục giữa client và server (dùng Flask-SocketIO, Django Channels, hoặc Node.js).
      </p>

      {/* 9️⃣ Tổng kết */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧠 9. Tổng kết</h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr><th className="p-2 border">Thành phần</th><th className="p-2 border">Vai trò</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Socket</td><td className="p-2 border">Giao tiếp client–server</td></tr>
          <tr><td className="p-2 border">Multithreading</td><td className="p-2 border">Xử lý đồng thời nhiều client</td></tr>
          <tr><td className="p-2 border">Broadcast</td><td className="p-2 border">Phát tin đến tất cả client</td></tr>
          <tr><td className="p-2 border">Encryption</td><td className="p-2 border">Bảo mật nội dung tin nhắn</td></tr>
          <tr><td className="p-2 border">WebSocket/REST API</td><td className="p-2 border">Kết nối hiện đại cho web & mobile</td></tr>
        </tbody>
      </table>

      {/* 🔟 Hướng phát triển */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🚀 10. Hướng phát triển thêm</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Giao diện GUI (Tkinter hoặc PyQt)</li>
        <li>Chat nhóm, gửi file, emoji, hình ảnh</li>
        <li>Thông báo online/offline</li>
        <li>Kết hợp database (SQLite, MySQL) lưu lịch sử</li>
        <li>Tích hợp AI Chatbot tự động trả lời</li>
      </ul>
    </div>
  );
}
