import { UseGlobalContext } from "../../store/context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getQueryPath } from "../../helpers/getQueryPath";
import FormHome from "../molecules/FormHome";
import Hero from "../molecules/Hero";

const FormWithHero = () => {
  const navigate = useNavigate();
  const { state, dispatch } = UseGlobalContext();
  const { type } = state;
  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    setInput(() => e);
  };

  const handleClearInput = (e) => {
    setInput(() => "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch({ type: "CHANGE_KEYWORD", payload: input });
      navigate(getQueryPath(type, input));
    }
  };

  return (
    <section className="flex flex-col items-center gap-7">
      <Hero />
      <FormHome
        keyword={input}
        onChange={handleChangeInput}
        onSubmit={handleSubmit}
        clearInput={handleClearInput}
      />
    </section>
  );
};

export default FormWithHero;
