import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-100 min-h-screen flex flex-col items-center py-20 px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center border border-orange-200">
        <h1 className="text-5xl font-extrabold text-orange-700 mb-6">
          💖 Lời Cảm Ơn
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Xin gửi lời cảm ơn chân thành nhất đến bạn — người đã dành thời gian
          ghé thăm và đồng hành cùng mình trên hành trình học tập, khám phá và
          chia sẻ kiến thức lập trình mạng 🌐.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Mình tin rằng, mỗi người khi bước chân vào con đường công nghệ đều có
          một câu chuyện riêng, một niềm đam mê và một mục tiêu đáng quý. Chính
          bạn đã làm cho cộng đồng lập trình trở nên tốt đẹp hơn — bằng sự tò
          mò, học hỏi và tinh thần không ngừng phát triển của mình 💪.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Mình thật sự trân trọng từng lượt xem, từng dòng bình luận, và từng
          sự ủng hộ nhỏ bé mà bạn dành cho blog này. Mong rằng những bài viết
          tại đây sẽ giúp bạn có thêm động lực, kiến thức và cảm hứng trên con
          đường lập trình.
        </p>

        <p className="text-orange-700 font-semibold text-xl mt-8">
          🌟 Chúc bạn luôn <strong>thành công</strong>, <strong>hạnh phúc</strong>  
          và <strong>vững bước</strong> trong cuộc sống!  
          <br />
          Hãy luôn tin vào chính mình — vì bạn có thể làm được tất cả.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md"
          >
            ← Quay lại Trang Chủ
          </Link>
        </div>
      </div>

      <footer className="mt-20 text-gray-600 text-sm">
        © 2025 Network Blog — Cảm ơn bạn đã đồng hành cùng mình ❤️
      </footer>
    </div>
  );
}
