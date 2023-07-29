import { useState } from "react";
import CFAQ from "./cards/CFAQ";

const FAQ = () => {
  const dataFAQ = [
    {
      id: 1,
      question: "Jam Berapa Bumi Perkemahan Gendingan Suryabakti di Buka?",
      answer:
        "Bumi Perkemahan Gendingan Suryabakti Buka dari jam 07.00 WIB sampai 17.00 WIB",
      open: false,
    },
    {
      id: 2,
      question: "Bagaimana cara melakukan reservasi untuk berkemah?",
      answer:
        "Untuk melakukan reservasi berkemah dapat melalui nomor WhatsApp pada Website ini",
      open: false,
    },
    {
      id: 3,
      question:
        "Berapa harga tiket masuk Bumi Perkemahan Gendingan Suryabakti?",
      answer:
        "Harga tiket masuk Bumi Perkemahan Gendingan Suryabakti adalah Rp.5000 per orang",
      open: false,
    },
    {
      id: 4,
      question: "Apakah bisa reservasi tempat untuk acara selain berkemah?",
      answer:
        "Sangat bisa, Kami memiliki Lahan yang luas serta banyak gazebo kecil untuk kapasitas 4-6 orang dan gazebo besar dengan kapasitas orang lebih banyak. ",
      open: false,
    },
    {
      id: 5,
      question: "Bagaimana jika ingin memesan tenda untuk berkemah?",
      answer:
        "Untuk Melakukan Pemesanan tedan dapat melalui nomor WhatsApp pada website ini",
      open: false,
    },
  ];

  const [data, setData] = useState(dataFAQ);

  const changeOpen = (id) => {
    const dataTemp = data.map((value) => {
      if (value.id === id) {
        return { ...value, open: true };
      }
      return { ...value, open: false };
    });
    setData(dataTemp);
  };

  return (
    <>
      <section id="faq" class=" bg-secondary h-fit">
        <div class="w-5/6 mx-auto py-24 md:py-32">
          <h1
            class="text-primary font-semibold tracking-wider text-3xl mb-12 text-center"
            onClick={() => changeOpen(1)}
          >
            FAQ
          </h1>
          <div class="max-w-4xl mx-auto">
            {data.map((value) => {
              return (
                <CFAQ
                  answer={value.answer}
                  question={value.question}
                  id={value.id}
                  open={value.open}
                  changeOpen={changeOpen}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
