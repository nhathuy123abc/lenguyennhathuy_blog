export default function Network03_TCP_UDP() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Kết Nối TCP & UDP ⚙️
      </h1>
      <p className="text-gray-700 mb-4">
        TCP (Transmission Control Protocol) và UDP (User Datagram Protocol)
        là hai giao thức chính trong truyền thông mạng.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`// Ví dụ tạo socket TCP trong Python:
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 8080))
server.listen(1)
print("Server đang lắng nghe...")

conn, addr = server.accept()
print("Kết nối từ:", addr)
conn.sendall(b'Chào Client!')
conn.close()`}
      </pre>
    </div>
  );
}
