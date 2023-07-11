import React from 'react'
import GooglePlay from "../../images/google_play.svg"

const Footer = () => {
    return (
      <>
        <div>
          <div
            className="w-[1100px] m-auto my-[60px] flex justify-between"
            style={{ marginTop: "1rem" }}
          >
            <div className="flex flex-col gap-1">
              <h1
                className="mb-[15px] text-[red] "
                style={{ marginTop: "2rem" }}
              >
                Converter Area
              </h1>
              <span className="text-[#161616]">Home</span>
              <span>Features</span>
              <span>Pricing</span>
              <span>Tools</span>
              <span>FAQ</span>
            </div>
            <div className="flex flex-col gap-1">
              <h1
                className="mb-[15px] text-[red]"
                style={{ marginTop: "2rem" }}
              >
                PRODUCT
              </h1>
              <span className="text-[#161616]">Converter Area Desktop</span>
              <span> Converter Area Mobile</span>
              <span>Developers</span>
              <span> Wordpress Plugin</span>
              <span>ConverterAreaimage.com</span>
            </div>
            <div className="flex flex-col gap-1">
              <h1
                className="mb-[15px] text-[red]"
                style={{ marginTop: "2rem" }}
              >
                SOLUTIONS
              </h1>
              <span className="text-[#161616]">Business</span>
              <span>Education</span>
            </div>
            <div className="flex flex-col gap-1">
              <h1
                className="mb-[15px] text-[red]"
                style={{ marginTop: "2rem" }}
              >
                COMPANY
              </h1>
              <span className="text-[#161616]">Our Story</span>
              <span>Blog</span>
              <span>Press</span>
              <span>Leagel & Privacy</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="my-[50px]">
          <div className="w-[1100px] m-auto ">
            <div className="flex items-end justify-end gap-3 mb-[15px]">
              <img src={GooglePlay} alt="" />
              <img src={GooglePlay} alt="" />
            </div>
            <hr className="border-2" />
          </div>
        </div>
      </>
    );
}

export default Footer