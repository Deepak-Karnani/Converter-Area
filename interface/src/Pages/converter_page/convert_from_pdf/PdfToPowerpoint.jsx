import React, { useState } from "react";
import axios from "axios";
import Header from "../../../components/header/Header";
// import Tool from "../../../components/tools/Tools";

import icon from "../../../images/icons/icon_5.svg";

const PdfToPowepoint = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        setLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:5000/pdf_to_ppt",
          formData,
          {
            responseType: "blob",
          }
        );
        const downloadUrl = window.URL.createObjectURL(
          new Blob([response.data])
        );
        setDownloadUrl(downloadUrl);
        setLoading(false);
      } catch (error) {
        console.log("An error occurred:", error);
        setLoading(false);
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    const originalFileName = selectedFile.name;
    const fileNameWithoutExtension = originalFileName.substring(
      0,
      originalFileName.lastIndexOf(".")
    );
    const downloadFileName = `${fileNameWithoutExtension}.pptx`;
    link.setAttribute("download", downloadFileName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handlePrint = () => {
    const printWindow = window.open(downloadUrl, "_blank");
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <>
      <Header />
      <div
        className="bg-gradient-to-r from-blue-100 to-blue-200"
        style={{
          marginBottom: "0rem",
          height: "44rem",
          background:
            "linear-gradient(90deg, #882e27, #6d869a 50%, #231641) #44287d",
        }}
      ></div>
      <div className=" container  mx-auto px-4">
        <div
          className=" mx-auto p-4 bg-white rounded-lg shadow-md my-8"
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
            PDF TO POWERPOINT CONVERTER
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
                  src={icon}
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
                    Drag and drop your PDF file to converter
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
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
              style={{ marginTop: "1rem" }}
              disabled={!selectedFile}
            >
              {loading ? "Loading..." : "Convert to Word"}
            </button>
          </form>
          {selectedFile && downloadUrl && (
            <div className="text-center mt-4">
              <button
                onClick={handleDownload}
                className="py-2 px-4 bg-green-500 text-white rounded-lg font-medium"
              >
                Download File
              </button>
              <button
                onClick={handlePrint}
                className="ml-4 py-2 px-4 bg-yellow-500 text-white rounded-lg font-medium"
              >
                Print
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PdfToPowepoint;
