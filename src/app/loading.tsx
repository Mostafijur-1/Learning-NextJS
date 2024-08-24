import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-y-emerald-300"></div>
      <h1 className="ml-4">Loading.....</h1>
    </div>
  );
};

export default Loading;
