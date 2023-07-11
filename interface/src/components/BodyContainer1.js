import React from 'react'
import pimg from "../images/homepage-product-1.png";
import IsoLogo from "../images/iso-logo.svg";
import Isopdf from "../images/pdf-association-logo.svg";
import IsoEncrypted from "../images/ssl-encrypted-logo.svg";

const BodyContainer1 = () => {
    return (
      <>
        <div className="bg-white sm:w-full sm:mb-[40px]">
          <div className="w-[90%] sm:w-[1200px] m-auto sm:pt-[80px]">
            <div className="sm:flex justify-between w-full">
              <img
                src={pimg}
                alt="ProductImage"
                className="sm:w-[50%] w-[100%] h-[100%] object-cover mt-[20px]"
              />
              <div className="w-[100%] sm:[50%] p-1 sm:p-4 mt-[20px]">
                <h1 className="text-[20px] sm:text-[28px] font-semibold">
                  Looking for another solution?
                </h1>
                <div className="bg-[#f3f0ec] p-4 mt-[15px] drop-shadow-xm">
                  <h1 className=" sm:text-xl font-semibold">
                    {" "}
                    ConverterArea Desktop
                  </h1>
                  <p className="text-[#161616] text-[14px]">
                    {" "}
                    App to work with your favourite PDF tools on your Mac or
                    Windows PC. Get a lightweight PDF app that helps you process
                    heavy PDF tasks offline in seconds.
                  </p>
                </div>

                <div className="hover:bg-[#f3f0ec] p-4 mt-[15px] drop-shadow-xm">
                  <h1 className="text-[#000] sm:text-xl font-semibold">
                    ConverterArea Mobile
                  </h1>
                  <p className="text-[#161616] sm:text-[14px]">
                    {" "}
                    App to work with your favourite PDF tools on your Mac or
                    Windows PC. Get a lightweight PDF app that helps you process
                    heavy PDF tasks offline in seconds.
                  </p>
                </div>
                <div className="hover:bg-[#f3f0ec] p-4 mt-[15px] drop-shadow-xm">
                  <h1 className="text-[#000] text-xl font-semibold">
                    ConverterArea IMG
                  </h1>
                  <p className="text-[#161616] text-[14px]">
                    {" "}
                    App to work with your favourite PDF tools on your Mac or
                    Windows PC. Get a lightweight PDF app that helps you process
                    heavy PDF tasks offline in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f2f3f8] sm:w-full sm:flex items-center justify-center ">
          <div className="w-[85%] sm:w-[60%] m-auto flex flex-col items-center justify-center gap-9">
            <div>
              <h1 className="text-[#383e45] text-center text-[28px] mt-[80px] font-semibold">
                The PDF software trusted by millions of users
              </h1>
              <p className="text-[16px] mt-[20px] text-center ">
                {" "}
                ConverterAreais your number 1 web app for editing PDF with ease.
                Enjoy all the tools you need to work efficiently with your
                digital documents while keeping your data safe and secure.
              </p>
            </div>
            <div className="flex items-center w-[70%] justify-between my-[40px]">
              <img
                src={IsoLogo}
                alt="Isologo"
                className="w-[70px] h-[70px] object-contain"
              />
              <img
                src={Isopdf}
                alt="IsoPdf"
                className="w-[70px] h-[70px] object-contain"
              />
              <img
                src={IsoEncrypted}
                alt="Isoencrypted"
                className="w-[70px] h-[70px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className=" w-[100%] bg-[#383e45] text-[#f3f0ec] sm:h-[300px] sm:flex  ">
          <div className="sm:flex w-[100%] sm:w-[1200px] m-auto items-center justify-between sm:gap-[20px]">
            <div className="w-[500px]">
              <h1 className="text-[32px] font-semibold text-center my-[20px]">
                Get more with Premium
              </h1>
              <p className="sm:text-[22px] font-light text-center">
                Complete projects faster with batch file processing, convert
                scanned documents with OCR and e-sign your business agreements.
              </p>
            </div>
            <div className="i">
              <button className="ml-[120px] my-[20px] bg-[#ffb400] p-3 w-[200px] text-[#161616] text-[22px] hover:bg-[#dabb74]">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default BodyContainer1