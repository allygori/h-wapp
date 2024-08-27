type Props = {
  className?: string;
};

const Steps = ({ className = "" }: Props) => {
  return (
    <section className={className}>
      <h2>Langkah & Proses Membuat Website</h2>
      <p>
        Kami akan membantu memastikan bahwa kebutuhan dan keinginan Anda sesuai
        dengan hasil akhir.
      </p>
    </section>
  );
};

export default Steps;
