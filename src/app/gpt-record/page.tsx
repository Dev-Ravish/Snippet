"use client";

import React from "react";
import { useRecordVoice } from "../hooks/useRecordVoice";
import { IconMicrophone } from "./IconMicrophone";

const Microphone = () => {
  const { startRecording, stopRecording, text } = useRecordVoice();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div
        className="border border-black dark:border-white bg-transparent w-40 rounded-full p-3"
      >
        <IconMicrophone />
      </div>
      <div className="my-5 mx-4 ">
        <button
          onClick={startRecording}
          className="border border-black-500 rounded-md px-3 bg-slate-300 dark:bg-black py-2 m-3"
        >
          Start
        </button>
        <button
          className="border border-black-500 rounded-md px-3 bg-slate-300 dark:bg-black py-2 m-3"
          onClick={stopRecording}
        >
          Stop
        </button>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Microphone;