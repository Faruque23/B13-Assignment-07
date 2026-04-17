import '../styles/Footer.css'

const SocialIcon = ({ title, children }) => (
  <a href="#" className="footer-social-link" aria-label={title}>
    {children}
  </a>
)

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <h2>KeenKeeper</h2>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <div className="footer-social">
            <SocialIcon title="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.69 2.69 0 0 0-1.9-1.9C18.88 4 12 4 12 4s-6.88 0-8.64.52A2.69 2.69 0 0 0 1.46 6.42 28.5 28.5 0 0 0 0 12a28.5 28.5 0 0 0 1.46 5.58 2.69 2.69 0 0 0 1.9 1.9C5.12 20 12 20 12 20s6.88 0 8.64-.52a2.69 2.69 0 0 0 1.9-1.9A28.5 28.5 0 0 0 24 12a28.5 28.5 0 0 0-1.46-5.58z"></path>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
              </svg>
            </SocialIcon>
            <SocialIcon title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.09c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </SocialIcon>
            <SocialIcon title="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </SocialIcon>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
