"use client";

import { useState } from "react";
import PhoneRes from "../Components/phoneCard";

const ImeiChecker = () => {
  const [imei, setImei] = useState<string>("");
  const [result, setResult] = useState<{
    model: string;
    active: string;
    manufacturerName: string;
    deviceImeiNumber: number;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckImei = async () => {
    if (!imei) {
      setError("Please enter an IMEI number.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api-citizens-prod-imei.gs-ef.com/ceirimeicheck/api/v1/imei/check",
        {
          method: "POST",
          headers: {
            Host: "api-citizens-prod-imei.gs-ef.com",
            "Content-Type": "application/json",
            Accept: "*/*",
            Connection: "keep-alive",
            "Accept-Language": "en",
            "Accept-Encoding": "gzip, deflate, br",
            "User-Agent":
              "CitizenApp_Ntra/1.0.0 CFNetwork/1568.300.101 Darwin/24.2.0",
          },
          body: JSON.stringify({ imeiNumber: [imei] }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch IMEI data.");
      }

      const data = await response.json();
      if (data.status.code === 200) {
        setResult(data.result);
      } else {
        throw new Error(data.status.errorMsg || "Unknown error occurred.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gap-8">
      <div className="w-1/2 ">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6">
          Phone Registration Checker
        </h1>
        <div className="mb-6">
          <input
            type="text"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            placeholder="Enter your 15-digit IMEI number"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleCheckImei}
            disabled={loading}
            className="w-full mt-3 p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-orange-300 font-medium"
          >
            {loading ? "Checking..." : "Check IMEI"}
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="w-full lg:w-1/2">
        <PhoneRes
          model={result?.model ?? "N/A"}
          manufacturerName={result?.manufacturerName ?? "N/A"}
          active={result?.active ?? "N/A"}
          deviceImeiNumber={result?.deviceImeiNumber ?? 0}
        />
      </div>
    </div>
  );
};

export default ImeiChecker;
