import React, { useState, useEffect } from "react";
import "./index.css";
import events from "./json/events.json";

const randomEventGenerator = () => {
  let num = randomNumberGenerator(events.length);
  console.log("Random event generator", num);
  return events[num].title;
};

const randomNumberGenerator = (max) => {
  return Math.floor(Math.random() * max);
};

const Index = () => {
  const [randomEvent, setRandomEvent] = useState(randomEventGenerator());

  const [food, setFood] = useState(randomNumberGenerator(10));
  const [population, setPopulation] = useState(randomNumberGenerator(10));
  const [militiary, setMilitiary] = useState(randomNumberGenerator(10));
  const [money, setMoney] = useState(randomNumberGenerator(10));

  const [days, setDays] = useState(1);

  useEffect(() => {
    setRandomEvent(randomEventGenerator());
  }, [days]);

  const daysCalculation = () => {
    setDays((prev) => prev + 1);
  };

  return (
    <div className="body center">
      <div className="result-set">
        <div className="result-items">
          <div className="title">food</div>
          <div className="result">{food}</div>
        </div>
        <div className="result-items">
          <div className="title">population</div>
          <div className="result">{population}</div>
        </div>
        <div className="result-items">
          <div className="title">militiary</div>
          <div className="result">{militiary}</div>
        </div>
        <div className="result-items">
          <div className="title">money</div>
          <div className="result">{money}</div>
        </div>
        <div className="result-items">
          <div className="title">days</div>
          <div className="result">{days}</div>
        </div>
      </div>
      <div className="box-wrapper text-black">{randomEvent}</div>
      <div className="button-set">
        <div className="button" onClick={() => daysCalculation()}>
          Yes
        </div>
        <div className="button" onClick={() => daysCalculation()}>
          No
        </div>
      </div>
    </div>
  );
};

export default Index;
