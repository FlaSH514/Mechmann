import React from "react";

const BgVideo = () => {
  return (
    <>
      <div className="relative h-[90vh]  flex items-center justify-center">
        <video
          src={"/herovideo.mp4"}
          className="w-full overflow-hidden absolute z-4"
          autoPlay
          muted
          loop
        />
        <h1
          className="text-white font-bold text-8xl z-10 sticky top-52 lg:text-6xl md:text-"
          style={{ textShadow: "4px 4px 30px rgba(0, 0, 0, 0.9)" }}
        >
          VALUE PROP STATEMENT
        </h1>
      </div>
    </>
  );
};

export default BgVideo;
