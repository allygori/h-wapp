import { StaticImageData } from "next/image";
// images
// import ImgMain from "@/public/assets/img/products/rNnrD6/hMHB3egnjEoHfPnhMAVTCr8TQm2bVcRMyofvskDakGzg.webp";
// import ImgColorSageGreen from "@/public/assets/img/products/rNnrD6/hMAZLvtMCEywfXshMK83UFvMsxG4DDSMaSI0hJZMUMg.webp";
// import ImgColorNavyBlue from "@/public/assets/img/products/rNnrD6/hMHBy28zs3uwL0YhMK8DpXonTXXG9dRzG3Bw1YXH1NnQ.webp";
// import ImgColorBeige from "@/public/assets/img/products/rNnrD6/h9PdaFlzFF8dCmqh9PtKu7IfyEpCkRJG1Mpbj30zXWw.webp";
// import ImgColorBlack from "@/public/assets/img/products/rNnrD6/hMHBy28zs3uwL0YhMK8OvpzHVhKC6kT6yjG0ga9YqiMA.webp";
// import ImgColorArmyGreen from "@/public/assets/img/products/rNnrD6/hMAwtJzi9fHx0hNhMK87XA7uHYQ4KJQk3KA5IPiA6w.webp";
// import ImgColorDustyPink from "@/public/assets/img/products/rNnrD6/hMHB3MY0hnAsJhqnhMK8k9lvFsHP0LPTZmIJkOZGntuiA.webp";
// import ImgColorMistyGrey from "@/public/assets/img/products/rNnrD6/hMHBBcKz2HFHLi1hMK8SiDww9CyhpTGCHXp1JPMkXPQ.webp";
// import ImgColorMocca from "@/public/assets/img/products/rNnrD6/h9PdaFlzFF8dCmqh9PtRIsdWnCaQdQCpQihNbpQw.webp";
// import ImgColorLylac from "@/public/assets/img/products/rNnrD6/h9Pd3o9rFDyqxuh9PtS8WBPYFEgWHRgOt0iDStytDuQ.webp";
import ImgMain from "@/public/assets/img/perkakas/6581241717475210210.jpg";
import Img01 from "@/public/assets/img/perkakas/2538791717475223072.jpg";
import Img02 from "@/public/assets/img/perkakas/4961431717475226380.jpg";
import Img03 from "@/public/assets/img/perkakas/1359101717475217574.jpg";
import Img04 from "@/public/assets/img/perkakas/9808231717475213504.jpg";

export type TImage = {
  name: string;
  value: string;
  src: StaticImageData;
};

export const mainImages: TImage[] = [
  { name: "Main", value: "main-01", src: ImgMain },
  { name: "Main", value: "main-02", src: Img01 },
  { name: "Main", value: "main-03", src: Img02 },
  { name: "Main", value: "main-04", src: Img03 },
  { name: "Main", value: "main-05", src: Img04 },
];

export const colors: TImage[] = [
  // { name: "Sage", value: "sage-green", src: Img01 },
  // { name: "Navy", value: "navy-blue", src: Img02 },
  // { name: "Beige", value: "beige", src: Img03 },
  // { name: "Black", value: "black", src: Img04 },
  // { name: "Army", value: "army-green", src: ImgColorArmyGreen },
  // { name: "Pink", value: "dusty-pink", src: ImgColorDustyPink },
  // { name: "Misty", value: "misty-grey", src: ImgColorMistyGrey },
  // { name: "Mocca", value: "mocca", src: ImgColorMocca },
  // { name: "Lylac", value: "lylac", src: ImgColorLylac },
];

export const sizes = [
  { name: "S", value: "s" },
  { name: "M", value: "m" },
  { name: "L", value: "l" },
  { name: "XL", value: "xl" },
];

export const variant = { colors, sizes };
export const images = [...mainImages, ...colors];
