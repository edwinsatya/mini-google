import FormHome from "../molecules/FormHome";
import Hero from "../molecules/Hero";

const FormWithHero = () => {
  return (
    <section className="flex flex-col items-center gap-7">
      <Hero />
      <FormHome />
    </section>
  );
};

export default FormWithHero;
