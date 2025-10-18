export default function Network10_ChatApp() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Xây Dựng Ứng Dụng Chat 💬
      </h1>
      <p className="text-gray-700 mb-4">
        Ứng dụng chat giúp nhiều người giao tiếp qua mạng bằng socket và đa luồng.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`# Server chat đơn giản
import socket, threading

clients = []

def handle_client(conn):
    while True:
        msg = conn.recv(1024)
        for c in clients:
            c.send(msg)

server = socket.socket()
server.bind(('localhost', 9999))
server.listen(5)
print("Server chat đang chạy...")

while True:
    conn, addr = server.accept()
    clients.append(conn)
    threading.Thread(target=handle_client, args=(conn,)).start()`}
      </pre>
    </div>
  );
}
