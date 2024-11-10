import React from "react";
import HeaderGenerator from "./headerGenerator/HeaderGenerator";
import FormGenerator from "./formGenerator/FormGenerator";

const GeneratorPage = async () => {
  return (
    <div>
      <HeaderGenerator />
      <FormGenerator />
    </div>
  );
};

export default GeneratorPage;
