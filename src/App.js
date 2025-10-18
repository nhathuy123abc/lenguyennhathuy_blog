import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// === Import tất cả 10 bài học Lập Trình Mạng ===
import Network01_GioiThieu from "./pages/posts/Network01_GioiThieu";
import Network02_CauTrucMang from "./pages/posts/Network02_CauTrucMang";
import Network03_TCP_UDP from "./pages/posts/Network03_TCP_UDP";
import Network04_ClientServer from "./pages/posts/Network04_ClientServer";
import Network05_Socket from "./pages/posts/Network05_Socket";
import Network06_HTTP_RESTAPI from "./pages/posts/Network06_HTTP_RESTAPI";
import Network07_MultiThread from "./pages/posts/Network07_MultiThread";
import Network08_Security from "./pages/posts/Network08_Security";
import Network09_FileTransfer from "./pages/posts/Network09_FileTransfer";
import Network10_ChatApp from "./pages/posts/Network10_ChatApp";

// === Trang chủ ===
function Home() {
  const lessons = [
    {
      id: "network01",
      title: "Giới Thiệu Lập Trình Mạng",
      desc: "Khái niệm cơ bản về mạng máy tính, mô hình OSI, TCP/IP và cách thiết bị giao tiếp.",
      img: "https://cdn-icons-png.flaticon.com/512/483/483361.png",
    },
    {
      id: "network02",
      title: "Cấu Trúc Mạng & Giao Thức",
      desc: "Hiểu rõ mô hình OSI, TCP/IP, vai trò từng tầng trong việc truyền dữ liệu.",
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    },
    {
      id: "network03",
      title: "Kết Nối TCP & UDP",
      desc: "Tìm hiểu hai giao thức truyền thông phổ biến và sự khác biệt giữa chúng.",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      id: "network04",
      title: "Mô Hình Client - Server",
      desc: "Nắm vững cách hoạt động giữa Client và Server trong ứng dụng mạng.",
      img: "https://cdn-icons-png.flaticon.com/512/3208/3208687.png",
    },
    {
      id: "network05",
      title: "Lập Trình Socket",
      desc: "Học cách gửi và nhận dữ liệu giữa các thiết bị qua socket.",
      img: "https://cdn-icons-png.flaticon.com/512/619/619034.png",
    },
    {
      id: "network06",
      title: "HTTP & REST API",
      desc: "Hiểu cơ chế hoạt động của HTTP và xây dựng REST API cơ bản.",
      img: "https://cdn-icons-png.flaticon.com/512/4225/4225683.png",
    },
    {
      id: "network07",
      title: "Đa Luồng Trong Mạng",
      desc: "Ứng dụng đa luồng để xử lý nhiều kết nối cùng lúc.",
      img: "https://cdn-icons-png.flaticon.com/512/3270/3270991.png",
    },
    {
      id: "network08",
      title: "Bảo Mật Dữ Liệu Mạng",
      desc: "SSL, TLS và các kỹ thuật mã hóa giúp an toàn trong truyền thông mạng.",
      img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    },
    {
      id: "network09",
      title: "Truyền File Qua Mạng",
      desc: "Học cách gửi và nhận file thông qua TCP hoặc HTTP.",
      img: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
    },
    {
      id: "network10",
      title: "Xây Dựng Ứng Dụng Chat",
      desc: "Thực hành tạo ứng dụng chat thời gian thực bằng socket và đa luồng.",
      img: "https://cdn-icons-png.flaticon.com/512/2939/2939464.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-100 min-h-screen flex flex-col">
      <div className="text-center bg-orange-600 text-white py-16 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          Học Lập Trình Mạng Từ A → Z 🌐
        </h1>
        <p className="text-lg text-orange-100 max-w-2xl mx-auto">
          Blog chia sẻ kiến thức lập trình mạng — từ cơ bản đến nâng cao, ví dụ
          chi tiết, dễ hiểu và thực tế.
        </p>
        <Link
          to="/blog/network01"
          className="mt-6 inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition-all shadow-md"
        >
          Bắt đầu học ngay →
        </Link>
      </div>

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
        <p className="text-gray-700 italic mb-8 leading-relaxed px-6">
          “Mình là lập trình viên trẻ đam mê công nghệ, đặc biệt trong lĩnh vực
          lập trình mạng và bảo mật. Blog này được tạo ra để chia sẻ kiến thức
          về mạng máy tính, socket, API, và những ứng dụng thực tế mà mình đã
          học và xây dựng.”
        </p>

        <div className="bg-orange-100 p-6 rounded-xl shadow-inner mb-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-2">
            🎮 Sở Thích Cá Nhân
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Ngoài việc nghiên cứu lập trình mạng, mình thích đọc truyện, chơi
            game và khám phá công nghệ mới. Mình tin rằng lập trình là cách để
            kết nối con người – không chỉ qua mạng, mà còn qua tri thức.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-orange-700 mb-6 mt-12 text-center flex items-center justify-center gap-2">
          <i className="fas fa-globe text-blue-500"></i> Kết Nối Với Tôi
        </h3>

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

          <div className="flex justify-center gap-8 mt-10">
            <a
              href="https://facebook.com/javablog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-3xl transition-transform hover:scale-110"
              title="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://github.com/nhathuy2004dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-3xl transition-transform hover:scale-110"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:nhathuy2004dk@gmail.com"
              className="text-red-500 hover:text-red-700 text-3xl transition-transform hover:scale-110"
              title="Gmail"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-3xl transition-transform hover:scale-110"
              title="LinkedIn"
            >
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
        Nếu bạn có câu hỏi, góp ý hoặc muốn hợp tác trong dự án lập trình mạng,
        đừng ngần ngại liên hệ!
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

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/network01" element={<Network01_GioiThieu />} />
            <Route path="/blog/network02" element={<Network02_CauTrucMang />} />
            <Route path="/blog/network03" element={<Network03_TCP_UDP />} />
            <Route path="/blog/network04" element={<Network04_ClientServer />} />
            <Route path="/blog/network05" element={<Network05_Socket />} />
            <Route path="/blog/network06" element={<Network06_HTTP_RESTAPI />} />
            <Route path="/blog/network07" element={<Network07_MultiThread />} />
            <Route path="/blog/network08" element={<Network08_Security />} />
            <Route path="/blog/network09" element={<Network09_FileTransfer />} />
            <Route path="/blog/network10" element={<Network10_ChatApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
          <p className="text-sm text-gray-300">
            © 2025 Network Blog — Học Lập Trình Mạng Cùng Cộng Đồng Việt Nam
          </p>
        </footer>
      </div>
    </Router>
  );
}
