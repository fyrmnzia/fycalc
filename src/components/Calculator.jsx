import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleKeyboardInput = (event) => {
      const key = event.key;

      if (
        (key >= "0" && key <= "9") ||
        ["+", "-", "*", "/", ".", "(", ")"].includes(key)
      ) {
        setInput((prev) => prev + key);
      } else if (key === "Enter") {
        try {
          setOutput(evaluate(input));
        } catch {
          setOutput("Error");
        }
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        setInput("");
        setOutput("");
      }
    };

    window.addEventListener("keydown", handleKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [input]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setOutput(evaluate(input));
      } catch {
        setOutput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
    } else if (value === "More") {
      setShowMore(!showMore);
    } else if (value === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-[#222222] p-4 rounded-lg shadow-lg">
      <div className="text-right text-white text-xl mb-2">{input || "0"}</div>
      <div className="text-right text-gray-300 text-xl mb-4">{output}</div>
      <div className="grid grid-cols-4 gap-2 text-lg">
        <button
          className="bg-[#fe0000] text-white font-bold p-4 rounded col-span-3 transition-transform transform hover:scale-105 hover:bg-[#de0000]"
          onClick={() => handleClick("C")}
        >
          C
        </button>
        <button
          className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
          onClick={() => handleClick("Backspace")}
        >
          ←
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
          onClick={() => handleClick("*")}
        >
          *
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded col-span-2 transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
          onClick={() => handleClick("+")}
        >
          +
        </button>
        <button
          className="bg-[#00fe00] text-white font-bold p-4 rounded col-span-4 transition-transform transform hover:scale-105 hover:bg-[#00de00]"
          onClick={() => handleClick("=")}
        >
          =
        </button>
        <button
          className="bg-gray-500 text-white p-4 rounded col-span-4 transition-transform transform hover:scale-105 hover:bg-gray-600"
          onClick={() => handleClick("More")}
        >
          {showMore ? "Less" : "More"}
        </button>
      </div>
      {showMore && (
        <div className="relative bg-[#222222] bg-opacity-75 flex flex-col items-center justify-center mt-2">
          <div className="grid grid-cols-4 gap-2 bg-gray-800 md:bg-transparent p-0">
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("sqrt(")}
            >
              √
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("pow(")}
            >
              x^y
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("factorial(")}
            >
              n!
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("exp(")}
            >
              e^x
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("sin(")}
            >
              sin
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("cos(")}
            >
              cos
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("tan(")}
            >
              tan
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("log(")}
            >
              log
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded col-span-2 transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick("(")}
            >
              (
            </button>
            <button
              className="bg-gray-600 text-white p-4 rounded col-span-2 transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => handleClick(")")}
            >
              )
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
