export default function Network02_CauTrucMang() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Cấu Trúc Mảng Trong Lập Trình Mạng 🧩
      </h1>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        1️⃣ Vì sao cần cấu trúc mảng trong lập trình mạng?
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Trong quá trình truyền dữ liệu qua mạng, dữ liệu thường được chia nhỏ
        thành các gói (packet). Mỗi gói có các phần tử dữ liệu khác nhau như địa
        chỉ IP, cổng, độ dài, checksum, nội dung,… Khi lập trình, ta cần một cấu
        trúc dữ liệu (<code>struct</code>) để mô tả gói tin, và mảng (array hoặc
        buffer) để chứa dữ liệu thực tế gửi/nhận. Vì vậy, mảng và cấu trúc là hai
        yếu tố cốt lõi để thao tác dữ liệu mạng hiệu quả.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
        ⚙️ 2. Cấu trúc dữ liệu trong lập trình mạng
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Trong hầu hết các ngôn ngữ (đặc biệt là C/C++), ta sử dụng{" "}
        <code>struct</code> để mô tả thông tin của một kết nối hoặc một gói tin.
        Ví dụ:
      </p>

      <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto mb-4 text-sm">
{`struct sockaddr_in {
    short sin_family;        // Loại giao thức (AF_INET cho IPv4)
    unsigned short sin_port; // Số cổng (port)
    struct in_addr sin_addr; // Địa chỉ IP
    char sin_zero[8];        // Đệm cho đủ kích thước
};`}
      </pre>

      <p className="text-gray-700 mb-6">
        <strong>Giải thích:</strong> <br />
        <span className="block ml-4">
          • <code>sin_family</code>: loại giao thức (AF_INET cho IPv4, AF_INET6 cho IPv6).<br />
          • <code>sin_port</code>: số cổng, chuyển sang network byte order bằng <code>htons()</code>.<br />
          • <code>sin_addr</code>: chứa địa chỉ IP.<br />
          • <code>sin_zero</code>: vùng đệm (padding) để đồng bộ kích thước struct.
        </span>
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
        🧠 3. Mảng trong xử lý dữ liệu mạng
      </h2>

      <h3 className="text-xl font-semibold text-blue-500 mb-2">
        🔸 a. Buffer – vùng đệm dữ liệu
      </h3>
      <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto mb-4 text-sm">
{`char buffer[1024];
recv(client_socket, buffer, sizeof(buffer), 0);
printf("Dữ liệu nhận được: %s\\n", buffer);`}
      </pre>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Ở đây, <code>buffer</code> là mảng ký tự chứa dữ liệu nhận từ mạng,
        <code>recv()</code> là hàm nhận dữ liệu, và{" "}
        <code>sizeof(buffer)</code> xác định kích thước tối đa của mảng.
      </p>

      <h3 className="text-xl font-semibold text-blue-500 mb-2">
        🔸 b. Mảng byte (byte array)
      </h3>
      <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto mb-4 text-sm">
{`unsigned char packet[512];`}
      </pre>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Mỗi phần tử trong <code>packet</code> là một byte dữ liệu của gói tin. Ví dụ:
        <br />
        Byte 0–1: độ dài dữ liệu. <br />
        Byte 2–3: checksum. <br />
        Byte 4 trở đi: dữ liệu thực tế.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
        🌐 4. Mảng trong việc đóng gói (packing) và giải gói (unpacking)
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Khi giao tiếp giữa hai máy tính, ta cần đóng gói dữ liệu (serialize) trước
        khi gửi và giải gói (deserialize) khi nhận. Ví dụ:
      </p>

      <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto mb-4 text-sm">
{`struct Student {
    int id;
    char name[50];
    float score;
};

unsigned char buffer[sizeof(struct Student)];
memcpy(buffer, &student, sizeof(student));
send(sock, buffer, sizeof(buffer), 0);

// Khi nhận:
recv(sock, buffer, sizeof(buffer), 0);
memcpy(&student, buffer, sizeof(student));`}
      </pre>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Mảng byte là phương tiện giúp chuyển dữ liệu phức tạp (như struct) qua
        mạng an toàn và thống nhất giữa các hệ thống khác nhau.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
        🕸️ 5. Mảng trong mô hình xử lý gói tin (packet structure)
      </h2>

      <table className="w-full text-left border border-blue-200 mb-4">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 border border-blue-200">Byte</th>
            <th className="p-2 border border-blue-200">Ý nghĩa</th>
            <th className="p-2 border border-blue-200">Kích thước</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">0–1</td>
            <td className="p-2 border border-blue-200">Loại gói tin</td>
            <td className="p-2 border border-blue-200">2 byte</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">2–3</td>
            <td className="p-2 border border-blue-200">Độ dài dữ liệu</td>
            <td className="p-2 border border-blue-200">2 byte</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">4–n</td>
            <td className="p-2 border border-blue-200">Nội dung dữ liệu</td>
            <td className="p-2 border border-blue-200">n byte</td>
          </tr>
        </tbody>
      </table>

      <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto mb-6 text-sm">
{`unsigned char packet[256];
packet[0] = 0x01; // Type
packet[1] = 0x00;
packet[2] = 0x0A; // Length = 10 bytes
packet[3] = 0x00;
memcpy(&packet[4], "HelloWorld", 10);
send(sock, packet, 14, 0);`}
      </pre>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">
        ⚡ 6. Tổng kết
      </h2>

      <table className="w-full text-left border border-blue-200">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 border border-blue-200">Thành phần</th>
            <th className="p-2 border border-blue-200">Vai trò</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Struct</td>
            <td className="p-2 border border-blue-200">
              Tổ chức dữ liệu có cấu trúc (địa chỉ, gói tin, header…)
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Mảng (Array/Buffer)</td>
            <td className="p-2 border border-blue-200">
              Lưu dữ liệu thực tế gửi hoặc nhận
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Byte array</td>
            <td className="p-2 border border-blue-200">
              Dạng nhị phân của dữ liệu khi truyền qua mạng
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Packing/Unpacking</td>
            <td className="p-2 border border-blue-200">
              Quá trình chuyển đổi giữa struct và mảng byte
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Socket</td>
            <td className="p-2 border border-blue-200">
              Giao diện truyền dữ liệu giữa các tiến trình qua mạng
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
