import React, { useEffect } from 'react';
import './Timeline.css'; 

const TimelineTwo = () => {
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
        Session 2 Activities,
        <br />
        Kawasaki Medan, Iskandar Muda
      </h1>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Persiapan Touring</h2>
            <p>Peserta berkumpul di titik kumpul (Tikum) untuk persiapan
               sebelum memulai perjalanan touring. Setiap peserta akan 
               dibagikan intercom dan dibagi ke dalam grup yang dipimpin 
               oleh masing-masing pemimpin.	</p>
            <span className="time-stamp">Kamis Jan - 16 - 2025 04:30 WIB</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon success">
            <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content right">
            <h2>Doa dan On The Bike menuju Banda Aceh</h2>
            <p>Setelah doa bersama, peserta akan memulai perjalanan 
              menuju Banda Aceh. Kapten Road Captain dan sweeper akan 
              memimpin perjalanan dengan memastikan seluruh peserta 
              tetap aman selama perjalanan.	</p>
            <span className="time-stamp">Kamis Jan - 16 - 2025 05:00 WIB</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TimelineTwo;

