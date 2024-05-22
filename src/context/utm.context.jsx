'use client';

import {createContext, useContext, useState, useMemo, useEffect} from "react";
import {useLocaleContext} from "@/context/locale.context";

// Create the context
const UtmContext = createContext({});

// Export the useContext hook
export const useUtmContext = () => useContext(UtmContext);

// Define the Provider component
export const UtmContextProvider = ({ children }) => {
  const { currentLang } = useLocaleContext();
  // Setup states for each of the UTM params
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  const [ref, setRef] = useState("");
  const [link, setLink] = useState('')

  // Define the effect to extract UTM params from the query string
  useEffect(() => {
    // Get the URL params
    let params = new URLSearchParams(window.location.search);

    // Set the state for each UTM param
    setUtmSource(params.get('utm_source') || "organic");
    setUtmMedium(params.get('utm_medium') || "organic");
    setUtmCampaign(params.get('utm_campaign') || "organic");
    setUtmContent(params.get('utm_content') || "organic");
    setUtmTerm(params.get('utm_term') || "organic");
    setRef(params.get('ref') || "landing");
  }, []);

  useEffect(() => {
    setLink(`https://magicstore.uz/${currentLang}/register?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&ref=${ref}`)
  }, [utmSource, utmMedium, utmCampaign, utmContent, utmTerm, ref]);

  const value = useMemo(() => {
    return {
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      ref,
      link,
      setUtmSource,
      setUtmMedium,
      setUtmContent,
      setRef
    };
  }, [utmSource, utmMedium, utmCampaign, utmContent, utmTerm, ref, link, setUtmSource, setUtmMedium, setUtmContent, setRef]);

  // Return the provider component
  return (
    <UtmContext.Provider value={value}>{children}</UtmContext.Provider>
  );
};