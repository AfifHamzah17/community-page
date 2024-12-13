import React, { useEffect } from 'react';
import './Timeline.css'; 

const TimelineFour = () => {
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
        Session 4 Activities,
        <br />
        Hotel Sabang, Pulau Weh
      </h1>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Sarapan & Safety Riding Sabang</h2>
            <p>Setelah sarapan pagi, peserta akan melanjutkan kegiatan riding keliling Sabang. Selama perjalanan, mereka akan menikmati keindahan alam Sabang dan merasakan kebersamaan dalam komunitas.	</p>
            <span className="time-stamp">Sabtu Jan - 18 - 2025 08:00 WIB</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineFour;