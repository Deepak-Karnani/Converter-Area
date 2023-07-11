import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";

import icon from "../../images/icons/icon_22.svg";

const PageNumberAdd = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [position, setPosition] = useState("top-left");
  const [size, setSize] = useState(12); // Default size is 12
  const [color, setColor] = useState("black"); // Default color is black
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [printed, setPrinted] = useState(false);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setDownloadUrl("");
    setPrinted(false);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
    setDownloadUrl("");
    setPrinted(false);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value));
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("position", position);
      formData.append("size", size); // Send size to the backend
      formData.append("color", color); // Send color to the backend
      try {
        setLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:5000/PageNumberAdd",
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
    const downloadFileName = `modified_${fileNameWithoutExtension}.pdf`;
    link.setAttribute("download", downloadFileName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setPrinted(false);
  };

  const handlePrint = () => {
    const printWindow = window.open(downloadUrl);
    printWindow.print();
    setPrinted(true);
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
            PAGE NUMBER ADDER
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
                    Drag and drop your file here
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
            <div
              className="mb-4 flex justify-center items-center"
              style={{ alignContent: "center" }}
            >
              <label
                className="block text-l font-bold text-gray-700"
                style={{ marginRight: "1rem" }}
              >
                Position:
              </label>
              <select
                value={position}
                onChange={handlePositionChange}
                className="mt-1 p-2 border rounded"
              >
                <option value="top-left">Top Left</option>
                <option value="top-center">Top Center</option>
                <option value="top-right">Top Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="bottom-center">Bottom Center</option>
                <option value="bottom-right">Bottom Right</option>
              </select>
            </div>
            <div
              className="mb-4 flex justify-center items-center"
              style={{ alignContent: "center" }}
            >
              <label
                className="block text-l font-bold text-gray-700"
                style={{ marginRight: "1rem" }}
              >
                Size:
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={size}
                onChange={handleSizeChange}
                className="mt-1 p-2 border rounded"
              />
            </div>
            <div
              className="mb-4 flex justify-center items-center"
              style={{ alignContent: "center" }}
            >
              <label
                className="block text-l font-bold text-gray-700"
                style={{ marginRight: "1rem" }}
              >
                Color:
              </label>
              <select
                value={color}
                onChange={handleColorChange}
                className="mt-1 p-2 border rounded"
              >
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border-2 border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-150"
                disabled={!selectedFile}
              >
                {loading ? "Loading..." : "Add Page Numbers"}
              </button>
            </div>
          </form>
          {selectedFile && downloadUrl && (
            <div className="text-center mt-4">
              <button
                onClick={handlePrint}
                className={`py-2 px-4 bg-green-500 text-white rounded-lg font-medium ${
                  printed ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={printed}
              >
                Print 
              </button>
              <button
                onClick={handleDownload}
                className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg font-medium"
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

export default PageNumberAdd;
