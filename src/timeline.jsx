// src/Timeline.js
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
    <div className="timeline-container">
      <h1 className="project-name">1st Anniversary Activities</h1>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Big Gathering</h2>
            <p>Kegiatan pembukaan perayaan 1st Anniversary ZX Owners Medan yang akan dihadiri oleh seluruh anggota klub, dengan acara makan bersama, live music, dan kompetisi kecil. Ini adalah kesempatan untuk mempererat tali persaudaraan antar anggota dan merayakan momen spesial bersama.</p>
            <span className="time-stamp">Rabu Jan - 15 - 2025 09:00 AM</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon success">
            <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content right">
            <h2>Touring to Pulau Sabang</h2>
            <p>Touring bersama klub ZX seluruh Indonesia menuju Pulau Sabang, Nanggroe Aceh Darussalam. Peserta akan berkumpul di Kantor dan Showroom Kawasaki Medan sebelum memulai perjalanan panjang yang penuh petualangan dan kebersamaan.</p>
            <span className="time-stamp">Kamis Jan - 16 - 2025 10:00 AM</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Gathering & Sharing</h2>
            <p>Sesi Gathering dan Sharing Knowledge dengan klub motor Kawasaki di Banda Aceh. Para rider akan saling bertukar pengalaman dan wawasan seputar dunia motor Kawasaki, memperkuat komunitas ZX Series di Aceh.</p>
            <span className="time-stamp">Jum'at Jan - 17 - 2025 08:00 AM</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon success">
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content right">
            <h2>Night Ride</h2>
            <p>Kolaborasi dengan komunitas bikers Banda Aceh untuk melakukan Night Ride (NR) bersama. Selama perjalanan, dokumentasi foto dan video akan dilakukan untuk mengabadikan momen spesial ini.</p>
            <span className="time-stamp">Jum'at Jan - 17 - 2025 08:00 AM</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon ">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>
          <div className="timeline-content">
            <h2>Safety Riding Training</h2>
            <p>Pelatihan safety riding di Pulau Sabang yang bertujuan untuk meningkatkan keterampilan berkendara aman bagi semua rider ZX Series. Kegiatan ini diikuti dengan Night Ride bersama seluruh bikers pengguna ZX Series.</p>
            <span className="time-stamp">Sabtu Jan - 18 - 2025 10:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

