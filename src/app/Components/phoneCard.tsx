import React from "react";

interface ImeiResultProps {
  model: string;
  manufacturerName: string;
  active: string;
  deviceImeiNumber: number;
}

const PhoneRes: React.FC<ImeiResultProps> = ({
  model,
  manufacturerName,
  active,
  deviceImeiNumber,
}) => {
  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100">
        {model} <span className="text-gray-600 dark:text-gray-400">by {manufacturerName}</span>
      </h2>
      <p className="font-medium dark:text-gray-200 mt-4">
        Status:{" "}
        <span className={`${active === "ACTIVE" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
          {active}
        </span>
      </p>
      <p className="font-medium dark:text-gray-200 mt-4">
        Number of IMEIs: <span className="text-blue-600 dark:text-blue-400">{deviceImeiNumber}</span>
      </p>
    </div>
  );
};

export default PhoneRes;