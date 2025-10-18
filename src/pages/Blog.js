import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="p-6">
      <h1>Các Bài Viết Java</h1>
      <ul>
        <li><Link to="/blog/java-co-ban">Java Cơ Bản</Link></li>
        <li><Link to="/blog/huong-doi-tuong">Hướng Đối Tượng</Link></li>
        <li><Link to="/blog/collection-framework">Collection Framework</Link></li>
      </ul>
    </div>
  );
}
