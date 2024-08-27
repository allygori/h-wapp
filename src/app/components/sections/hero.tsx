import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Hero = ({ className = "" }: Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center",
        "py-8",
        className,
      )}
      style={{
        backgroundColor: "#99a3ff",
        backgroundImage:
          "radial-gradient(at 25% 26%, hsla(146,100%,94%,1) 0px, transparent 50%), radial-gradient(at 7% 82%, hsla(59,100%,94%,1) 0px, transparent 50%), radial-gradient(at 73% 73%, hsla(240,100%,94%,1) 0px, transparent 50%), radial-gradient(at 66% 80%, hsla(197,100%,94%,1) 0px, transparent 50%), radial-gradient(at 8% 43%, hsla(12,100%,94%,1) 0px, transparent 50%), radial-gradient(at 35% 6%, hsla(61,100%,94%,1) 0px, transparent 50%), radial-gradient(at 65% 93%, hsla(165,100%,94%,1) 0px, transparent 50%), linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0))",
        // backgroundColor: "#99ffc9",
        // backgroundImage:
        //   "radial-gradient(at 32% 33%, hsla(34,69%,93%,1) 0px, transparent 50%), radial-gradient(at 46% 97%, hsla(147,79%,93%,1) 0px, transparent 50%), radial-gradient(at 37% 80%, hsla(20,61%,93%,1) 0px, transparent 50%), radial-gradient(at 26% 59%, hsla(34,99%,93%,1) 0px, transparent 50%), radial-gradient(at 41% 81%, hsla(182,94%,93%,1) 0px, transparent 50%), radial-gradient(at 54% 54%, hsla(272,71%,93%,1) 0px, transparent 50%), radial-gradient(at 72% 34%, hsla(275,88%,93%,1) 0px, transparent 50%)",
        // backgroundColor: "#99ffe0",
        // backgroundImage:
        //   "radial-gradient(at 80% 59%, hsla(154,95%,90%,1) 0px, transparent 50%), radial-gradient(at 97% 76%, hsla(211,70%,90%,1) 0px, transparent 50%), radial-gradient(at 33% 15%, hsla(284,82%,90%,1) 0px, transparent 50%), radial-gradient(at 9% 64%, hsla(158,88%,90%,1) 0px, transparent 50%), radial-gradient(at 70% 34%, hsla(13,78%,90%,1) 0px, transparent 50%), radial-gradient(at 0% 12%, hsla(197,76%,90%,1) 0px, transparent 50%), radial-gradient(at 89% 22%, hsla(201,73%,90%,1) 0px, transparent 50%)",
        // backgroundColor: "hsla(173, 77%, 83%, 1)",
        // backgroundImage:
        //   "radial-gradient(circle at 5% 1%, hsla(250, 76%, 61%, 1) 7%, transparent 84%), radial-gradient(circle at 7% 81%, hsla(184, 91%, 91%, 1) 16%, transparent 53%), radial-gradient(circle at 11% 29%, hsla(213, 97%, 75%, 1) 8%, transparent 74%), radial-gradient(circle at 39% 52%, hsla(149, 93%, 64%, 1) 6%, transparent 68%), radial-gradient(circle at 90% 50%, hsla(118, 94%, 89%, 1) 2%, transparent 85%)",
        // backgroundBlendMode: "normal, normal, normal, normal, normal",
      }}
    >
      <h2 className="mb-2 text-center text-xl font-extrabold md:text-2xl lg:text-4xl">
        Halaman.App
      </h2>
      <h1 className="mb-6 text-center text-2xl font-bold leading-normal md:text-2xl lg:text-4xl">
        <span className="text-brand-primary-500">Jasa Pembuatan Website</span>{" "}
        Profesional <br />
        Mudah dan Tepercaya
      </h1>
      <p className="mb-1 px-4 text-center text-sm font-normal md:text-base">
        Wujudkan desain website profesional untuk bisnis impian yang mudah
        dikelola.
      </p>
      <p className="mb-1 px-4 text-center text-sm font-normal md:text-base">
        Dapatkan paket pembuatan website sesuai dengan kebutuhan bisnis Anda.
      </p>
      <div className="z-10 w-full md:w-9/12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://bikin.website/wp-content/uploads/2022/12/1-hero.png"
          alt="Alt"
          className="h-auto w-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-auto w-full">
        {/* bg-gradient-to-t from-transparent to-white/5 */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#99a3ff"
            fill-opacity="0.3"
            d="M0,256L13.3,229.3C26.7,203,53,149,80,149.3C106.7,149,133,203,160,208C186.7,213,213,171,240,154.7C266.7,139,293,149,320,154.7C346.7,160,373,160,400,154.7C426.7,149,453,139,480,117.3C506.7,96,533,64,560,48C586.7,32,613,32,640,53.3C666.7,75,693,117,720,122.7C746.7,128,773,96,800,101.3C826.7,107,853,149,880,144C906.7,139,933,85,960,74.7C986.7,64,1013,96,1040,128C1066.7,160,1093,192,1120,186.7C1146.7,181,1173,139,1200,144C1226.7,149,1253,203,1280,208C1306.7,213,1333,171,1360,144C1386.7,117,1413,107,1427,101.3L1440,96L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
          ></path>
        </svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#99a3ff"
            fill-opacity="0.3"
            d="M0,32L60,69.3C120,107,240,181,360,202.7C480,224,600,192,720,197.3C840,203,960,245,1080,224C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#99a3ff"
            fill-opacity="0.3"
            d="M0,96L9.6,80C19.2,64,38,32,58,26.7C76.8,21,96,43,115,64C134.4,85,154,107,173,133.3C192,160,211,192,230,181.3C249.6,171,269,117,288,117.3C307.2,117,326,171,346,186.7C364.8,203,384,181,403,181.3C422.4,181,442,203,461,202.7C480,203,499,181,518,149.3C537.6,117,557,75,576,85.3C595.2,96,614,160,634,170.7C652.8,181,672,139,691,133.3C710.4,128,730,160,749,176C768,192,787,192,806,197.3C825.6,203,845,213,864,208C883.2,203,902,181,922,186.7C940.8,192,960,224,979,229.3C998.4,235,1018,213,1037,186.7C1056,160,1075,128,1094,133.3C1113.6,139,1133,181,1152,181.3C1171.2,181,1190,139,1210,149.3C1228.8,160,1248,224,1267,240C1286.4,256,1306,224,1325,197.3C1344,171,1363,149,1382,165.3C1401.6,181,1421,235,1430,261.3L1440,288L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
