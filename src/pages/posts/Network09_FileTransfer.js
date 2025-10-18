export default function Network09_FileTransfer() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Truyền File Qua Mạng 📁
      </h1>
      <p className="text-gray-700 mb-4">
        Ứng dụng có thể gửi và nhận file thông qua socket hoặc HTTP.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`# Server nhận file
import socket

server = socket.socket()
server.bind(('localhost', 9999))
server.listen(1)
conn, addr = server.accept()

with open('received.txt', 'wb') as f:
    data = conn.recv(1024)
    while data:
        f.write(data)
        data = conn.recv(1024)
conn.close()`}
      </pre>
    </div>
  );
}
