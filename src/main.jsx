import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
    <h1 className="text-4xl font-bold mb-4 text-blue-600">🎥 VideoAdSelect</h1>
    <p className="text-lg text-gray-700 max-w-xl mb-6">
      Welcome to your smart video ad dashboard. Preview, approve, and optimize campaigns before they go live.
    </p>
    <a
      href="/campaigns"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
    >
      Go to Campaign Dashboard
    </a>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
