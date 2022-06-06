import React from "react";
import YouTube from "react-youtube";

export default class subject extends React.Component {
  render() {
    const opts = {
      height: "450",
      width: "824 ",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="absolute mt-9 bg-[#fafafc]">
        <div className="fixed w-[20%] snap-y snap-mandatory h-[91%] overflow-x-hidden z-40 ">
          <div className="ml-8 mr-2  mt-10 ">
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 1</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 2</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 3</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 4</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 5</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 6</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 7</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 8</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 9</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 10</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 11</h2>
            </div>
            <div className=" my-6">
              <h2 className="py-1 list-item ml-8">WEEK 12</h2>
            </div>
          </div>
        </div>
        <div className="fixed ml-[20%] w-[80%] snap-y snap-mandatory h-[91%] overflow-x-hidden z-40 bg-[#fafafc]">
          <div className="container p-10">
            <div className="title ">
              <h1 className="text-2xl font-bold">Made by Rohit</h1>
            </div>
            <div className="title">
              <h1 className="text-2xl font-semibold">Lecure 1</h1>
            </div>
            <div className="flex justify-center">
              <div className="">
                <YouTube
                  videoId="_ck1Lnm28hQ"
                  opts={opts}
                  onReady={this._onReady}
                />
              </div>
            </div>
            <div className="disc">
              <h3>Course Abstract</h3>
              <p>
                Compilers have become part and parcel of today’s computer
                systems. They are responsible for making the user’s computing
                requirements, specified as a piece of program, understandable to
                the underlying machine. There tools work as interface between
                the entities of two different domains – the human being and the
                machine. The actual process involved in this transformation is
                quite complex. Automata Theory provides the base of the course
                on which several automated tools can be designed to be used at
                various phases of a compiler. Advances in computer architecture,
                memory management and operating systems provide the compiler
                designer large number of options to try out for efficient code
                generation. This course on compiler design is to address all
                these issues, starting from the theoretical foundations to the
                architectural issues to automated tools. Being primarily
                targeted to a one-semester course for the undergraduate
                students, the course will follow the current GATE syllabus,
                enabling the students to prepare well for the same. It can also
                help all other participants looking for an introduction to the
                domain of compiler designs and code translators.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}
