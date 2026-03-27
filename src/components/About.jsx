import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap">
            {/* srcset: mobile ko 400px, tablet ko 550px, desktop ko 700px bhejo */}
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=75&fm=webp"
              srcSet="
                https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=65&fm=webp 400w,
                https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=550&q=70&fm=webp 550w,
                https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=75&fm=webp 700w
              "
              sizes="(max-width: 480px) 400px, (max-width: 768px) 550px, 700px"
              alt="Home kitchen cooking"
              width="700"
              height="525"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-text">
            <span className="about-tag">Our Story</span>
            <h2>Cooked with Love,<br />Delivered with Care</h2>
            <p>
              GharKaKhana started in 2021 when Sunita Sharma began making home-cooked
              tiffins for working professionals in Mumbai who missed their maa ke haath ka khana.
            </p>
            <p>
              Today, we serve hundreds of families across Mumbai — same recipes, same love,
              same fresh ingredients. No preservatives, no shortcuts. Just real food.
            </p>
            <ul className="about-list">
              <li>Prepared fresh daily by home chefs</li>
              <li>No artificial preservatives or colours</li>
              <li>Eco-friendly packaging</li>
              <li>Customise your meals &amp; dietary needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}