export default function Home() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Welcome Home!</h1>
          <p>Explore our amazing features and services</p>
        </div>

        <div className="content-grid">
          <div className="feature-card">
            <h3>🎯 Fast & Reliable</h3>
            <p>
              Experience lightning-fast performance with our optimized platform.
              Built with modern technologies for the best user experience.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure</h3>
            <p>
              Your data is protected with industry-standard security measures.
              We prioritize your privacy and safety above all.
            </p>
          </div>

          <div className="feature-card">
            <h3>💡 Innovative</h3>
            <p>
              Stay ahead with cutting-edge features and continuous updates.
              We're constantly improving to serve you better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
