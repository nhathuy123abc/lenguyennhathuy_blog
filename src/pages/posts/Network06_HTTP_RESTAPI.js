export default function Network06_HTTP_RESTAPI() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        HTTP & REST API 🌍
      </h1>

      {/* 1️⃣ HTTP là gì */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🌐 1. HTTP là gì?
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        HTTP (HyperText Transfer Protocol) là giao thức truyền tải siêu văn bản,
        cho phép <strong>client</strong> (ví dụ: trình duyệt) và{" "}
        <strong>server</strong> (ví dụ: web server) trao đổi dữ liệu qua mạng.
      </p>
      <p className="text-gray-700 mb-4">
        HTTP hoạt động dựa trên mô hình Client–Server:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Client gửi request (yêu cầu).</li>
        <li>Server gửi lại response (phản hồi).</li>
      </ul>

      <p className="text-gray-700 mb-4">
        🔹 <strong>Ví dụ thực tế:</strong> Khi bạn truy cập{" "}
        <code>https://www.google.com</code>:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`GET / HTTP/1.1
Host: www.google.com`}
      </pre>

      <p className="text-gray-700 mb-2">Server phản hồi:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`HTTP/1.1 200 OK
Content-Type: text/html
<html>...</html>`}
      </pre>

      <p className="text-gray-700 mb-6">
        👉 HTTP là nền tảng giúp truyền tải dữ liệu qua web: văn bản, ảnh, video,
        JSON, v.v.
      </p>

      {/* 2️⃣ Cấu trúc request/response */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ 2. Cấu trúc của một HTTP Request và Response
      </h2>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 HTTP Request (Từ client gửi đi)
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`<PHƯƠNG THỨC> <ĐƯỜNG DẪN> <PHIÊN BẢN GIAO THỨC>
<Header 1>: <Giá trị>
<Header 2>: <Giá trị>

<Body> (nếu có)`}
      </pre>

      <p className="text-gray-700 mb-2">Ví dụ:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`POST /login HTTP/1.1
Host: example.com
Content-Type: application/json

{"username": "huy", "password": "123456"}`}
      </pre>

      <h3 className="text-xl font-semibold text-blue-500 mb-1">
        🔸 HTTP Response (Server phản hồi)
      </h3>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`<PHIÊN BẢN> <MÃ TRẠNG THÁI> <THÔNG ĐIỆP>
<Header 1>: <Giá trị>
<Header 2>: <Giá trị>

<Body>`}
      </pre>
      <p className="text-gray-700 mb-2">Ví dụ:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`HTTP/1.1 200 OK
Content-Type: application/json

{"message": "Đăng nhập thành công!"}`}
      </pre>

      {/* 3️⃣ Các phương thức */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 3. Các phương thức HTTP quan trọng
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Phương thức</th>
            <th className="p-2 border border-blue-200">Mục đích</th>
            <th className="p-2 border border-blue-200">Có body không?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">GET</td>
            <td className="p-2 border border-blue-200">Lấy dữ liệu từ server</td>
            <td className="p-2 border border-blue-200">❌</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">POST</td>
            <td className="p-2 border border-blue-200">Gửi dữ liệu mới lên server</td>
            <td className="p-2 border border-blue-200">✅</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">PUT</td>
            <td className="p-2 border border-blue-200">Cập nhật toàn bộ dữ liệu</td>
            <td className="p-2 border border-blue-200">✅</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">PATCH</td>
            <td className="p-2 border border-blue-200">Cập nhật một phần dữ liệu</td>
            <td className="p-2 border border-blue-200">✅</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">DELETE</td>
            <td className="p-2 border border-blue-200">Xóa dữ liệu trên server</td>
            <td className="p-2 border border-blue-200">❌</td>
          </tr>
        </tbody>
      </table>

      {/* 4️⃣ REST API */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🌍 4. REST API là gì?
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        REST (Representational State Transfer) là phong cách thiết kế (architectural
        style) dùng để xây dựng API (Application Programming Interface) qua giao thức
        HTTP. REST không phải là giao thức, mà là quy ước giúp hệ thống dễ dùng,
        mở rộng, và tương tác tốt giữa client và server.
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li>Sử dụng HTTP làm nền tảng truyền thông.</li>
        <li>Tài nguyên được định danh qua URL.</li>
        <li>Dữ liệu thường trao đổi ở định dạng JSON hoặc XML.</li>
        <li>Stateless – mỗi request độc lập.</li>
        <li>Dễ tích hợp với web, mobile, IoT.</li>
      </ul>

      {/* 5️⃣ Cấu trúc REST API */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔧 5. Cấu trúc REST API cơ bản
      </h2>
      <p className="text-gray-700 mb-2">
        Ví dụ: API quản lý sinh viên (<code>/students</code>)
      </p>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Hành động</th>
            <th className="p-2 border border-blue-200">HTTP Method</th>
            <th className="p-2 border border-blue-200">Endpoint</th>
            <th className="p-2 border border-blue-200">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Lấy danh sách sinh viên</td>
            <td className="p-2 border border-blue-200">GET</td>
            <td className="p-2 border border-blue-200">/students</td>
            <td className="p-2 border border-blue-200">Trả về toàn bộ danh sách</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Lấy sinh viên cụ thể</td>
            <td className="p-2 border border-blue-200">GET</td>
            <td className="p-2 border border-blue-200">/students/{"{id}"}</td>
            <td className="p-2 border border-blue-200">Lấy 1 sinh viên theo ID</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Thêm sinh viên mới</td>
            <td className="p-2 border border-blue-200">POST</td>
            <td className="p-2 border border-blue-200">/students</td>
            <td className="p-2 border border-blue-200">Thêm bản ghi mới</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Cập nhật thông tin</td>
            <td className="p-2 border border-blue-200">PUT</td>
            <td className="p-2 border border-blue-200">/students/{"{id}"}</td>
            <td className="p-2 border border-blue-200">Cập nhật toàn bộ thông tin</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Xóa sinh viên</td>
            <td className="p-2 border border-blue-200">DELETE</td>
            <td className="p-2 border border-blue-200">/students/{"{id}"}</td>
            <td className="p-2 border border-blue-200">Xóa sinh viên theo ID</td>
          </tr>
        </tbody>
      </table>

      {/* 6️⃣ Flask Example */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        💻 6. Ví dụ REST API bằng Flask (Python)
      </h2>

      <p className="text-gray-700 mb-1">🔸 a. Cài Flask:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-sm">
{`pip install flask`}
      </pre>

      <p className="text-gray-700 mb-1">🔸 b. Code server (api.py):</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
{`from flask import Flask, jsonify, request

app = Flask(__name__)

students = [
    {"id": 1, "name": "Huy", "age": 21},
    {"id": 2, "name": "Linh", "age": 22}
]

@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    student = next((s for s in students if s["id"] == id), None)
    return jsonify(student) if student else ("Not Found", 404)

@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    students.append(data)
    return jsonify({"message": "Added successfully!"}), 201

@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    students = [s for s in students if s["id"] != id]
    return jsonify({"message": "Deleted successfully!"})

if __name__ == '__main__':
    app.run(debug=True)`}
      </pre>

      <p className="text-gray-700 mb-4">
        🔸 c. Thử nghiệm API: <br />
        • GET → <code>http://127.0.0.1:5000/students</code> <br />
        • POST → <code>http://127.0.0.1:5000/students</code> <br />
        <code>{"{"}"id": 3, "name": "An", "age": 23{"}"}</code> <br />
        • DELETE → <code>http://127.0.0.1:5000/students/1</code>
      </p>

      {/* 7️⃣ Ưu điểm */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔍 7. Ưu điểm của REST API
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Ưu điểm</th>
            <th className="p-2 border border-blue-200">Giải thích</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">
              Đơn giản, nhẹ, dễ mở rộng
            </td>
            <td className="p-2 border border-blue-200">
              Chỉ cần HTTP + JSON
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Dễ tích hợp với frontend/mobile
            </td>
            <td className="p-2 border border-blue-200">
              React, Android, iOS đều dễ gọi API
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">
              Không lưu trạng thái (Stateless)
            </td>
            <td className="p-2 border border-blue-200">
              Mỗi request độc lập, dễ mở rộng
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Tái sử dụng cao</td>
            <td className="p-2 border border-blue-200">
              API có thể dùng cho nhiều hệ thống
            </td>
          </tr>
        </tbody>
      </table>

      {/* 8️⃣ REST vs SOAP */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧭 8. REST vs SOAP (so sánh nhanh)
      </h2>
      <table className="w-full text-left border border-blue-200 mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Tiêu chí</th>
            <th className="p-2 border border-blue-200">REST</th>
            <th className="p-2 border border-blue-200">SOAP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">Giao thức</td>
            <td className="p-2 border border-blue-200">HTTP</td>
            <td className="p-2 border border-blue-200">XML + HTTP/SMTP</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Dữ liệu</td>
            <td className="p-2 border border-blue-200">JSON, XML, YAML</td>
            <td className="p-2 border border-blue-200">Chỉ XML</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Tốc độ</td>
            <td className="p-2 border border-blue-200">Nhanh, nhẹ</td>
            <td className="p-2 border border-blue-200">Chậm, nặng</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Dễ dùng</td>
            <td className="p-2 border border-blue-200">Dễ</td>
            <td className="p-2 border border-blue-200">Khó hơn</td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Phổ biến</td>
            <td className="p-2 border border-blue-200">Rất cao</td>
            <td className="p-2 border border-blue-200">Giảm dần</td>
          </tr>
        </tbody>
      </table>

      {/* 9️⃣ Tổng kết */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🧠 9. Tổng kết kiến thức
      </h2>
      <table className="w-full text-left border border-blue-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border border-blue-200">Khái niệm</th>
            <th className="p-2 border border-blue-200">Ý nghĩa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-blue-200">HTTP</td>
            <td className="p-2 border border-blue-200">
              Giao thức truyền dữ liệu qua web
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">REST API</td>
            <td className="p-2 border border-blue-200">
              Cách thiết kế API dựa trên HTTP
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Request</td>
            <td className="p-2 border border-blue-200">
              Yêu cầu từ client (GET, POST, PUT, DELETE…)
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Response</td>
            <td className="p-2 border border-blue-200">
              Phản hồi từ server (mã trạng thái, dữ liệu JSON)
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Stateless</td>
            <td className="p-2 border border-blue-200">
              Mỗi request độc lập, không lưu trạng thái
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-blue-200">Ứng dụng</td>
            <td className="p-2 border border-blue-200">
              Web service, app di động, IoT, backend hệ thống
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
