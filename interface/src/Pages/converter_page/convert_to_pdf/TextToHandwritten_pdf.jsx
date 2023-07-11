import React, { useState } from "react";
import axios from "axios";
import Header from "../../../components/header/Header";
import Tool from "../../../components/tools/Tools";
import Footer from "../../../components/footer/Footer";
import img1 from "../../../images/img1.png";
import img2 from "../../../images/img 2.png";
import img3 from "../../../images/img 3.png";
import img4 from "../../../images/img 4.png";

const TextToHandwritten = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [value, setValue] = useState("");
  const [fontStyle, setFontStyle] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleFontStyleChange = (event) => {
    setFontStyle(event.target.value);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("value", value);
    formData.append("font_style", fontStyle);
    formData.append("file", selectedFile);
    
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:5000/text_to_handwritten",
        formData,
        {
          responseType: "blob",
        }
      );
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(downloadUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
    const downloadFileName = `${fileNameWithoutExtension}.pdf`;
    link.setAttribute("download", downloadFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div
        className="bg-gradient-to-r from-blue-100 to-blue-200 "
        style={{
          marginBottom: "6rem",
          height: "45rem",
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-bold text-center py-8"
            style={{ textDecoration: "underLine" }}
          >
            Text to Handwritten
          </h1>
          <div
            className="max-w-lgl mx-auto p-4 bg-white rounded-lg shadow-md my-8"
            style={{ marginTop: "0rem" }}
          >
            <form onSubmit={handleFileUpload}>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-100 text-center mb-4"
                onDrop={handleFileDrop}
                onDragOver={(event) => event.preventDefault()}
              >
                {selectedFile ? (
                  <p>{selectedFile.name}</p>
                ) : (
                  <div>
                    <p className="mb-2 font-bold">
                      Drag and drop your file here
                    </p>
                    <p className="mb-2 font-bold">Or</p>
                    <input
                      type="file"
                      accept=".txt, .docx"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 font-bold"
                    >
                      Choose File
                    </label>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center space-x-4 mb-4">
                <p className="font-bold">Scale Percentage:</p>
                <input
                  type="range"
                  min="40"
                  max="100"
                  step="1"
                  value={value}
                  onChange={handleValueChange}
                  className="w-64"
                />
                <span className="font-bold">{value}%</span>
              </div>
              <div className="flex justify-center items-center flex-wrap mb-4">
                <p className="font-bold">Select Font:</p>
                <label className="flex items-center cursor-pointer m-4">
                  <input
                    type="radio"
                    name="fontImage"
                    value="Rajat"
                    onChange={handleFontStyleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-40 h-40 border border-gray-300 ${
                      fontStyle === "Rajat" ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <img
                      src={img1}
                      alt="Font 1"
                      className="w-full h-full object-contain rounded-md cursor-pointer"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer m-4">
                  <input
                    type="radio"
                    name="fontImage"
                    value="Piyush"
                    onChange={handleFontStyleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-40 h-40 border border-gray-300 ${
                      fontStyle === "Piyush" ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <img
                      src={img2}
                      alt="Font 2"
                      className="w-full h-full object-contain rounded-md cursor-pointer"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer m-4">
                  <input
                    type="radio"
                    name="fontImage"
                    value="Swagat"
                    onChange={handleFontStyleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-40 h-40 border border-gray-300 ${
                      fontStyle === "Swagat" ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <img
                      src={img3}
                      alt="Font 3"
                      className="w-full h-full object-contain rounded-md cursor-pointer"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer m-4">
                  <input
                    type="radio"
                    name="fontImage"
                    value="UV"
                    onChange={handleFontStyleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-40 h-40 border border-gray-300 ${
                      fontStyle === "UV" ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <img
                      src={img4}
                      alt="Font 4"
                      className="w-full h-full object-contain rounded-md cursor-pointer"
                    />
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
                disabled={!selectedFile || !value}
              >
                {loading ? "Loading..." : "Generate Handwriting"}
              </button>
            </form>
            {downloadUrl && (
              <div className="text-center mt-4">
                <button
                  onClick={handleDownload}
                  className="py-2 px-4 bg-green-500 text-white rounded-lg font-medium"
                >
                  Download Result
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Tool />
      <Footer /> */}
    </>
  );
};

export default TextToHandwritten;
