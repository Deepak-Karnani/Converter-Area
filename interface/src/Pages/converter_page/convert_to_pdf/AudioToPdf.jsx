import React, { useState } from "react";
import axios from "axios";
import Header from "../../../components/header/Header";
import Tool from "../../../components/tools/Tools";
import Footer from "../../../components/footer/Footer";

const AudioToPDF = () => {
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

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/audio_to_pdf",
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

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    const image = new Image();
    image.onload = () => {
      printWindow.document.open();
      printWindow.document.write(
        '<html><head><title>Print</title></head><body><img src="' +
          image.src +
          '"></body></html>'
      );
      printWindow.document.close();
      printWindow.print();
    };
    image.src = downloadUrl;
  };

  return (
    <>
      <Header />
      <div
        className="bg-gradient-to-r from-blue-100 to-blue-200 "
        style={{
          marginBottom: "6rem",
          height: "25rem",
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-bold text-center py-8"
            style={{ textDecoration: "underLine" }}
          >
            Audio to PDF Converter
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
                      Drag and drop your audio file here
                    </p>
                    <p className="mb-2 font-bold">Or</p>
                    <input
                      accept=".wav, .mp3"
                      type="file"
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
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
                disabled={!selectedFile}
              >
                {loading ? "Loading..." : "Convert to PDF"}
              </button>
            </form>
            {downloadUrl && (
              <div className="text-center mt-4">
                <button
                  onClick={handleDownload}
                  className="py-2 px-4 bg-green-500 text-white rounded-lg font-medium"
                >
                  Download PDF
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
      </div>
      <Tool />
      <Footer />
    </>
  );
};

export default AudioToPDF;
