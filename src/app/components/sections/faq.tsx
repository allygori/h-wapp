type Props = {
  className?: string;
};

const FAQ = ({ className = "" }: Props) => {
  return (
    <section className={className}>
      <h2>Pertanyaan Seputar Bikin Website</h2>
    </section>
  );
};

export default FAQ;
