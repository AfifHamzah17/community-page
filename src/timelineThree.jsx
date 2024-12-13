import React, { useEffect } from 'react';
import './Timeline.css'; 

const TimelineThree = () => {
  useEffect(() => {
    const timelineBlocks = document.querySelectorAll('.timeline-item');
    const offset = 0.8;

    const hideBlocks = (blocks, offset) => {
      blocks.forEach((block) => {
        if (block.getBoundingClientRect().top > window.innerHeight * offset) {
          block.querySelector('.timeline-icon').classList.add('is-hidden');
          block.querySelector('.timeline-content').classList.add('is-hidden');
        }
      });
    };

    const showBlocks = (blocks, offset) => {
      blocks.forEach((block) => {
        if (
          block.getBoundingClientRect().top <= window.innerHeight * offset &&
          block.querySelector('.timeline-icon').classList.contains('is-hidden')
        ) {
          block.querySelector('.timeline-icon').classList.remove('is-hidden');
          block.querySelector('.timeline-content').classList.remove('is-hidden');
          block.querySelector('.timeline-icon').classList.add('animate-it');
          block.querySelector('.timeline-content').classList.add('animate-it');
        }
      });
    };

    hideBlocks(timelineBlocks, offset);

    const handleScroll = () => {
      (!window.requestAnimationFrame)
        ? setTimeout(() => { showBlocks(timelineBlocks, offset); }, 100)
        : window.requestAnimationFrame(() => { showBlocks(timelineBlocks, offset); });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <a href="/activities">
      <button class="session-button">
        Session 1
      </button>
    </a>
    <a href="/activities-session-2">
      <button class="session-button">
        Session 2
      </button>
    </a>
    <a href="/activities-session-3">
      <button class="session-button">
        Session 3
      </button>
    </a>
    <a href="/activities-session-4">
      <button class="session-button">
        Session 4
      </button>
    </a>
    <a href="/activities-session-5">
      <button class="session-button">
        Session 5
      </button>
    </a>
    <div className="timeline-container">
      <h1 className="project-name">
        Session 3 Activities,
        <br />
        Hotel Banda Aceh
      </h1>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Sarapan</h2>
            <p>Setibanya di Banda Aceh, peserta akan menikmati sarapan pagi 
              di hotel dan beristirahat sejenak. Selain itu, mereka bisa menikmati 
              pemandangan sekitar Banda Aceh sebelum melanjutkan perjalanan.</p>
            <span className="time-stamp">Jum'at Jan - 17 - 2025 08:00 WIB</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon success">
            <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content right">
            <h2>Prepare menuju Sabang</h2>
            <p>Persiapan untuk menuju Sabang dimulai, termasuk penyebrangan 
              ke Pulau Weh. Seluruh peserta akan mempersiapkan diri sebelum 
              melanjutkan perjalanan menuju titik 0 Kilometer di Sabang.	</p>
            <span className="time-stamp">Jum'at Jan - 17 - 2025 10:00 WIB</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Istirahat, Shalat, Makan siang</h2>
            <p>Peserta akan diberikan waktu untuk istirahat, shalat, dan 
              makan siang di Kota Sabang. Ini adalah kesempatan untuk bersantai 
              dan menikmati keindahan Pulau Weh sebelum melanjutkan perjalanan.	</p>
            <span className="time-stamp">Jum'at Jan - 17 - 2025 12:30 WIB</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TimelineThree;