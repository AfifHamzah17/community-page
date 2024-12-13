import React, { useEffect } from 'react';
import './Timeline.css'; 

const Timeline = () => {
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
        Session 1 Activities,
        <br />
        Big Papa Sekretariat ZOM
      </h1>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Registrasi dan makan</h2>
            <p>Peserta acara diminta untuk melakukan registrasi 
              dan menikmati hidangan yang telah disediakan sambil menikmati 
              penampilan musik band. Suasana santai dan hangat untuk saling mengenal.	</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 19.00 - 19.45</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon success">
            <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content right">
            <h2>Menyanyikan Indonesia Raya</h2>
            <p>Semua peserta akan berdiri dan menyanyikan lagu kebangsaan Indonesia Raya 
              sebagai tanda penghormatan dan kebanggaan terhadap tanah air Indonesia, 
              menciptakan suasana yang penuh semangat.</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 19.45 - 20.00</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Pembacaan Doa</h2>
            <p>Acara dilanjutkan dengan pembacaan doa yang dipimpin oleh Imran Muaya. 
              Doa ini bertujuan untuk memohon kelancaran dan keselamatan bagi seluruh 
              kegiatan yang akan berlangsung dalam acara ini.</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 20.00 - 20.15</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon success">
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content right">
            <h2>Penyerahan amplop Anak Yatim Piatu </h2>
            <p>Sebagai bentuk kepedulian sosial, para peserta acara secara simbolis
               menyerahkan amplop untuk anak yatim piatu. Kegiatan ini diharapkan 
               dapat memberikan kebahagiaan kepada yang membutuhkan.</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 20.15 - 20.30</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon ">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Potong Tumpeng & Kata Sambutan Para Ketua</h2>
            <p>Sebagai simbol syukur atas perjalanan ZOM selama setahun, acara 
              dilanjutkan dengan pemotongan tumpeng. Setiap ketua memberikan 
              sambutan yang menginspirasi, mengajak peserta untuk terus berprestasi.</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 20.30 - 21.00</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon success">
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content right">
            <h2>Safety Riding</h2>
            <p>Kolaborasi dengan komunitas bikers Banda Aceh untuk melakukan Night Ride (NR) bersama. Selama perjalanan, dokumentasi foto dan video akan dilakukan untuk mengabadikan momen spesial ini.</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 21.00 - 21.30</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Freestyle ZX & Penutupan </h2>
            <p>Kolaborasi dengan komunitas bikers Banda Aceh untuk melakukan Night Ride (NR) bersama. Selama perjalanan, dokumentasi foto dan video akan dilakukan untuk mengabadikan momen spesial ini.</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 21.30 - 22.00</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Timeline;

