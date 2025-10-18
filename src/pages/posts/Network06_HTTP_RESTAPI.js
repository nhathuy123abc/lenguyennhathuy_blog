export default function Network06_HTTP_RESTAPI() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        HTTP & REST API 🌍
      </h1>
      <p className="text-gray-700 mb-4">
        HTTP (HyperText Transfer Protocol) là nền tảng của web. REST API cho phép
        ứng dụng trao đổi dữ liệu thông qua HTTP.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`// Ví dụ API đơn giản bằng Node.js Express
import express from 'express';
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Xin chào từ Server!' });
});

app.listen(3000, () => console.log('Server chạy ở cổng 3000'));`}
      </pre>
    </div>
  );
}
