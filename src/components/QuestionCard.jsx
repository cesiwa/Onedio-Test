import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { empathyQuestions } from "../data";

function QuestionCard() {
  const navigate = useNavigate();
  const params = useParams();
  const currentQuestion = params.id;

  const routeChange = () => {
    const path = `result`;

    navigate(path, { state: currentPoints });
  };
  //global state kullan zustand veya redux öğren ama zustand bu proje için daha iyi
  // src altına store adında bir klasör oluştur ve içine index.js adında bir dosya oluştur
  // src/store/index.js
  // import create from "zustand";
  //
  // export const useStore = create((set) => ({
  //   currentPoints: 0,
  //   setCurrentPoints: (points) => set({ currentPoints: points }),
  // }));

  // eğer geriye bir html tarzında bir değer (return) döndürüyosan jsx olması lazıms

  const [currentPoints, setCurrentPoints] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <div className=" w-96	 text-center lg:mx-0 py-16 lg:text-left ">
      <h1 className="text-white w-96 mb-8">
        {empathyQuestions[currentQuestion].soru}
      </h1>
      <form>
        <div key={currentQuestion}>
          {empathyQuestions[currentQuestion].secenekler.map((secenek, i) => {
            return (
              <label
                key={secenek.id}
                onClick={(e) => {
                  setSelectedValue(secenek.puan);
                }}
                class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer "
              >
                <input
                  type="radio"
                  name={`radio/${currentQuestion}`}
                  value={secenek.puan}
                  class="mr-2"
                />
                <i class="pl-2  text-sm">{secenek.secenek}</i>
              </label>
            );
          })}
        </div>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-primary rounded-lg"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPoints(currentPoints + selectedValue);
              if (parseInt(currentQuestion) === empathyQuestions.length - 1) {
                routeChange();
              }
              navigate(`/question/${parseInt(currentQuestion) + 1}`);
            }}
          >
            {parseInt(currentQuestion) === empathyQuestions.length - 1
              ? "Testi Bitir"
              : "Sonraki Soru"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuestionCard;
