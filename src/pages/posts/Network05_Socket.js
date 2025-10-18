export default function Network05_Socket() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Lập Trình Socket 🧱
      </h1>
      <p className="text-gray-700 mb-4">
        Socket là công cụ giúp hai thiết bị giao tiếp thông qua mạng. Nó cung
        cấp cơ chế để gửi và nhận dữ liệu giữa client và server.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`// Client kết nối đến server
import socket
client = socket.socket()
client.connect(('localhost', 9999))
print(client.recv(1024).decode())
client.close()`}
      </pre>
    </div>
  );
}
