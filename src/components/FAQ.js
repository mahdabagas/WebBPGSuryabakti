import { useState } from "react";
import CFAQ from "./cards/CFAQ";

const FAQ = () => {
  const dataFAQ = [
    {
      id: 1,
      question:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, dignissimos.",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat repellat laboriosam quisquam rem, nam ea velit temporibus sint laborum ducimus.",
      open: false,
    },
    {
      id: 2,
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, autem.",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam dolor accusamus dolore aperiam voluptatum similique id commodi voluptatem quo.",
      open: false,
    },
    {
      id: 3,
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, autem.",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam dolor accusamus dolore aperiam voluptatum similique id commodi voluptatem quo.",
      open: false,
    },
    {
      id: 4,
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, autem.",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam dolor accusamus dolore aperiam voluptatum similique id commodi voluptatem quo.",
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
