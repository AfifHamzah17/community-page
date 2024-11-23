import React from 'react';
import './card.css';
// Contoh data gambar dan deskripsi
const imageData = [
  {
    id: 1,
    src: './images/c10.png',
    alt: 'Image 1',
    description: 'Terbentuknya ZX Owners Medan\n Januari 2024'
  },
  {
    id: 2,
    src: './images/c5.jpg',
    alt: 'Image 2',
    description: 'Touring Kebersamaan “Go To Balige”\n Februari 2024',
  },
  {
    id: 3,
    src: './images/c2_000.jpg',
    alt: 'Image 3',
    description: 'Deklarasi Komunitas ZX Owners Medan ZOM\n Maret 2024',
  },
  {
    id: 4,
    src: './images/c8.jpg',
    alt: 'Image 4',
    description: 'Pembagian Sedekah dan Sembako\n April 2024',
  },
  {
    id: 5,
    src: './images/c9.jpg',
    alt: 'Image 5',
    description: 'Touring Kebersamaan Featuring ZX Series di Jakarta dan Bandung\n Mei 2024',
  },
  {
    id: 6,
    src: './images/c1.heic',
    alt: 'Image 6',
    description: 'Touring Wisata Lau Kawar dan Berastagi\n Juni 2024',
  },
  {
    id: 7,
    src: './images/c6.jpg',
    alt: 'Image 7',
    description: 'Touring Wisata Alam Bukit Lawang\n Juli 2024',
  },
  {
    id: 8,
    src: './images/c11.heic',
    alt: 'Image 8',
    description: 'Silaturahmi  Anniversary 4th ZX Owners Bandung\n Agustus 2024',
  },
  {
    id: 9,
    src: './images/c7.jpg',
    alt: 'Image 9',
    description: 'Bakti Sosial Panti Asuhan\n September 2024',
  },
  {
    id: 10,
    src: './images/c13.jpg',
    alt: 'Image 10',
    description: 'Touring Wisata Danau Toba\n Oktober 2024',
  },
  {
    id: 11,
    src: './images/c14.jpg',
    alt: 'Image 11',
    description: 'Silaturahmi Anniversary ZX Owners Dewata (ZODA)\n November 2024',
  },
  {
    id: 12,
    src: './images/c15.jpg',
    alt: 'Image 12',
    description: 'Touring Wisata Alam Pulau Samosir\n Desember 2024',
  },
];

const ImageCard = ({ src, alt, description }) => {
  return (
    <div className="card">
      <img src={src} alt={alt} className="card-img" />
      <p className="card-description">{description}</p>
    </div>
  );
};

const Card = () => {
  return (
    <div className="gallery">
      {imageData.map((image) => (
        <ImageCard
          key={image.id}
          src={image.src}
          alt={image.alt}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default Card;
