import React, { useState } from "react";
import axios from "axios";
import Header from "../../../components/header/Header";
import Tool from "../../../components/tools/Tools";
import Footer from "../../../components/footer/Footer";

const ImagesToPdf = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileSelect = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files));
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setSelectedFiles(Array.from(event.dataTransfer.files));
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:5000/Image_to_pdf",
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
    link.setAttribute("download", "result.pdf");
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
          height: "25rem",
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-bold text-center py-8"
            style={{ textDecoration: "underLine" }}
          >
            IMAGES TO PDF CONVERTER
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
                {selectedFiles.length > 0 ? (
                  <ul>
                    {selectedFiles.map((file) => (
                      <li key={file.name}>{file.name}</li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <p className="mb-2 font-bold">
                      Drag and drop your files here
                    </p>
                    <p className="mb-2 font-bold">Or</p>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      multiple
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 font-bold"
                    >
                      Choose Files
                    </label>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
                disabled={selectedFiles.length === 0}
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
                  Download File
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

export default ImagesToPdf;
