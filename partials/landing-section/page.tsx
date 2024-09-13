// app/page.tsx

import React from 'react';

const MainSection = () => {
  // Definisikan gaya latar belakang dan lainnya
  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '110vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#e4e2ca', // Warna latar belakang biru
    color: '#fff', // Warna teks
    fontFamily: 'Arial, sans-serif'
  };

  const boxStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Atur lebar sesuai kebutuhan
    minHeight: 'calc(110vh)', // Atur tinggi minimum sesuai kebutuhan
    borderBottomLeftRadius: '100px', // Rounded bottom-left corners
    borderBottomRightRadius: '100px', // Rounded bottom-right corners
    backgroundColor: '#68958e', // Warna latar belakang div
    padding: '2rem' // Padding di sekitar konten
  };

  return (
    <main style={styles}>
        <div style={boxStyles}>
            <div>
              <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Selamat Datang di Halaman Saya</h1>
              <p style={{ fontSize: '1rem' }}>Ini adalah halaman web sederhana menggunakan Next.js.</p>
              <p style={{ fontSize: '1rem' }}>Konten masih dalam masa pengembangan.</p>
            </div>
        </div>
    </main>
  );
};

export default MainSection;
