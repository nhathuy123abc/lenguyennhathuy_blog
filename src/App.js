import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// === Import tất cả 10 bài học Java cơ bản ===
import Java01_GioiThieu from "./pages/posts/Java01_GioiThieu";
import Java02_CaiDatMoiTruong from "./pages/posts/Java02_CaiDatMoiTruong";
import Java03_HelloWorld from "./pages/posts/Java03_HelloWorld";
import Java04_KieuDuLieu from "./pages/posts/Java04_KieuDuLieu";
import Java05_ToanTu from "./pages/posts/Java05_ToanTu";
import Java06_CauTrucDieuKien from "./pages/posts/Java06_CauTrucDieuKien";
import Java07_VongLap from "./pages/posts/Java07_VongLap";
import Java08_Mang from "./pages/posts/Java08_Mang";
import Java09_Ham from "./pages/posts/Java09_Ham";
import Java10_LopVaDoiTuong from "./pages/posts/Java10_LopVaDoiTuong";

// === Trang chủ có banner + card bài viết ===
function Home() {
  const lessons = [
    { id: "java01", title: "Giới Thiệu Java", desc: "Tổng quan về ngôn ngữ lập trình Java và ứng dụng." },
    { id: "java02", title: "Cài Đặt Môi Trường", desc: "Hướng dẫn cài đặt JDK và môi trường lập trình." },
    { id: "java03", title: "Hello World", desc: "Viết chương trình đầu tiên trong Java." },
    { id: "java04", title: "Kiểu Dữ Liệu", desc: "Tìm hiểu các kiểu dữ liệu cơ bản trong Java." },
    { id: "java05", title: "Toán Tử Trong Java", desc: "Sử dụng các toán tử trong lập trình Java." },
    { id: "java06", title: "Cấu Trúc Điều Kiện", desc: "Sử dụng if, else và switch-case." },
    { id: "java07", title: "Vòng Lặp Trong Java", desc: "for, while, do-while, foreach." },
    { id: "java08", title: "Mảng Trong Java", desc: "Làm việc với Array và mảng đa chiều." },
    { id: "java09", title: "Hàm Trong Java", desc: "Định nghĩa và gọi hàm trong Java." },
    { id: "java10", title: "Lớp & Đối Tượng", desc: "Hiểu về class, object và lập trình hướng đối tượng." },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-100 min-h-screen">
      {/* Banner */}
      <div className="text-center bg-orange-600 text-white py-16 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Học Lập Trình Java Từ A → Z ☕</h1>
        <p className="text-lg text-orange-100 max-w-2xl mx-auto">
          Blog học Java miễn phí — ví dụ chi tiết, lý thuyết dễ hiểu, thực hành thực tế cho người mới bắt đầu.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition-all shadow-md"
        >
          Bắt đầu học ngay →
        </Link>
      </div>

      {/* Danh sách bài học */}
      <div className="p-10 grid md:grid-cols-3 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-orange-100 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <h2 className="text-xl font-bold mb-2 text-orange-700">{lesson.title}</h2>
            <p className="text-gray-600 mb-4">{lesson.desc}</p>
            <Link
              to={`/blog/${lesson.id}`}
              className="text-white bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Đọc bài →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// === Trang danh sách blog ===
function Blog() {
  return (
    <div className="p-10 bg-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold text-orange-700 mb-6 text-center">📚 Danh Sách Bài Học Java</h1>
      <ul className="space-y-4 text-lg max-w-2xl mx-auto">
        <li><Link to="/blog/java01" className="text-blue-600 hover:underline">1️⃣ Giới Thiệu Java</Link></li>
        <li><Link to="/blog/java02" className="text-blue-600 hover:underline">2️⃣ Cài Đặt Môi Trường</Link></li>
        <li><Link to="/blog/java03" className="text-blue-600 hover:underline">3️⃣ Hello World</Link></li>
        <li><Link to="/blog/java04" className="text-blue-600 hover:underline">4️⃣ Kiểu Dữ Liệu</Link></li>
        <li><Link to="/blog/java05" className="text-blue-600 hover:underline">5️⃣ Toán Tử</Link></li>
        <li><Link to="/blog/java06" className="text-blue-600 hover:underline">6️⃣ Cấu Trúc Điều Kiện</Link></li>
        <li><Link to="/blog/java07" className="text-blue-600 hover:underline">7️⃣ Vòng Lặp</Link></li>
        <li><Link to="/blog/java08" className="text-blue-600 hover:underline">8️⃣ Mảng Trong Java</Link></li>
        <li><Link to="/blog/java09" className="text-blue-600 hover:underline">9️⃣ Hàm Trong Java</Link></li>
        <li><Link to="/blog/java10" className="text-blue-600 hover:underline">🔟 Lớp & Đối Tượng</Link></li>
      </ul>
    </div>
  );
}

// === Về Chúng Tôi (đã thêm ảnh & thông tin cá nhân) ===
function About() {
  return (
    <div className="p-10 bg-orange-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-700 mb-8">Về Chúng Tôi</h1>

      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full text-center border border-orange-100">
        <img
          src="/images/huy.jpg"
          alt="Avatar"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-orange-300 object-cover shadow-md hover:scale-105 transition-transform"
        />

        <h2 className="text-2xl font-semibold text-orange-700 mb-2">
          Lê Nguyễn Nhật Huy
        </h2>
        <p className="text-gray-600 mb-4">
          Lập trình viên trẻ đam mê công nghệ, chia sẻ kiến thức Java và giúp mọi người bắt đầu con đường lập trình.
        </p>

        <div className="text-left space-y-2 mb-6">
          <p><span className="font-semibold text-gray-800">📧 Email:</span> nhathuy2004dk@gmail.com</p>
          <p><span className="font-semibold text-gray-800">📱 Số điện thoại:</span> 0123 456 789</p>
          <p><span className="font-semibold text-gray-800">🌐 Facebook:</span> <a href="https://facebook.com/javablog" className="text-blue-600 hover:underline">facebook.com/javablog</a></p>
          <p><span className="font-semibold text-gray-800">📍 Địa chỉ:</span> TP. Hồ Chí Minh, Việt Nam</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          “Mình tin rằng lập trình không chỉ là kỹ năng, mà còn là nghệ thuật sáng tạo.  
          Java Blog ra đời để giúp các bạn học lập trình dễ dàng, vui vẻ và thực tế hơn.”
        </p>
      </div>
    </div>
  );
}

// === Liên hệ ===
function Contact() {
  return (
    <div className="p-10 bg-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold text-orange-700 mb-6 text-center">📞 Liên Hệ Với Chúng Tôi</h1>
      <p className="text-center text-gray-700 mb-8">
        Nếu bạn có câu hỏi, góp ý hoặc muốn hợp tác, đừng ngần ngại liên hệ!
      </p>

      <form className="bg-white max-w-lg mx-auto shadow-lg rounded-2xl p-6 space-y-4 border border-orange-100">
        <input type="text" placeholder="Họ và tên" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none" />
        <textarea placeholder="Nội dung lời nhắn..." rows="4" className="w-full border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"></textarea>
        <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700 transition">
          Gửi Liên Hệ
        </button>
      </form>
    </div>
  );
}

// === App chính ===
export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-orange-600 text-white p-4 flex flex-wrap justify-center gap-6 text-lg font-semibold shadow-md">
        <Link to="/" className="hover:text-yellow-200">Trang Chủ</Link>
        <Link to="/blog" className="hover:text-yellow-200">Blog</Link>
        <Link to="/about" className="hover:text-yellow-200">Về Chúng Tôi</Link>
        <Link to="/contact" className="hover:text-yellow-200">Liên Hệ</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/java01" element={<Java01_GioiThieu />} />
        <Route path="/blog/java02" element={<Java02_CaiDatMoiTruong />} />
        <Route path="/blog/java03" element={<Java03_HelloWorld />} />
        <Route path="/blog/java04" element={<Java04_KieuDuLieu />} />
        <Route path="/blog/java05" element={<Java05_ToanTu />} />
        <Route path="/blog/java06" element={<Java06_CauTrucDieuKien />} />
        <Route path="/blog/java07" element={<Java07_VongLap />} />
        <Route path="/blog/java08" element={<Java08_Mang />} />
        <Route path="/blog/java09" element={<Java09_Ham />} />
        <Route path="/blog/java10" element={<Java10_LopVaDoiTuong />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p className="text-sm text-gray-300">
          © 2025 Java Blog — Học Lập Trình Cùng Cộng Đồng Việt Nam
        </p>
      </footer>
    </Router>
  );
}
