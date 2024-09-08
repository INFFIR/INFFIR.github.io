'use client';
import './BackgroundScroll.css';

export default function BackgroundScroll() {
  return (
    <div className="scroll-container">
      <section className="box-section blue-bg">
        <h1>Halaman 1</h1>
        <p>Ini adalah halaman pertama dengan background biru.</p>
      </section>

      <section className="box-section red-bg">
        <h1>Halaman 2</h1>
        <p>Ini adalah halaman kedua dengan background merah.</p>
      </section>

      <section className="box-section yellow-bg">
        <h1>Halaman 3</h1>
        <p>Ini adalah halaman ketiga dengan background kuning.</p>
      </section>
    </div>
  );
}
