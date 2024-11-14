import { Animation, direction } from "@hemant0621/animation";
import React from "react";

function SponserUs() {
  return (
    <>
      <img
        src="/images/shape.svg"
        alt="Ploygon"
        className="fixed start-0 bottom-16 z-0 opacity-50"
      />
      <div className="min-h-full w-full flex lg:flex-row flex-col ">
        <div className="lg:w-1/2 w-full  relative">
          <div className="max-h-screen m-16 lg:py-32 flex flex-col  sticky top-0 start-0">
            <p
              className="font-medium font-Clash  text-4xl lg:text-6xl text-white  mx-auto lg:mx-0"
              ref={Animation("left", "30px", 200)}
            >
              {" "}
              Want to <span className="text-[#dc143ccb] ">Sponsor</span> us ?
            </p>
            <p
              className="my-4 mb-8 font-SourceCodePro font-light text-sm text-[#f0f8ff] mt-5 lg:text-2xl  lg:mt-8"
              ref={Animation("left", "40px", 400)}
            >
              Greetings! We appreciate your interest in sponsoring
              <span className="text-[#dc143ccb] "> Hack-FYI</span> , the
              nation-wide hackathon based in VIT Chennai, India. Please take a
              moment to complete a brief form and share some insights about
              yourself and your company.
            </p>
            <div
              className="flex flex-row mt-3"
              ref={Animation("left", "30px", 600)}
            >
              <img src="/images/call.svg" alt="Phone Call Icon" />
              <p className="flex-grow font-SourceCodePro font-light text-sm text-[#f0f8ff] my-auto ml-5 lg:text-xl">
                +91 1234567890
              </p>
            </div>
            <div
              className="flex flex-row mt-5"
              ref={Animation("left", "30px", 700)}
            >
              <img src="/images/mail.svg" alt="Phone Call Icon" />
              <p className="flex-grow font-SourceCodePro font-light text-sm text-[#f0f8ff] my-auto ml-5 lg:text-xl">
                example@mail.com
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-[#161b22] lg:w-1/2 w-[90%] mx-auto min-h-10 lg:m-32 m-3 py-5 pl-2 rounded-[15px]"
          ref={direction("top")}
        >
          <p
            className="text-[#f0f8ff] font-extrabold font-Clash text-3xl mx-5 mt-2 lg:text-5xl lg:mx-8 lg:mt-8 mb-5 underline underline-offset-[18px]"
            ref={Animation("left", "30px", 200)}
          >
            Sponsor <span className="text-[#b21335] ">us</span>
          </p>
          <form className="flex flex-col p-5 gap-2">
            <div className="flex flex-col" ref={direction("top")}>
              <label
                htmlFor="email"
                className="font-SourceCodePro font-normal text-lg text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className="mx-9 lg:mx-16 mb-5 lg:mb-8 font-SourceCodePro font-normal text-sm lg:text-lg bg-transparent  outline outline-1 outline-white shadow-[5px_5px_0px_1px_#b21335] hover:shadow-[10px_15px_0px_1px_#b21335] focus:shadow-[10px_8px_0px_1px_#b21335] transition-all duration-100 ease-linear p-2 text-white mt-6"
              />
            </div>
            <div className="flex flex-col" ref={direction("top")}>
              <label
                htmlFor="email"
                className="font-SourceCodePro font-normal text-lg text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8"
              >
                Company/Organization
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company/Organization name"
                className="mx-9 lg:mx-16 mb-5 lg:mb-8 font-SourceCodePro font-normal text-sm lg:text-lg bg-transparent  outline outline-1 outline-white  shadow-[5px_5px_0px_1px_#b21335] hover:shadow-[10px_15px_0px_1px_#b21335] focus:shadow-[10px_8px_0px_1px_#b21335] transition-all duration-100 ease-linear p-2 text-white mt-6"
              />
            </div>
            <div className="flex flex-col" ref={direction("top")}>
              <label
                htmlFor="email"
                className="font-SourceCodePro font-normal text-lg text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8"
              >
                Company/Organization Website
              </label>
              <input
                type="text"
                name="website"
                placeholder="Company/Organization website"
                className="mx-9 lg:mx-16 mb-5 lg:mb-8 font-SourceCodePro font-normal text-sm lg:text-lg bg-transparent  outline outline-1 outline-white  shadow-[5px_5px_0px_1px_#b21335] hover:shadow-[10px_15px_0px_1px_#b21335] focus:shadow-[10px_8px_0px_1px_#b21335] transition-all duration-100 ease-linear p-2 text-white mt-6"
              />
            </div>
            <div className="flex flex-col" ref={direction("top")}>
              <label
                htmlFor="contribute"
                className="font-SourceCodePro font-normal text-lg text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8"
              >
                How would you like to contribute?
              </label>
              <div className="mx-9 lg:mx-16 mb-5 lg:mb-8 font-SourceCodePro font-normal text-sm lg:text-lg  p-2 text-white mt-6 ">
                <input
                  type="radio"
                  name="contribute"
                  id="sponsorship"
                  className="shadow-[1px_1px_0px_1px_#b21335] hover:shadow-[4px_2px_0px_1px_#b21335] focus:shadow-[4px_2px_0px_1px_#b21335] duration-100 ease-linear mx-3"
                />
                <label htmlFor="sponsorship" className="mr-5">
                  Sponsorship
                </label>
                <input
                  type="radio"
                  name="contribute"
                  id="partnership"
                  className="shadow-[1px_1px_0px_1px_#b21335] hover:shadow-[4px_2px_0px_1px_#b21335] focus:shadow-[4px_2px_0px_1px_#b21335] duration-100 ease-linear mx-3"
                />
                <label htmlFor="partnership">Commmunity Partnership</label>
              </div>
            </div>

            <a
              href="#"
              className="py-3 px-4 my-7  text-xl font-semibold font-Clash rounded-md bg-[#f0f8ff] text-black hover:bg-[#dc143ccb] hover:text-[#f0f8ff] self-center"
            >
              Sponsor
            </a>
          </form>
        </div>
        <div className="bg-hero"></div>
      </div>
    </>
  );
}

export default SponserUs;
