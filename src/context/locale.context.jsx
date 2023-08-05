"use client";
import { getTranslator } from "@/i18n";
import { useParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

const LocaleContext = createContext({});

export const useLocaleContext = () => useContext(LocaleContext);

function useDelayedRender(asyncFun, deps) {
  const [output, setOutput] = useState();
  useEffect(() => {
    (async function () {
      try {
        setOutput(await asyncFun());
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return output === undefined ? null : output;
}

export const LocaleContextProvider = ({ children }) => {
  const params = useParams();

  return useDelayedRender(async () => {
    const translate = await getTranslator(
      `${params.lang || 'ru'}` // our middleware ensures this is valid
    );
    const value = {
      translate,
    };
    return (
      <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    );
  });
};
