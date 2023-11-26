import React from "react";
import { waveform } from "ldrs";
waveform.register();

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {/* Your loader animation */}
        <l-waveform size="50" stroke="3.5" speed="1" color="#FB2465"></l-waveform>
      </div>
    </div>
  );
};

export default Loader;
