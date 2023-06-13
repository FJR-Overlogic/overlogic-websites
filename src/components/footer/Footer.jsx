import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="sub-footer-1">
        <div className="footer-section-1">
          <h1>
            OVERLOGIC
          </h1>
          <section className="footer-section-list">
            <span>Profil</span>
            <span>Tata Kelola</span>
            <span>Laporan</span>
            <span>Kontak</span>
          </section>
        </div>
        <div className="footer-section-2">
          <section className="footer-text-info">
            <p>
              BCA Digital berizin dan diawasi oleh Otoritas Jasa Keuangan.<br></br>BCA Digital merupakan peserta penjaminan LPS.
            </p>
          </section>
          <section>
            <box-icon color="white" border="circle" type='logo' name='youtube'></box-icon>
            <box-icon color="white" border="circle" type='logo' name='vk'></box-icon>
            <box-icon color="white" border="circle" type="logo" name="facebook"></box-icon>
            <box-icon color="white" border="circle" type='logo' name='twitter'></box-icon>
            <box-icon color="white" border="circle" type='logo' name='tiktok'></box-icon>
            <box-icon color="white" border="circle" type='logo' name='instagram'></box-icon>
          </section>
        </div>
      </div>

      <div className="sub-footer-2">
        <p>
        Terima kasih sudah mampir! Laman ini lebih nyaman dinikmati di ponsel pintar. Coba sekarang untuk pengalaman yang lebih maksimal.
        </p>
      </div>

      <div className="sub-footer-3">
        <p>
        Nilai simpanan maksimum yang dijamin oleh LPS sebesar Rp 2.000.000.000 (dua miliar rupiah)
dengan tingkat bunga penjaminan maksimum sebesar 4.25% (empat koma dua lima persen) untuk rupiah sesuai ketentuan yang berlaku. Klik disini untuk mengunduh bukti kepesertaan kami.
        </p>
      </div>
    </div>
  )
};

export default Footer;
