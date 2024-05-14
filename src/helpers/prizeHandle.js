//! Aldığı puan bilgisine göre alınan ödülü belirler.

const prizeHandle = (point) => {
  if (point >= 90) {
    return {
      message: "Congraulations! You won a laptop",
      src: "img/laptop.png",
    };
  } else if (point < 90 && point >= 75) {
    return {
      message: "Congraulations! You won a telephone",
      src: "img/telephone.png",
    };
  } else if (point < 75 && point >= 60) {
    return {
      message: "Congraulations! You won a tablet",
      src: "img/tablet.png",
    };
  } else if (point < 60 && point >= 50) {
    return {
      message: "Congraulations! You won a headphones",
      src: "img/headphones.png",
    };
  } else {
    return {
      message: "Sorry, unfortunately you did not win anything.",
      src: "",
    };
  }
};

export default prizeHandle;
