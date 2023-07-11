import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";

import lock from "../../images/icons/icon_17.svg";

const UnlockPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [unlockedPdfPath, setUnlockedPdfPath] = useState("");
  const [error, setError] = useState("");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setUnlockedPdfPath("");
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
    setUnlockedPdfPath("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    if (selectedFile && password) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("password", password);

      try {
        setLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:5000/unlock_pdf",
          formData,
          {
            responseType: "blob",
          }
        );
        const unlockedPdfUrl = window.URL.createObjectURL(
          new Blob([response.data])
        );
        setUnlockedPdfPath(unlockedPdfUrl);
        setLoading(false);
        setError("");
      } catch (error) {
        console.log("An error occurred:", error);
        setLoading(false);
        setError("Incorrect password. Please try again.");
      }
    }
  };

  const handleDownload = () => {
    if (unlockedPdfPath) {
      const link = document.createElement("a");
      link.href = unlockedPdfPath;
      link.download = "unlocked.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <Header />
      <div
        className="bg-gradient-to-r from-blue-100 to-blue-200"
        style={{ marginBottom: "0rem", height: "44rem" }}
      ></div>
      <div className="container mx-auto px-4">
        <div
          className="mx-auto p-4 bg-white rounded-lg shadow-md my-8"
          style={{
            marginTop: "-38rem",
            maxWidth: "90rem",
            maxHeight: "100rem",
          }}
        >
          <h1
            className="text-4xl font-bold text-center py-8"
            style={{ color: "black", fontFamily: "cursive" }}
          >
            PDF UNLOCKER
          </h1>
          <form onSubmit={handleFileUpload}>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-100 text-center mb-4"
              onDrop={handleFileDrop}
              onDragOver={(event) => event.preventDefault()}
              style={{ maxHeight: "50rem" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={lock}
                  alt="logo"
                  style={{
                    marginTop: "2rem",
                    width: "170px",
                    height: "100px",
                    marginBottom: "2.2rem",
                  }}
                />
              </div>
              {selectedFile ? (
                <p>{selectedFile.name}</p>
              ) : (
                <div>
                  <p className="mb-2 font-bold">
                    Drag and drop your locked PDF file to unlock it.
                  </p>
                  <p className="mb-2 font-bold"></p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className=" w-full cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 font-bold"
                    style={{
                      maxWidth: "750px",
                      marginTop: "1.2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    Select File
                  </label>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="border-2 border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
              style={{ marginTop: "1rem" }}
              disabled={!selectedFile || !password}
            >
              {loading ? "Unlocking..." : "Unlock PDF"}
            </button>
          </form>
          {error && (
            <div className="flex justify-center mt-4">
              <p className="text-red-500">{error}</p>
            </div>
          )}
          {unlockedPdfPath && (
            <div className="text-center mt-4">
              <button
                onClick={handleDownload}
                className="py-2 px-4 bg-green-500 text-white rounded-lg font-medium"
              >
                Download 
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UnlockPdf;
