export default function Network08_Security() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Bảo Mật Trong Lập Trình Mạng 🔒
      </h1>

      {/* 1️⃣ Khái niệm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 1. Khái niệm bảo mật mạng (Network Security)
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Bảo mật mạng là tập hợp các biện pháp kỹ thuật, chính sách và quy trình nhằm bảo vệ hệ thống mạng và dữ liệu khỏi:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Truy cập trái phép</li>
        <li>Sửa đổi, đánh cắp dữ liệu</li>
        <li>Gián đoạn dịch vụ (DoS, DDoS)</li>
        <li>Phần mềm độc hại (malware, virus, ransomware)</li>
      </ul>
      <p className="text-gray-700 mb-4">
        🎯 <strong>Mục tiêu chính:</strong> Tam giác <strong>CIA</strong>:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li><strong>Confidentiality</strong> – Bảo mật: chỉ người được phép mới đọc được.</li>
        <li><strong>Integrity</strong> – Toàn vẹn: dữ liệu không bị thay đổi trái phép.</li>
        <li><strong>Availability</strong> – Khả dụng: hệ thống luôn hoạt động, không bị gián đoạn.</li>
      </ul>

      {/* 2️⃣ Nguy cơ */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ 2. Các nguy cơ và kiểu tấn công mạng phổ biến
      </h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Loại tấn công</th>
            <th className="p-2 border border-blue-200">Mô tả</th>
            <th className="p-2 border border-blue-200">Ví dụ</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Sniffing</td><td className="p-2 border">Nghe lén dữ liệu truyền qua mạng</td><td className="p-2 border">Wireshark bắt gói tin</td></tr>
          <tr><td className="p-2 border">Spoofing</td><td className="p-2 border">Giả mạo địa chỉ IP/MAC để đánh lừa</td><td className="p-2 border">IP spoofing</td></tr>
          <tr><td className="p-2 border">Phishing</td><td className="p-2 border">Lừa người dùng cung cấp thông tin</td><td className="p-2 border">Email giả danh ngân hàng</td></tr>
          <tr><td className="p-2 border">MITM</td><td className="p-2 border">Chen giữa client và server để nghe/sửa dữ liệu</td><td className="p-2 border">Tấn công Wi-Fi công cộng</td></tr>
          <tr><td className="p-2 border">DoS/DDoS</td><td className="p-2 border">Gửi lượng lớn request làm nghẽn server</td><td className="p-2 border">Flood website</td></tr>
          <tr><td className="p-2 border">SQL Injection</td><td className="p-2 border">Gửi mã SQL vào input trái phép</td><td className="p-2 border">' OR '1'='1</td></tr>
          <tr><td className="p-2 border">XSS</td><td className="p-2 border">Chèn mã JavaScript độc vào web</td><td className="p-2 border">&lt;script&gt;alert('Hacked')&lt;/script&gt;</td></tr>
          <tr><td className="p-2 border">Brute-force</td><td className="p-2 border">Thử nhiều mật khẩu đến khi đúng</td><td className="p-2 border">Tấn công form đăng nhập</td></tr>
        </tbody>
      </table>

      {/* 3️⃣ Các lớp bảo mật */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔐 3. Các lớp bảo mật trong mô hình mạng
      </h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">Lớp (Layer)</th>
            <th className="p-2 border">Biện pháp bảo mật</th>
            <th className="p-2 border">Ví dụ</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Tầng vật lý</td><td className="p-2 border">Giới hạn truy cập phần cứng</td><td className="p-2 border">Phòng server, camera</td></tr>
          <tr><td className="p-2 border">Tầng mạng</td><td className="p-2 border">Firewall, VPN, IDS/IPS</td><td className="p-2 border">Cisco Firewall, WireGuard</td></tr>
          <tr><td className="p-2 border">Tầng vận chuyển</td><td className="p-2 border">Mã hóa kết nối, xác thực</td><td className="p-2 border">TLS, SSL</td></tr>
          <tr><td className="p-2 border">Tầng ứng dụng</td><td className="p-2 border">Bảo vệ dữ liệu, xác thực người dùng</td><td className="p-2 border">HTTPS, OAuth2, JWT</td></tr>
        </tbody>
      </table>

      {/* 4️⃣ Các kỹ thuật bảo mật */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧰 4. Các kỹ thuật bảo mật cơ bản
      </h2>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 a. Mã hóa (Encryption)
      </h3>
      <p className="text-gray-700 mb-4">
        Mã hóa biến dữ liệu “dễ đọc” thành dạng không hiểu được.  
        <strong>Đối xứng:</strong> AES, DES.  
        <strong>Bất đối xứng:</strong> RSA, ECC.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher = Fernet(key)

token = cipher.encrypt(b"Hello World")
print(token)

plain = cipher.decrypt(token)
print(plain.decode())`}
      </pre>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 b. Xác thực (Authentication)
      </h3>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Username + password</li>
        <li>Token (JWT)</li>
        <li>OAuth2 (Google, Facebook Login)</li>
        <li>2FA (xác thực hai bước)</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 c. Kiểm soát truy cập (Access Control)
      </h3>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>RBAC – phân quyền theo vai trò (admin, user, guest)</li>
        <li>ACL – danh sách IP được phép truy cập</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 d. Tường lửa (Firewall)
      </h3>
      <p className="text-gray-700 mb-4">
        Lọc lưu lượng vào/ra dựa trên IP, port, hoặc giao thức.  
        <strong>Phần cứng:</strong> Cisco, Fortinet.  
        <strong>Phần mềm:</strong> iptables, Windows Defender.
      </p>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 e. Chứng chỉ số và HTTPS
      </h3>
      <p className="text-gray-700 mb-4">
        HTTPS = HTTP + SSL/TLS → dữ liệu được mã hóa, xác thực danh tính website, chống MITM và sniffing.
      </p>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 f. VPN (Virtual Private Network)
      </h3>
      <p className="text-gray-700 mb-6">
        VPN tạo “đường hầm” bảo mật giữa các thiết bị — tất cả dữ liệu đều được mã hóa khi truyền qua Internet.
      </p>

      {/* 5️⃣ Bảo mật socket */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧩 5. Bảo mật trong lập trình mạng (Socket)
      </h2>
      <p className="text-gray-700 mb-4">
        TCP/UDP socket thông thường không mã hóa dữ liệu → dễ bị nghe lén.
      </p>
      <p className="text-gray-700 mb-2">🔹 <strong>Giải pháp:</strong> Sử dụng SSL Socket (TLS)</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 text-sm overflow-x-auto">
{`import socket, ssl

context = ssl.create_default_context()
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
secure_sock = context.wrap_socket(sock, server_hostname='example.com')
secure_sock.connect(('example.com', 443))
secure_sock.send(b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n')
print(secure_sock.recv(1024))
secure_sock.close()`}
      </pre>

      {/* 6️⃣ Nguyên tắc */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧱 6. Các nguyên tắc bảo mật trong lập trình
      </h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr><th className="p-2 border">Nguyên tắc</th><th className="p-2 border">Ý nghĩa</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Tối thiểu (Least Privilege)</td><td className="p-2 border">Cấp quyền vừa đủ</td></tr>
          <tr><td className="p-2 border">Không tin tưởng đầu vào</td><td className="p-2 border">Luôn kiểm tra dữ liệu người dùng</td></tr>
          <tr><td className="p-2 border">Phân quyền rõ ràng</td><td className="p-2 border">Không để một tiến trình có toàn quyền</td></tr>
          <tr><td className="p-2 border">Ghi log và giám sát</td><td className="p-2 border">Theo dõi hoạt động bất thường</td></tr>
          <tr><td className="p-2 border">Cập nhật thường xuyên</td><td className="p-2 border">Vá lỗi bảo mật kịp thời</td></tr>
        </tbody>
      </table>

      {/* 7️⃣ Tổng kết */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 7. Tổng kết
      </h2>
      <table className="w-full border border-blue-200 text-left mb-6">
        <thead className="bg-blue-100">
          <tr><th className="p-2 border">Thành phần</th><th className="p-2 border">Vai trò</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Mã hóa (Encryption)</td><td className="p-2 border">Giữ bí mật dữ liệu</td></tr>
          <tr><td className="p-2 border">Xác thực (Authentication)</td><td className="p-2 border">Kiểm tra danh tính người dùng</td></tr>
          <tr><td className="p-2 border">Firewall / VPN</td><td className="p-2 border">Bảo vệ luồng dữ liệu</td></tr>
          <tr><td className="p-2 border">HTTPS / TLS</td><td className="p-2 border">Mã hóa giao tiếp web</td></tr>
          <tr><td className="p-2 border">Kiểm soát truy cập</td><td className="p-2 border">Giới hạn quyền người dùng</td></tr>
          <tr><td className="p-2 border">Giám sát & Cảnh báo</td><td className="p-2 border">Phát hiện tấn công sớm</td></tr>
        </tbody>
      </table>

      {/* 8️⃣ Thực tế ứng dụng */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        💡 8. Thực tế ứng dụng
      </h2>
      <table className="w-full border border-blue-200 text-left">
        <thead className="bg-blue-100">
          <tr><th className="p-2 border">Tình huống</th><th className="p-2 border">Biện pháp bảo mật nên dùng</th></tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Website / REST API</td><td className="p-2 border">HTTPS + JWT/OAuth2</td></tr>
          <tr><td className="p-2 border">Ứng dụng socket</td><td className="p-2 border">SSL socket + xác thực</td></tr>
          <tr><td className="p-2 border">Cơ sở dữ liệu</td><td className="p-2 border">Firewall + user/password riêng</td></tr>
          <tr><td className="p-2 border">Mạng nội bộ công ty</td><td className="p-2 border">VPN + ACL</td></tr>
          <tr><td className="p-2 border">Ứng dụng chat</td><td className="p-2 border">Mã hóa đầu-cuối (E2EE)</td></tr>
        </tbody>
      </table>
    </div>
  );
}
