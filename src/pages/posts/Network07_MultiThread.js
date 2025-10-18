export default function Network07_MultiThread() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Lập Trình Đa Luồng 🧵
      </h1>
      <p className="text-gray-700 mb-4">
        Trong lập trình mạng, đa luồng giúp server xử lý nhiều client cùng lúc mà
        không bị nghẽn.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`import threading, socket

def handle_client(conn, addr):
    print("Kết nối:", addr)
    conn.send(b"Xin chào!")
    conn.close()

server = socket.socket()
server.bind(('localhost', 8888))
server.listen(5)

while True:
    conn, addr = server.accept()
    threading.Thread(target=handle_client, args=(conn, addr)).start()`}
      </pre>
    </div>
  );
}
