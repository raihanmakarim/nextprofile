export default function handler(req, res) {
  res.status(200).json({
    id: "home",
    title: "NEXT SERVICE",
    content: `NEXT Service merupakan perusahaan yang bergerak dibidang teknologi,
        dengan spesialisasi di Website, Mobile, dan Sistem Informasi Geografis.
        Perusahaan kami berisi dengan talenta-talenta berpengalaman, dan
        komunikatif terhadap keinginan klien, sehingga produk yang didapatkan
        sesuai dengan yang diinginkan. Produk kami bervariasi, dari pembuatan
        website perusahaan, desain grafis, aplikasi internal perusahaan,
        analisis data, dan sebagainya. Sesuai dengan visi kami yaitu "Design,
        Develop, Improve, Repeat", perusahaan kami akan terus memberikan produk
        dari prototipe awal, dan terus mengkomunikasikan dengan klien sehingga
        produk ter deliver sesuai ekspektasi.`,
  });
}
