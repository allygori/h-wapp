const format = (num: number) => {
  // const thousand = num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
  // console.log("thousand", thousand);

  // return `Rp ${thousand}`;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};

export default format;
