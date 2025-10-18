export default function Network08_Security() {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Bảo Mật Trong Lập Trình Mạng 🔒
      </h1>
      <p className="text-gray-700 mb-4">
        Bảo mật giúp dữ liệu không bị đánh cắp khi truyền qua mạng. Một số kỹ thuật:
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Sử dụng SSL/TLS để mã hóa dữ liệu.</li>
        <li>Áp dụng xác thực người dùng (Authentication).</li>
        <li>Dùng HTTPS thay vì HTTP.</li>
      </ul>
    </div>
  );
}
