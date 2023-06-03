import React from "react";
import LinearProgress from "../../../components/LinearProgress/LinearProgress";

const LinearProgressExample: React.FC = () => {
  return (
    <>
      <h1 className="mt-8 mb-2">Linear Progress</h1>

      <LinearProgress indeterminate />
      <LinearProgress className="my-4" />

      <LinearProgress className="!h-4" percentage={33}>
        33%
      </LinearProgress>

      <h1 className="mt-8">Colors</h1>
      <LinearProgress color="default" percentage={20} className="!h-4 my-2">
        Default
      </LinearProgress>
      <LinearProgress color="primary" percentage={30} className="!h-4 my-2">
        Primary
      </LinearProgress>
      <LinearProgress color="secondary" percentage={40} className="!h-4 my-2">
        Secondary
      </LinearProgress>
      <LinearProgress color="success" percentage={50} className="!h-4 my-2">
        Success
      </LinearProgress>
      <LinearProgress color="error" percentage={60} className="!h-4 my-2">
        Error
      </LinearProgress>
      <LinearProgress color="warning" percentage={80} className="!h-4 my-2">
        Warning
      </LinearProgress>
    </>
  );
};

export default LinearProgressExample;
