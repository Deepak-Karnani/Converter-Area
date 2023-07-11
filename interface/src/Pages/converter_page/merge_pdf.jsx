import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import icon from "../../images/icons/icon_1.svg";

const MergePdf = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [mergedFile, setMergedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleMerge = async () => {
    const formData = new FormData();

    for (let file of selectedFiles) {
      formData.append("files", file);
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/merge",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob",
        }
      );

      const downloadUrl = URL.createObjectURL(new Blob([response.data]));
      setMergedFile(downloadUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = mergedFile;
    link.setAttribute("download", "merged.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            PDF MERGER
          </h1>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-100 text-center mb-4"
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
            {selectedFiles.length > 0 ? (
              <ul className="text-left">
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            ) : (
              <div>
                <p className="mb-2 font-bold">Select PDF files to merge</p>
                <p className="mb-2 font-bold"></p>
                <input
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="w-full cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 font-bold"
                  style={{
                    maxWidth: "750px",
                    marginTop: "1.2rem",
                    marginBottom: "2rem",
                  }}
                >
                  Select Files
                </label>
              </div>
            )}
          </div>
          <button
            onClick={handleMerge}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
            style={{ marginTop: "1rem" }}
            disabled={selectedFiles.length === 0 || loading}
          >
            {loading ? "Merging..." : "Merge PDFs"}
          </button>
          {mergedFile && (
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

export default MergePdf;
