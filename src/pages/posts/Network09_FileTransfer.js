export default function Network09_FileTransfer() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Truyền File Qua Mạng 📁
      </h1>

      <p className="text-gray-700 mb-6">
        Phần này sẽ giúp bạn hiểu nguyên lý, giao thức, cách lập trình và các vấn đề bảo mật khi xây dựng hệ thống truyền file giữa client và server.
      </p>

      {/* 1️⃣ Khái niệm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 1. Khái niệm về File Transfer
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        File Transfer (truyền tệp) là quá trình gửi hoặc nhận dữ liệu giữa hai thiết bị (thường là client và server) thông qua mạng máy tính.
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Văn bản (.txt, .docx)</li>
        <li>Hình ảnh, video (.jpg, .mp4)</li>
        <li>Tập tin nhị phân (.zip, .exe, …)</li>
      </ul>
      <p className="text-gray-700 mb-6">
        🎯 <strong>Mục tiêu:</strong> Gửi dữ liệu đầy đủ, chính xác, có thể tạm dừng hoặc xác nhận sau khi truyền xong.
      </p>

      {/* 2️⃣ Giao thức */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ 2. Các giao thức truyền file phổ biến
      </h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">Giao thức</th>
            <th className="p-2 border">Mô tả</th>
            <th className="p-2 border">Port</th>
            <th className="p-2 border">Đặc điểm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">FTP</td><td className="p-2 border">Giao thức truyền file cổ điển</td><td className="p-2 border">21</td><td className="p-2 border">Dễ dùng, không mã hóa</td></tr>
          <tr><td className="p-2 border">SFTP</td><td className="p-2 border">Truyền file qua SSH</td><td className="p-2 border">22</td><td className="p-2 border">An toàn, mã hóa dữ liệu</td></tr>
          <tr><td className="p-2 border">TFTP</td><td className="p-2 border">Phiên bản rút gọn, không xác thực</td><td className="p-2 border">69</td><td className="p-2 border">Nhanh, dùng nội bộ</td></tr>
          <tr><td className="p-2 border">HTTP/HTTPS</td><td className="p-2 border">Truyền file qua web</td><td className="p-2 border">80/443</td><td className="p-2 border">Phổ biến, bảo mật cao</td></tr>
          <tr><td className="p-2 border">Custom Socket</td><td className="p-2 border">Tự lập trình bằng TCP/UDP</td><td className="p-2 border">Tùy chọn</td><td className="p-2 border">Linh hoạt, học tập</td></tr>
        </tbody>
      </table>

      {/* 3️⃣ Cách hoạt động */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🌐 3. Cách hoạt động của truyền file qua mạng
      </h2>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li><strong>Bước 1:</strong> Client gửi yêu cầu (tên file, kích thước,...)</li>
        <li><strong>Bước 2:</strong> Server phản hồi và chuẩn bị lưu trữ</li>
        <li><strong>Bước 3:</strong> Truyền dữ liệu qua socket hoặc HTTP</li>
        <li><strong>Bước 4:</strong> Xác nhận và đóng kết nối</li>
      </ul>

      {/* 4️⃣ Ví dụ TCP */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        💻 4. Ví dụ: Truyền file bằng TCP Socket (Python)
      </h2>

      <p className="text-blue-800 font-semibold mb-1">🔸 Server (file_server.py)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-sm overflow-x-auto">
{`import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 9999))
server.listen(1)
print("Server đang chờ kết nối...")

conn, addr = server.accept()
print("Kết nối từ:", addr)

filename = conn.recv(1024).decode()
print("Nhận yêu cầu tải file:", filename)

with open(filename, 'rb') as f:
    data = f.read(1024)
    while data:
        conn.send(data)
        data = f.read(1024)

print("Đã gửi file thành công!")
conn.close()`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">🔸 Client (file_client.py)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 9999))

filename = 'data.txt'  # File muốn tải
client.send(filename.encode())

with open('received_' + filename, 'wb') as f:
    while True:
        data = client.recv(1024)
        if not data:
            break
        f.write(data)

print("Đã nhận file thành công!")
client.close()`}
      </pre>

      <p className="text-gray-700 mb-6">
        📘 <strong>Giải thích:</strong> Client gửi tên file → Server đọc và gửi theo từng khối dữ liệu → Client nhận và lưu thành file mới.
      </p>

      {/* 5️⃣ Lưu ý */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚡ 5. Lưu ý khi truyền file lớn
      </h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Chia nhỏ file (chunk) để tránh tràn bộ nhớ.</li>
        <li>Gắn header chứa metadata (tên, kích thước, checksum).</li>
        <li>Xác thực quyền truy cập bằng token hoặc password.</li>
        <li>Mã hóa dữ liệu bằng SSL/TLS hoặc thư viện cryptography.</li>
        <li>Dùng checksum (md5, sha256) để kiểm tra toàn vẹn.</li>
      </ul>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`import hashlib

def file_checksum(filename):
    h = hashlib.sha256()
    with open(filename, 'rb') as f:
        while chunk := f.read(4096):
            h.update(chunk)
    return h.hexdigest()`}
      </pre>

      {/* 6️⃣ Bảo mật */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔒 6. Bảo mật trong truyền file
      </h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">Nguy cơ</th>
            <th className="p-2 border">Biện pháp</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Nghe lén (Sniffing)</td><td className="p-2 border">Dùng HTTPS / SFTP</td></tr>
          <tr><td className="p-2 border">Giả mạo (Spoofing)</td><td className="p-2 border">Xác thực SSL, chứng chỉ số</td></tr>
          <tr><td className="p-2 border">Chèn mã độc</td><td className="p-2 border">Quét file trước khi lưu</td></tr>
          <tr><td className="p-2 border">Mất dữ liệu giữa chừng</td><td className="p-2 border">Cho phép resume, kiểm tra checksum</td></tr>
        </tbody>
      </table>

      <p className="text-gray-700 mb-6">
        💡 Ví dụ: Khi tải file từ Google Drive, trình duyệt dùng HTTPS + OAuth2 → dữ liệu được mã hóa và chỉ bạn mới có quyền tải.
      </p>

      {/* 7️⃣ REST API */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧩 7. File Transfer qua HTTP REST API
      </h2>
      <p className="text-gray-700 mb-4">
        Ngày nay, hầu hết ứng dụng truyền file qua <strong>REST API</strong> thay vì socket trực tiếp.
      </p>

      <p className="text-blue-800 font-semibold mb-1">🔸 Upload file (POST – Flask)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-sm overflow-x-auto">
{`from flask import Flask, request
app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file.save(f'uploads/{file.filename}')
    return {"message": "Tải lên thành công!"}, 201

if __name__ == '__main__':
    app.run(debug=True)`}
      </pre>

      <p className="text-blue-800 font-semibold mb-1">🔸 Client (requests)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`import requests

files = {'file': open('data.txt', 'rb')}
r = requests.post('http://127.0.0.1:5000/upload', files=files)
print(r.json())`}
      </pre>

      {/* 8️⃣ Ứng dụng */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔍 8. Ứng dụng thực tế
      </h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">Ứng dụng</th>
            <th className="p-2 border">Cách thức truyền file</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Google Drive, Dropbox</td><td className="p-2 border">HTTP/HTTPS API + mã hóa</td></tr>
          <tr><td className="p-2 border">FTP Server nội bộ</td><td className="p-2 border">FTP/SFTP</td></tr>
          <tr><td className="p-2 border">Ứng dụng chat (Zalo, Messenger)</td><td className="p-2 border">TCP Socket + mã hóa đầu cuối</td></tr>
          <tr><td className="p-2 border">Hệ thống IoT</td><td className="p-2 border">UDP/MQTT + chunk dữ liệu</td></tr>
        </tbody>
      </table>

      {/* 9️⃣ Tổng kết */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 9. Tổng kết
      </h2>
      <table className="w-full border border-blue-200 text-left">
        <thead className="bg-blue-100">
          <tr><th className="p-2 border">Thành phần</th><th className="p-2 border">Vai trò</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">File Transfer</td><td className="p-2 border">Truyền dữ liệu giữa client–server</td></tr>
          <tr><td className="p-2 border">Giao thức</td><td className="p-2 border">FTP, SFTP, HTTP, Socket</td></tr>
          <tr><td className="p-2 border">Yêu cầu kỹ thuật</td><td className="p-2 border">Toàn vẹn, bảo mật, xác thực</td></tr>
          <tr><td className="p-2 border">Kỹ thuật bổ trợ</td><td className="p-2 border">Chunk, checksum, resume, encryption</td></tr>
          <tr><td className="p-2 border">Ứng dụng</td><td className="p-2 border">Upload, backup, chia sẻ, cloud</td></tr>
        </tbody>
      </table>
    </div>
  );
}
