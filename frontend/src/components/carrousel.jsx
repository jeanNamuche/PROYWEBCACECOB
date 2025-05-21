import { useState } from "react";

const images = [
  {
    src: "https://media.istockphoto.com/id/2102571053/photo/judge-or-legal-advisor-lawyer-examining-and-signing-legal-documents.jpg?s=2048x2048&w=is&k=20&c=lk-xc4NvRF4EeasoN1PCPMqzYxJUkXLvQX6Spueif-g=",
    caption: "Primera imagen",
  },
  {
    src: "https://media.istockphoto.com/id/1961177735/photo/lawyer-working-at-wooden-table-indoors-closeup.jpg?s=2048x2048&w=is&k=20&c=fafxCfvvSnp7NQMyENflayOpT4zdKnvIfrMcnE38XzI=",
    caption: "Segunda imagen",
  },
  {
    src: "https://media.istockphoto.com/id/1449334081/es/foto/estatua-de-la-dama-de-la-justicia-en-el-escritorio-de-un-juez-o-abogado.jpg?s=2048x2048&w=is&k=20&c=hKBS1ODtOAEJQ3WAEK3yMjoxVg7MR98-IeMrgPK_o5g=",
    caption: "Tercera imagen",
  },
];

function Carrousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: "relative", width: "70em", margin: "auto" }}>
      <img
        src={images[index].src}
        alt={`Slide ${index}`}
        style={{ width: "100%", height: "20em", borderRadius: "10px" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {images[index].caption}
      </div>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
        }}
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
      >
        ▶
      </button>
    </div>
  );
}

export default Carrousel;
