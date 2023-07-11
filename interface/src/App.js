import React from "react";
import Home from "./Pages/home_page/Main";
import Tools from "./Pages/Tools_page/tools"
import ContactUs from "./Pages/contactUs_page/ContactUs";
import AboutUs from "./Pages/aboutUs_page/aboutUs"


import HandwrittenToText from "./Pages/converter_page/Handwritten_to_Text_word"
import Merger from "./Pages/converter_page/merge_pdf"
import PageNumberAdd from "./Pages/converter_page/Page_number_pdf"
import ProtectPdf from "./Pages/converter_page/protect_pdf"
import SplitPDF from "./Pages/converter_page/split_pdf";
import UnlockPdf from "./Pages/converter_page/Unlock_pdf"
import WatermarkPdf from "./Pages/converter_page/Watermark_pdf"
import YoutubeToPdf from "./Pages/converter_page/YoutubeToPdf";

import PdfToExcel from"./Pages/converter_page/convert_from_pdf/PdfToExcel";
import PdfToImage from "./Pages/converter_page/convert_from_pdf/PdfToJpg"
import PDFTOPPT from "./Pages/converter_page/convert_from_pdf/PdfToPowerpoint";
import PdfToWord from "./Pages/converter_page/convert_from_pdf/PdfToWord"



import ExcelToPdf from "./Pages/converter_page/convert_to_pdf/ExcelToPdf";
import HtmlToPdf from "./Pages/converter_page/convert_to_pdf/HtmlToPdf"
import ImagesToPdf from "./Pages/converter_page/convert_to_pdf/JpgToPdf";
import PPtToPdf from "./Pages/converter_page/convert_to_pdf/PowerpointToPdf";
import TextToHandwritten from "./Pages/converter_page/convert_to_pdf/TextToHandwritten_pdf";
import WordToPdf from "./Pages/converter_page/convert_to_pdf/WordToPdf"
import AudioToPDF from "./Pages/converter_page/convert_to_pdf/AudioToPdf";

import { BrowserRouter as Router,Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/tool_page" element={<Tools />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        <Route path="/handwritten_to_pdf" element={<HandwrittenToText />} />
        <Route path="/merger_Pdf" element={<Merger />} />
        <Route path="/page_number_add" element={<PageNumberAdd />} />
        <Route path="/protect_pdf" element={<ProtectPdf />} />
        <Route path="/split_pdf" element={<SplitPDF />} />
        <Route path="/unlock_pdf" element={<UnlockPdf />} />
        <Route path="/watermark_pdf" element={<WatermarkPdf />} />
        <Route path="/youtube_to_pdf" element={<YoutubeToPdf />} />

        <Route path="/PdfToExcel" element={<PdfToExcel />} />
        <Route path="/PdfToImage" element={<PdfToImage />} />
        <Route path="/PdfToPpt" element={<PDFTOPPT />} />
        <Route path="/PdfToWord" element={<PdfToWord />} />

        <Route path="/ExcelToPdf" element={<ExcelToPdf />} />
        <Route path="/html_to_pdf" element={<HtmlToPdf />} />
        <Route path="/image_to_pdf" element={<ImagesToPdf />} />
        <Route path="/ppt_to_pdf" element={<PPtToPdf />} />
        <Route path="/text_to_handwritten" element={<TextToHandwritten />} />
        <Route path="/audio_to_pdf" element={<AudioToPDF />} />
        <Route path="/word_to_pdf" element={<WordToPdf />} />
      </Routes>
    </Router>
  );
}

export default App;
