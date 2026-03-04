export default function About() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>About Us</h1>
          <p>Learn more about our mission and values</p>
        </div>

        <div className="card">
          <h2>Our Story</h2>
          <p>
            We are a team of passionate developers dedicated to creating
            exceptional web experiences. Our journey began with a simple goal:
            to make web development more accessible and enjoyable for everyone.
          </p>
          <p>
            Today, we continue to push the boundaries of what's possible with
            modern web technologies, always keeping user experience at the
            forefront of everything we do.
          </p>

          <h3>Our Mission</h3>
          <p>
            To empower developers and businesses with tools and solutions that
            make building beautiful, functional web applications easier than
            ever before.
          </p>

          <h3>Our Values</h3>
          <ul className="values-list">
            <li>Innovation and continuous improvement</li>
            <li>User-centric design</li>
            <li>Quality and reliability</li>
            <li>Transparency and integrity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
