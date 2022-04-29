import { UseGlobalContext } from "../../store/context";
import { useNavigate } from "react-router-dom";
import FormHome from "../molecules/FormHome";
import Hero from "../molecules/Hero";

const FormWithHero = () => {
  const navigate = useNavigate();
  const { state, dispatch } = UseGlobalContext();
  const { keyword, type } = state;

  const handleChangeInput = (e) => {
    dispatch({ type: "CHANGE_KEYWORD", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${type}?q=${keyword}`);
  };

  return (
    <section className="flex flex-col items-center gap-7">
      <Hero />
      <FormHome
        keyword={keyword}
        onChange={handleChangeInput}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default FormWithHero;
