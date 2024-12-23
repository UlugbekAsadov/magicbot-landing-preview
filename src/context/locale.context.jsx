"use client";
import { getTranslator } from "@/i18n";
import { useParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";

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
      `${params.lang}`, // our middleware ensures this is valid
    );
    const value = {
      translate,
      currentLang: params.lang,
    };
    return (
      <LocaleContext.Provider value={value}>
        <NextNProgress
          color="#1591F4"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        {children}
      </LocaleContext.Provider>
    );
  });
};
