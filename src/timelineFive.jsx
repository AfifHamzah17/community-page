import React, { useEffect } from 'react';
import './Timeline.css'; 

const TimelineFive = () => {
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
        Session 5 Activities,
        <br />
        Sabang To Medan
      </h1>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>PERSIAPAN PULANG MENUJU MEDAN</h2>
            <p>Pada hari ini, para peserta akan mempersiapkan perjalanan pulang menuju Medan. Kegiatan meliputi pengecekan kondisi kendaraan, pengisian bensin, dan memastikan semua persiapan telah dilakukan dengan baik. Setiap peserta diingatkan untuk memeriksa peralatan dan memastikan kesiapan fisik sebelum perjalanan jauh dimulai.	</p>
            <span className="time-stamp">Minggu Jan - 19 - 2025</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineFive;