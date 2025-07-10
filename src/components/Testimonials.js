import React from 'react';
import './Testimonials.css';

const Testimonials = () => (
  <section className="test-testimonial" id="testimonials">
    <h2 className="test-title">Testimonials</h2>
    <p className="test-desc">Experience is the greatest authority. It speaks the authentic language of the heart. Know what the leaders,
       intellectuals and people with different backgrounds have experienced in Brahma Kumaris. </p>

    <div className="test-cards">
      <div className="test-card">
        <div className="test-img test-img-7"></div>
        <h3>Ayesha Kapoor Adlaka</h3>
        <a href="https://www.brahmakumaris.com/testimonials/artists/this-spiritual-retreat-felt-like-pure-magic-ayesha-adlakha-experience/" className="test-link">Read More →</a>
      </div>
        <div className="test-card">
          <div className="test-img test-img-8"></div>
          <h3>Avnish Goyal</h3>
        <a href="https://www.brahmakumaris.com/testimonials/businessman/spiritual-awakening-in-india-avnish-goyals-experience-in-mount-abu/" className="test-link">Read More →</a>
      </div>
     
    </div>
    <a href="https://www.brahmakumaris.com/testimonials/" className="test-viewall">View All →</a>
  </section>
);

export default Testimonials; 