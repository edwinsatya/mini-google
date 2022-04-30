import { UseGlobalContext } from "../../store/context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormHome from "../molecules/FormHome";
import Hero from "../molecules/Hero";

const FormWithHero = () => {
  const navigate = useNavigate();
  const { state, dispatch } = UseGlobalContext();
  const [input, setInput] = useState("");
  const { type } = state;

  const handleChangeInput = (e) => {
    setInput(() => e);
  };

  const handleClearInput = (e) => {
    // dispatch({ type: "CHANGE_KEYWORD", payload: "" });
    setInput(() => "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch({ type: "CHANGE_KEYWORD", payload: input });
      const query = input
        .split(" ")
        .filter((e) => e)
        .join("+");
      navigate(`/${type}?q=${query}`);
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
