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

// === Trang chủ ===
function Home() {
  const lessons = [
    {
      id: "java01",
      title: "Giới Thiệu Java",
      desc: "Tổng quan về ngôn ngữ lập trình Java và ứng dụng.",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      id: "java02",
      title: "Cài Đặt Môi Trường",
      desc: "Hướng dẫn cài đặt JDK và môi trường lập trình.",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      id: "java03",
      title: "Hello World",
      desc: "Viết chương trình đầu tiên trong Java.",
      img: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    },
    {
      id: "java04",
      title: "Kiểu Dữ Liệu",
      desc: "Tìm hiểu các kiểu dữ liệu cơ bản trong Java.",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721298.png",
    },
    {
      id: "java05",
      title: "Toán Tử Trong Java",
      desc: "Sử dụng các toán tử trong lập trình Java.",
      img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    },
    {
      id: "java06",
      title: "Cấu Trúc Điều Kiện",
      desc: "Sử dụng if, else và switch-case.",
      img: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png",
    },
    {
      id: "java07",
      title: "Vòng Lặp Trong Java",
      desc: "for, while, do-while, foreach.",
      img: "https://cdn-icons-png.flaticon.com/512/1841/1841214.png",
    },
    {
      id: "java08",
      title: "Mảng Trong Java",
      desc: "Làm việc với Array và mảng đa chiều.",
      img: "https://cdn-icons-png.flaticon.com/512/1126/1126856.png",
    },
    {
      id: "java09",
      title: "Hàm Trong Java",
      desc: "Định nghĩa và gọi hàm trong Java.",
      img: "https://cdn-icons-png.flaticon.com/512/3616/3616783.png",
    },
    {
      id: "java10",
      title: "Lớp & Đối Tượng",
      desc: "Hiểu về class, object và lập trình hướng đối tượng.",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-100 min-h-screen flex flex-col">
      {/* Banner */}
      <div className="text-center bg-orange-600 text-white py-16 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          Học Lập Trình Java Từ A → Z ☕
        </h1>
        <p className="text-lg text-orange-100 max-w-2xl mx-auto">
          Blog học Java miễn phí — ví dụ chi tiết, lý thuyết dễ hiểu, thực hành
          thực tế cho người mới bắt đầu.
        </p>
        <Link
          to="/blog/java01"
          className="mt-6 inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition-all shadow-md"
        >
          Bắt đầu học ngay →
        </Link>
      </div>

      {/* Danh sách bài học */}
      <div className="p-10 grid md:grid-cols-3 sm:grid-cols-1 gap-8 max-w-6xl mx-auto flex-grow">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-orange-100 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 text-center"
          >
            <img
              src={lesson.img}
              alt={lesson.title}
              className="w-20 h-20 object-contain mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-xl font-bold mb-2 text-orange-700">
              {lesson.title}
            </h2>
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

// === Về Chúng Tôi ===
function About() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-100 min-h-screen flex flex-col items-center py-16">
      <h1 className="text-5xl font-extrabold text-orange-700 mb-10 tracking-wide text-center">
        ☕ Về Chúng Tôi
      </h1>

      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl w-11/12 text-center border border-orange-200 transition-transform hover:scale-[1.01]">
        <img
          src="https://i.postimg.cc/pT0k0gHp/564217407-2039380046808669-4469668202512957919-n.jpg"
          alt="Lê Nguyễn Nhật Huy"
          className="w-44 h-44 rounded-full mx-auto mb-6 border-8 border-orange-300 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
        />

        <h2 className="text-3xl font-bold text-orange-700 mb-2">
          Lê Nguyễn Nhật Huy
        </h2>
        <p className="text-gray-600 italic mb-6">
          “Lập trình viên trẻ đam mê chia sẻ kiến thức — giúp người mới tiếp cận
          Java một cách dễ hiểu, sinh động và thực tế nhất.”
        </p>

        <h3 className="text-2xl font-bold text-orange-700 mb-4">🎮 Sở Thích Cá Nhân</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl shadow-sm hover:bg-orange-100 transition">
            <i className="fas fa-book text-orange-600 text-2xl"></i>
            <p className="text-gray-700">
              <span className="font-semibold">Đọc truyện:</span> yêu thích truyện fantasy và phiêu lưu, giúp mình học cách kể chuyện và sáng tạo hơn.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl shadow-sm hover:bg-orange-100 transition">
            <i className="fas fa-gamepad text-orange-600 text-2xl"></i>
            <p className="text-gray-700">
              <span className="font-semibold">Chơi game:</span> thích game chiến thuật và mô phỏng — vừa giải trí vừa rèn tư duy logic 🎮.
            </p>
          </div>
        </div>

        {/* 🌐 Kết Nối Với Tôi */}
        <h3 className="text-2xl font-bold text-orange-700 mb-6 mt-12 text-center">
          🌐 Kết Nối Với Tôi
        </h3>

        
        {/* Thông tin liên hệ */}
        <div className="bg-orange-50 rounded-3xl shadow-inner border border-orange-200 p-8 text-left max-w-2xl mx-auto">
          <div className="space-y-4 text-lg text-gray-800">
            <p className="flex items-center gap-3">
              <i className="fas fa-envelope text-blue-600 text-2xl"></i>
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:nhathuy2004dk@gmail.com"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition"
                >
                  nhathuy2004dk@gmail.com
                </a>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <i className="fas fa-phone-alt text-green-600 text-2xl"></i>
              <span>
                <strong>Số điện thoại:</strong> 0123 456 789
              </span>
            </p>
            <p className="flex items-center gap-3">
              <i className="fab fa-facebook text-blue-600 text-2xl"></i>
              <span>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://facebook.com/javablog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition"
                >
                  facebook.com/javablog
                </a>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <i className="fas fa-map-marker-alt text-pink-600 text-2xl"></i>
              <span>
                <strong>Địa chỉ:</strong> TP. Hồ Chí Minh, Việt Nam
              </span>
            </p>
          </div>

          {/* Biểu tượng mạng xã hội cuối */}
          <div className="flex justify-center gap-8 mt-10">
            <a href="https://facebook.com/javablog" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl transition-transform hover:scale-110" title="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/nhathuy2004dk" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black text-3xl transition-transform hover:scale-110" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:nhathuy2004dk@gmail.com" className="text-red-500 hover:text-red-700 text-3xl transition-transform hover:scale-110" title="Gmail">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-3xl transition-transform hover:scale-110" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// === Liên hệ ===
function Contact() {
  return (
    <div className="p-10 bg-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold text-orange-700 mb-6 text-center">
        📞 Liên Hệ Với Chúng Tôi
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Nếu bạn có câu hỏi, góp ý hoặc muốn hợp tác, đừng ngần ngại liên hệ!
      </p>
      <form className="bg-white max-w-lg mx-auto shadow-lg rounded-2xl p-6 space-y-4 border border-orange-100">
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
        />
        <textarea
          placeholder="Nội dung lời nhắn..."
          rows="4"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700 transition"
        >
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
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="bg-orange-600 text-white p-4 flex flex-wrap justify-center gap-6 text-lg font-semibold shadow-md">
          <Link to="/" className="hover:text-yellow-200">
            Trang Chủ
          </Link>
          <Link to="/about" className="hover:text-yellow-200">
            Về Chúng Tôi
          </Link>
          <Link to="/contact" className="hover:text-yellow-200">
            Liên Hệ
          </Link>
        </nav>

        {/* Nội dung chính */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
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
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
          <p className="text-sm text-gray-300">
            © 2025 Java Blog — Học Lập Trình Cùng Cộng Đồng Việt Nam
          </p>
        </footer>
      </div>
    </Router>
  );
}
