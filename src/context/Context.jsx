import { createContext, useState } from "react";
import run from "../config/ai";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async () => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      setPreviousPrompt((prev) => [...previousPrompt, recentPrompt]);

      
      const response = await run(input);
      let resArr = response.split("**");
      let newResponse;
      for (let i = 0; i < resArr.length; i++) {
        if (i == 0 || i % 2 !== 1) {
          newResponse += resArr[i];
        } else {
          newResponse += "<b>" + resArr[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.split("*").join("<br/>");

      let finalResponse = newResponse2.split(" ");
      for (let i = 0; i < finalResponse.length; i++) {
        const nextWord = finalResponse[i];
        delayPara(i, nextWord + " ");
      }

      setLoading(false);
      setInput("");
    } catch (error) {
      console.log("ERROR in onSent: ", error);
    }
  };

  const contextValue = {
    onSent,
    previousPrompt,
    setPreviousPrompt,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
