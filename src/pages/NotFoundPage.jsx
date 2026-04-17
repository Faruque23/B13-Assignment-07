import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFoundPage = () => (
  <div className="nf-page">
    <div className="nf-code">404</div>
    <h2>Page Not Found</h2>
    <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
    <Link to="/" className="nf-home-btn">← Back to Home</Link>
  </div>
);

export default NotFoundPage;
