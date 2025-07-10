import React from 'react';
import './Services.css';

const Services = () => {
  return(
  <section className="el-services" id="services">
    <h2 className="el-section-title">Services We Offer</h2>
    <p className="el-section-desc">Those who have little interest in spirituality shouldn’t think that human inner values don’t apply to you.<br/> 
    The inner peace of an alert and calm mind are the source of real happiness and good health. <br/>
    Our human intelligence tells us which of our emotions are positive and helpful and which are damaging and to be restrained or avoided.</p>
    <div className="el-services-cards">
      <div className="el-service-card">
        <div className="el-service-img el-service-img-1"></div>
        <h3>Guided Meditation</h3>
        <p>The five-step method to help you begin with the Rajyoga Meditation to heal your mind and body.</p>
        <a href="https://www.brahmakumaris.org/meditation/how-to-meditate" className="el-service-link">Read More →</a>
      </div>
      <div className="el-service-card">
        <div className="el-service-img el-service-img-2"></div>
        <h3>Online Courses</h3>
        <p>This is our online 7 days course service, starting from Who am I, introduction of the Soul (Day 1) <br/>to learning the purpose and method of RajYog aka Raja Yoga meditation (Day 7).</p>
        <a href="https://www.shivbabas.org/services/online-rajyoga-course" className="el-service-link">Read More →</a>
      </div>
      <div className="el-service-card">
        <div className="el-service-img el-service-img-3"></div>
        <h3>Daily Inspiring Messages</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Get 𝐦𝐨𝐭𝐢𝐯𝐚𝐭𝐢𝐧𝐠, 𝐡𝐞𝐚𝐥𝐢𝐧𝐠, 𝐮𝐩𝐥𝐢𝐟𝐭𝐢𝐧𝐠, 𝐠𝐮𝐢𝐝𝐢𝐧𝐠, 𝐚𝐧𝐝 𝐢𝐧𝐬𝐩𝐢𝐫𝐢𝐧𝐠 messages that you can find relevant<br/>& helpful at any point or phase of your life.</p>
        <a href="https://www.shivbabas.org/inspirations" className="el-service-link">Read More →</a>
      </div>
    </div>
    <div className="el-services-cards">
      <div className="el-service-card">
        <div className="el-service-img el-service-img-4"></div>
        <h3>Thoughts for Today</h3>
        <p>Get your every day dose of inspiring, thought-provoking "thought of the day" in a well-prepared <br/>format to read online and download the image of "thought for today".</p>
        <a href="https://www.shivbabas.org/thoughts" className="el-service-link">Read More →</a>
      </div>
      <div className="el-service-card">
        <div className="el-service-img el-service-img-5"></div>
        <h3>Main Blog</h3>
        <p>Articles, important monthly posts, question answers, Murli poems,&nbsp;&nbsp; news and notices</p>
        <a href="https://www.shivbabas.org/blog" className="el-service-link">Read More →</a>
      </div>
      <div className="el-service-card">
        <div className="el-service-img el-service-img-6"></div>
        <h3>Daily Gyan Murli</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Murlis are teachings (knowledge) and daily instructions (shrimat) given by Parampita ParamAtma SHIV BABA,<br/> our spiritual father, the Supreme soul. </p>
        <a href="https://www.shivbabas.org/murli-today" className="el-service-link">Read More →</a>
      </div>
    </div>
    
  </section>
  );
}

export default Services; 