const MainSection = () => {
  // Definisikan gaya latar belakang dan lainnya

  /*
  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '110vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#B5CFD8', // Warna latar belakang
    color: '#E8ECF1', // Warna teks
    fontFamily: 'Arial, sans-serif'
  };
  */
/*
  const boxStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Atur lebar sesuai kebutuhan
    minHeight: 'calc(110vh)', // Atur tinggi minimum sesuai kebutuhan
    borderTopLeftRadius: '100px',  // atur lengkungan kiri atas
    borderTopRightRadius: '100px',  // atur lengkungan kiri atas
    backgroundColor: '#7393A7', // Warna latar belakang div
    padding: '2rem' // Padding di sekitar konten
  };
*/
  return (
    <main className='h-auto bg-[#b5cfdb] text-[#e8ecf1] font-sans'>
        <div className='w-full rounded-t-[100px] bg-[#7393a7] p-16'>
          <div className='mx-auto w-full max-w-6xl space-y-8'>
            <h1 className='text-center text-5xl'>About me</h1>    {/*ini judul*/}
              <div className='flex flex-col gap-8 md:flex-row'>
                <div className='md:w-1/2'>
                  <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Selamat Datang di Halaman Saya</h1>
                  <p>Ini adalah halaman web sederhana menggunakan Next.js. \n Konten masih dalam masa pengembangan.</p>
                </div>
                <div className='h-[1px] bg-[#b5cfdb] md:h-auto md:w-[1px]'></div>
                <div>
                  <p>halooo</p>
                  <ul className='list-inside list-disc'>
                    <li>satu satu</li>
                    <li>dua dua</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default MainSection;
