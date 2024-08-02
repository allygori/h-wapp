import Image from "next/image";
import LogoIndihomeTV from "@/public/assets/img/logos/indihome-tv.png";
import LogoDisneyHotstar from "@/public/assets/img/logos/disney-hotstar.png";
import LogoMaxstream from "@/public/assets/img/logos/maxstream.png";
import LogoNetflix from "@/public/assets/img/logos/netflix.png";
import LogoWeTVIflix from "@/public/assets/img/logos/wetv-iflix.png";
import LogoCatchplayPlus from "@/public/assets/img/logos/catchplay-plus.jpg";
import LogoVidio from "@/public/assets/img/logos/vidio.jpeg";
import LogoMola from "@/public/assets/img/logos/mola.png";
import LogoGameqoo from "@/public/assets/img/logos/gameqoo.png";
import LogoPijarBelajar from "@/public/assets/img/logos/pijar-belajar.png";
import LogoLangitMusik from "@/public/assets/img/logos/langit-musik.png";

const AddOnImage = ({ addon }: { addon?: string }) => {
  if (addon === "indihome-tv") {
    return (
      <Image src={LogoIndihomeTV} alt="IndiHome TV" width={48} height={48} />
    );
  }

  if (addon === "disney-hotstar") {
    return (
      <Image
        src={LogoDisneyHotstar}
        alt="Disney Hotstar"
        width={48}
        height={48}
      />
    );
  }

  if (addon === "maxstream") {
    return <Image src={LogoMaxstream} alt="Maxstream" width={48} height={48} />;
  }

  if (addon === "netflix") {
    return <Image src={LogoNetflix} alt="Netflix" width={48} height={48} />;
  }

  if (addon === "wetv-iflix") {
    return (
      <Image src={LogoWeTVIflix} alt="WeTV Iflix" width={48} height={48} />
    );
  }

  if (addon === "catchplay-plus") {
    return (
      <Image
        src={LogoCatchplayPlus}
        alt="Catchplay Plus"
        width={48}
        height={48}
      />
    );
  }

  if (addon === "vidio") {
    return <Image src={LogoVidio} alt="Vidio" width={48} height={48} />;
  }

  if (addon === "mola") {
    return <Image src={LogoMola} alt="Mola" width={48} height={48} />;
  }

  if (addon === "gameqoo") {
    return <Image src={LogoGameqoo} alt="Gameqoo" width={48} height={48} />;
  }

  if (addon === "pijar-belajar") {
    return (
      <Image
        src={LogoPijarBelajar}
        alt="Pijar Belajar"
        width={48}
        height={48}
      />
    );
  }

  if (addon === "langit-musik") {
    return (
      <Image src={LogoLangitMusik} alt="Langit Musik" width={48} height={48} />
    );
  }

  return null;
};

export default AddOnImage;
