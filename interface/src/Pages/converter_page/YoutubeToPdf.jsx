import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";

import icon from "../../images/icons/icon_20.svg";

const YoutubeToSlides = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(10);
  const [outputFormat, setOutputFormat] = useState("pdf");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleOutputFormatChange = (event) => {
    setOutputFormat(event.target.value);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    if (videoUrl) {
      const formData = new FormData();
      formData.append("video_url", videoUrl);
      formData.append("start_time", startTime);
      formData.append("end_time", endTime);
      formData.append("output_format", outputFormat);

      try {
        setLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:5000/convert_youtube_to_slides",
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
    const downloadFileName =
      outputFormat === "pdf" ? "slides.pdf" : "slides.zip";
    link.setAttribute("download", downloadFileName);

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
            YOUTUBE TO SLIDES CONVERTER
          </h1>
          <form onSubmit={handleFileUpload}>
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
              <div>
                <p className="mb-2 font-bold">Enter YouTube video URL:</p>
                <input
                  type="text"
                  value={videoUrl}
                  onChange={handleVideoUrlChange}
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 font-bold">Start Time (in seconds):</p>
                <input
                  type="number"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 font-bold">End Time (in seconds):</p>
                <input
                  type="number"
                  value={endTime}
                  onChange={handleEndTimeChange}
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="mt-4">
                <p className="mb-2 font-bold">Output Format:</p>
                <select
                  value={outputFormat}
                  onChange={handleOutputFormatChange}
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                >
                  <option value="pdf">PDF</option>
                  <option value="zip">ZIP</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
              style={{ marginTop: "1rem" }}
              disabled={!videoUrl}
            >
              {loading ? "Loading..." : "Convert to Slides"}
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
    </>
  );
};

export default YoutubeToSlides;
