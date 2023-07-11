import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [stampOption, setStampOption] = useState("");
  const [stampText, setStampText] = useState("");
  const [typography, setTypography] = useState("Helvetica");
  const [transparency, setTransparency] = useState(0.5);
  const [positionX, setPositionX] = useState(100);
  const [positionY, setPositionY] = useState(100);
  const [resultPdf, setResultPdf] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleOptionChange = (event) => {
    setStampOption(event.target.value);
  };

  const handleTextChange = (event) => {
    setStampText(event.target.value);
  };

  const handleTypographyChange = (event) => {
    setTypography(event.target.value);
  };

  const handleTransparencyChange = (event) => {
    setTransparency(event.target.value);
  };

  const handlePositionXChange = (event) => {
    setPositionX(event.target.value);
  };

  const handlePositionYChange = (event) => {
    setPositionY(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("option", stampOption);
    formData.append("text", stampText);
    formData.append("typography", typography);
    formData.append("transparency", transparency);
    formData.append("positionX", positionX);
    formData.append("positionY", positionY);

    try {
      const response = await axios.post("http://127.0.0.1:5000/add_watermark", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      });

      const downloadUrl = URL.createObjectURL(new Blob([response.data]));
      setResultPdf(downloadUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDownload = () => {
    if (resultPdf) {
      const link = document.createElement("a");
      link.href = resultPdf;
      link.download = "stamped_pdf.pdf";
      link.click();
    }
  };

  return (
    <div>
      <h1>Stamp/Watermark PDF</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Select PDF file:</label>
          <input
            type="file"
            id="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label>
            Stamp Option:
            <select value={stampOption} onChange={handleOptionChange}>
              <option value="">-- Select an option --</option>
              <option value="image">Image</option>
              <option value="text">Text</option>
            </select>
          </label>
        </div>
        {stampOption === "text" && (
          <div>
            <label htmlFor="stampText">Stamp Text:</label>
            <input
              type="text"
              id="stampText"
              value={stampText}
              onChange={handleTextChange}
            />
          </div>
        )}
        <div>
          <label htmlFor="typography">Typography:</label>
          <input
            type="text"
            id="typography"
            value={typography}
            onChange={handleTypographyChange}
          />
        </div>
        <div>
          <label htmlFor="transparency">Transparency:</label>
          <input
            type="number"
            id="transparency"
            value={transparency}
            step="0.1"
            onChange={handleTransparencyChange}
          />
        </div>
        <div>
          <label htmlFor="positionX">Position X:</label>
          <input
            type="number"
            id="positionX"
            value={positionX}
            onChange={handlePositionXChange}
          />
        </div>
        <div>
          <label htmlFor="positionY">Position Y:</label>
          <input
            type="number"
            id="positionY"
            value={positionY}
            onChange={handlePositionYChange}
          />
        </div>
        <button type="submit">Stamp PDF</button>
      </form>
      {resultPdf && (
        <div>
          <h3>Resulting PDF:</h3>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default App;
