export default function Network04_ClientServer() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Mô Hình Client – Server 🖥️
      </h1>
      <p className="text-gray-700 mb-4">
        Mô hình Client–Server là nền tảng của hầu hết các ứng dụng mạng. Client
        gửi yêu cầu (request), Server phản hồi (response).
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`// Ví dụ server đơn giản
import socket

server = socket.socket()
server.bind(('localhost', 9999))
server.listen(1)
print("Server đang chạy...")

client, addr = server.accept()
client.send(b"Hello Client!")
client.close()`}
      </pre>
    </div>
  );
}
