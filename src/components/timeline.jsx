import React from "react";
import { direction } from "@hemant0621/animation";

const Timeline = () => {
  const timeline = [
    {
      date: "20th November 2024",
      title: "Item 1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos neque ab nesciunt doloremque iusto nihil tenetur nobis ipsum",
    },
    {
      date: "20th November 2024",
      title: "Item 2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos neque ab nesciunt doloremque iusto nihil tenetur nobis ipsum",
    },
    {
      date: "20th November 2024",
      title: "Item 3",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos neque ab nesciunt doloremque iusto nihil tenetur nobis ipsum",
    },
    {
      date: "20th November 2024",
      title: "Item 4",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos neque ab nesciunt doloremque iusto nihil tenetur nobis ipsum",
    },
    {
      date: "20th November 2024",
      title: "Item 5",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos neque ab nesciunt doloremque iusto nihil tenetur nobis ipsum",
    },
  ];

  return (
    <>
      <div className="mt-16 font-Clash relative">
        <div class="absolute top-1/2 right-0 -z-10 transform opacity-50 -rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="none"
            viewBox="0 0 200 200"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
          >
            <g clip-path="url(#clip0_105_560)">
              <path
                fill="#b21335"
                fill-rule="evenodd"
                d="M200 100.671 100 0 0 100.671h98.667L0 200h200l-98.667-99.329H200Z"
                clip-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-row text-[2.813rem]  font-[800] ml-[2.5rem]">
          <div
            ref={direction("top")}
            className="text-[#f0f8ff] font-extrabold text-4xl mx-5 mt-4 lg:text-6xl my-5 lg:mx-10 pt-8"
          >
            Registration<span className="text-[#b21335] mx-2"> Timeline</span>
          </div>
        </div>
        <div className="bg-[#161B22] mx-auto w-[80%] py-[4rem] my-[4rem] rounded-[1.75rem] ">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 pb-0 text-[#A71335] ">
            {/* Timeline Section 1 */}
            <div className="hidden flex-row-reverse md:contents">
              <div
                className=" col-start-1 col-end-5 p-4 text-right rounded-xl my-4 ml-auto "
                ref={direction("left")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[0].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[0].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[0].desc}
                </div>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="w-6 h-6 absolute  rounded-full bg-[#A71335] shadow"></div>
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden ">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-0 -mt-3 rounded-full bg-[#A71335] shadow"></div>
              </div>
              <div
                className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto "
                ref={direction("right")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[0].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[0].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[0].desc}
                </div>
              </div>
            </div>
            {/* Timeline Section 2 */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
              </div>
              <div
                className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto "
                ref={direction("right")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[1].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[1].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[1].desc}
                </div>
              </div>
            </div>

            {/* Timeline Section 3 */}
            <div className=" flex-row-reverse md:contents hidden">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto text-right"
                ref={direction("left")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[2].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[2].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[2].desc}
                </div>
              </div>
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
              </div>
            </div>
            <div className="flex md:hidden ">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
              </div>
              <div
                className="col-start-6 col-end-10 p-4 rounded-xl  my-4 mr-auto "
                ref={direction("right")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[2].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[2].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[2].desc}
                </div>
              </div>
            </div>
            {/* Timeline Section 4 */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
              </div>
              <div
                className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto "
                ref={direction("right")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[3].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[3].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[3].desc}
                </div>
              </div>
            </div>
            {/* Timeline Section 5 */}
            <div className="flex-row-reverse md:contents hidden">
              <div
                className=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto text-right"
                ref={direction("left")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[4].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[4].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[4].desc}
                </div>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="w-6 h-6 absolute  rounded-full bg-[#A71335] shadow bottom-0"></div>
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden ">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute bottom-0 -mt-3 rounded-full bg-[#A71335] shadow"></div>
              </div>
              <div
                className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto "
                ref={direction("right")}
              >
                <div className="text-[1.125rem] text-gray-500 font-[800]">
                  {timeline[4].date}
                </div>
                <div className="text-[2.5rem] text-[#A71335] font-[800]">
                  {timeline[4].title}
                </div>
                <div className="text-[1.25rem] text-white font-[400] font-SourceCodePro">
                  {timeline[4].desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
