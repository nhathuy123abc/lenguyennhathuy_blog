export default function Network07_MultiThread() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Lập Trình Đa Luồng 🧵
      </h1>

      {/* 1️⃣ Khái niệm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 1. Khái niệm Multithreading là gì?
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>Multithreading</strong> (đa luồng) là kỹ thuật cho phép một chương
        trình thực thi nhiều luồng (<em>thread</em>) đồng thời trong cùng một tiến
        trình (<em>process</em>). Mỗi thread là một luồng xử lý độc lập có thể chạy
        song song với các luồng khác.
      </p>
      <p className="text-gray-700 mb-4">
        Các luồng chia sẻ cùng bộ nhớ và tài nguyên của tiến trình, giúp trao đổi
        dữ liệu nhanh hơn so với các tiến trình riêng biệt.
      </p>
      <p className="text-gray-700 mb-6">
        👉 <strong>Mục tiêu:</strong> Tăng hiệu suất và tận dụng tối đa CPU, đặc biệt
        trong các ứng dụng cần xử lý nhiều tác vụ song song — ví dụ như server phục
        vụ nhiều client cùng lúc.
      </p>

      {/* 2️⃣ Vì sao cần multithreading */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ 2. Vì sao cần Multithreading trong lập trình mạng?
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Trong mô hình Client–Server, nếu server chỉ dùng một luồng duy nhất, nó chỉ
        có thể xử lý một client tại một thời điểm. Khi client khác kết nối đến, server
        sẽ phải chờ.
      </p>
      <p className="text-gray-700 mb-4">
        → <strong>Giải pháp:</strong> Multithreading – mỗi khi có một client kết nối,
        server tạo ra một luồng riêng để xử lý client đó, trong khi luồng chính vẫn
        tiếp tục lắng nghe kết nối mới.
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li>Nhiều client có thể hoạt động đồng thời.</li>
        <li>Server phản hồi nhanh, không bị “treo”.</li>
      </ul>

      {/* 3️⃣ Cấu trúc hoạt động */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧩 3. Cấu trúc hoạt động của Multithread Server
      </h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`              ┌───────────────────────────────┐
              │           SERVER               │
              └───────────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         ▼                               ▼
   Client 1 (Thread 1)             Client 2 (Thread 2)
         ▼                               ▼
   Gửi/nhận dữ liệu              Gửi/nhận dữ liệu`}
      </pre>
      <p className="text-gray-700 mb-6">
        Mỗi client được phục vụ bởi một thread riêng biệt, do đó các yêu cầu không
        chặn lẫn nhau.
      </p>

      {/* 4️⃣ Ví dụ Python */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        💻 4. Ví dụ: TCP Server đa luồng (Python)
      </h2>

      <p className="text-blue-800 font-semibold mb-1">
        🔸 Server (multi_thread_server.py)
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`import socket
import threading

# Hàm xử lý cho từng client
def handle_client(conn, addr):
    print(f"Kết nối mới từ {addr}")
    while True:
        data = conn.recv(1024).decode()
        if not data:
            break
        print(f"Từ {addr}: {data}")
        conn.send(f"Server nhận: {data}".encode())
    conn.close()
    print(f"Đóng kết nối {addr}")

# Tạo socket server
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 9999))
server.listen()
print("Server đang lắng nghe...")

while True:
    conn, addr = server.accept()
    # Tạo thread riêng để xử lý client
    thread = threading.Thread(target=handle_client, args=(conn, addr))
    thread.start()
    print(f"Số client đang hoạt động: {threading.active_count() - 1}")`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">🔸 Client (client.py)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 9999))

while True:
    msg = input("Bạn: ")
    if msg.lower() == 'exit':
        break
    client.send(msg.encode())
    data = client.recv(1024).decode()
    print("Server:", data)

client.close()`}
      </pre>

      <p className="text-gray-700 mb-6">
        📘 <strong>Kết quả:</strong> Mở nhiều client cùng lúc, mỗi client đều có thể gửi
        tin nhắn và nhận phản hồi riêng — server xử lý song song không bị nghẽn.
      </p>

      {/* 5️⃣ Ưu nhược điểm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧮 5. Ưu điểm và nhược điểm của Multithreading
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Ưu điểm</th>
            <th className="p-2 border border-blue-200">Nhược điểm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">
              Tận dụng tối đa CPU đa nhân
            </td>
            <td className="p-2 border border-blue-200">
              Khó debug, dễ xảy ra lỗi race condition
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Tăng hiệu suất, phản hồi nhanh
            </td>
            <td className="p-2 border border-blue-200">
              Cần quản lý đồng bộ hóa cẩn thận
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Xử lý song song nhiều yêu cầu
            </td>
            <td className="p-2 border border-blue-200">
              Có thể gây quá tải nếu tạo quá nhiều thread
            </td>
          </tr>
        </tbody>
      </table>

      {/* 6️⃣ Đồng bộ hóa */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔐 6. Đồng bộ hóa (Synchronization)
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Khi nhiều luồng cùng truy cập tài nguyên chung (biến, file, socket), có thể
        xảy ra xung đột dữ liệu. → Giải pháp: dùng{" "}
        <strong>lock (mutex)</strong> để đảm bảo chỉ một luồng truy cập tài nguyên
        tại một thời điểm.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`import threading

lock = threading.Lock()
count = 0

def increase():
    global count
    for _ in range(100000):
        with lock:  # Chỉ một thread được vào vùng này cùng lúc
            count += 1

t1 = threading.Thread(target=increase)
t2 = threading.Thread(target=increase)
t1.start(); t2.start()
t1.join(); t2.join()

print("Kết quả cuối cùng:", count)`}
      </pre>

      <p className="text-gray-700 mb-6">
        Nếu bỏ lock, kết quả có thể sai do <strong>race condition</strong>.
      </p>

      {/* 7️⃣ So sánh Multithreading vs Multiprocessing */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧩 7. Multithreading vs Multiprocessing
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Tiêu chí</th>
            <th className="p-2 border border-blue-200">Multithreading</th>
            <th className="p-2 border border-blue-200">Multiprocessing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Tài nguyên</td>
            <td className="p-2 border border-blue-200">Dùng chung bộ nhớ</td>
            <td className="p-2 border border-blue-200">Mỗi tiến trình có bộ nhớ riêng</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Tốc độ trao đổi</td>
            <td className="p-2 border border-blue-200">Nhanh</td>
            <td className="p-2 border border-blue-200">Chậm hơn (truyền giữa tiến trình)</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Tận dụng CPU đa nhân</td>
            <td className="p-2 border border-blue-200">Hạn chế do GIL (Python)</td>
            <td className="p-2 border border-blue-200">Tốt hơn</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Thích hợp cho</td>
            <td className="p-2 border border-blue-200">I/O (mạng, file, web)</td>
            <td className="p-2 border border-blue-200">Tác vụ tính toán nặng</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700 mb-6">
        💡 Trong lập trình mạng, multithreading rất phù hợp vì socket I/O thường
        chờ dữ liệu — không tốn nhiều CPU.
      </p>

      {/* 8️⃣ Tổng kết */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🧠 8. Tổng kết</h2>
      <table className="w-full text-left border border-blue-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Khái niệm</th>
            <th className="p-2 border border-blue-200">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Thread</td>
            <td className="p-2 border border-blue-200">
              Luồng thực thi độc lập trong tiến trình
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Multithreading</td>
            <td className="p-2 border border-blue-200">
              Chạy nhiều luồng song song để xử lý đa nhiệm
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Ứng dụng trong mạng</td>
            <td className="p-2 border border-blue-200">
              Server phục vụ nhiều client cùng lúc
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Công cụ Python</td>
            <td className="p-2 border border-blue-200">
              threading.Thread, Lock, Semaphore
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Ưu điểm</td>
            <td className="p-2 border border-blue-200">
              Hiệu quả cao, tiết kiệm tài nguyên
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Nhược điểm</td>
            <td className="p-2 border border-blue-200">
              Khó kiểm soát, cần đồng bộ hóa kỹ
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
