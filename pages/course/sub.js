import React, { useState } from "react";
import YouTube from "react-youtube";
import Link from "next/link";

export default class ComputerNetwork extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     val: "",
  //     vlink: "_ck1Lnm28hQ",
  //   };
  // }

  render() {
    // const weeeks = [
    //   {
    //     id: "1",
    //     title: "Lecture 1",
    //     vidLInk: "_ck1Lnm28hQ",
    //     disc: "Compilers have become part and parcel of today’s computer systems. They are responsible for making the user’s computing requirements, specified as a piece of program understandable to the underlying machine. There tools work as interface between the entities of two different domains – the human being and the machine. The actual process involved in this transformation is quite complex. Automata Theory provides the base of the course on which several automated tools can be designed to be used at various phases of a compiler. Advances in computer architecture, memory management and operating systems provide the compiler designer large number of options to try out for efficient code generation. This course on compiler design is to address all these issues, starting from the theoretical foundations to the architectural issues to automated tools. Being primarily targeted to a one-semester course for the undergraduate students, the course will follow the current GATE syllabus, enabling the students to prepare well for the same. It can also help all other participants looking for an introduction to the domain of compiler designs and code translators.",
    //   },
    // ];
    // const opts = {
    //   height: "450",
    //   width: "824 ",
    //   playerVars: {
    //     autoplay: 1,
    //   },
    // };

    const link = {
      "WEEK 1": {
        1: "https://www.youtube.com/watch?v=t0Q2otsqC4I",
        2: "https://www.youtube.com/watch?v=EGlLMGUCUos",
        3: "https://www.youtube.com/watch?v=2TPOngQuLPQ",
        4: "https://www.youtube.com/watch?v=2TPOngQuLPQ",
      },
      "WEEK 2": {
        1: "https://www.youtube.com/watch?v=t0Q2otsqC4I",
        2: "https://www.youtube.com/watch?v=EGlLMGUCUos",
        3: "https://www.youtube.com/watch?v=2TPOngQuLPQ",
        4: "https://www.youtube.com/watch?v=2TPOngQuLPQ",
      },
      "WEEK 3": {
        1: "https://www.youtube.com/watch?v=t0Q2otsqC4I",
        2: "https://www.youtube.com/watch?v=EGlLMGUCUos",
        3: "https://www.youtube.com/watch?v=2TPOngQuLPQ",
        4: "https://www.youtube.com/watch?v=2TPOngQuLPQ",
      },
    };

    // const toggle = (e) => {
    //   if (e.target.innerText === this.state.val) {
    //     this.setState({
    //       val: "",
    //     });
    //     return;
    //   }
    //   this.setState({
    //     val: e.target.innerText,
    //   });
    // };

    const change = (e) => {
      const event = e.target;
      const videoNo = event.innerText.split(" ")[1];
      const week = event.parentElement.parentElement.children[0].innerText;
      console.log(week);

      console.log(videoNo);
      const videoLink = link[week][videoNo].split("=")[1];
      console.log(videoLink);
      this.setState({
        vlink: videoLink,
      });
    };
    return (
      <div className="absolute mt-9 bg-[#fafafc]">
        <div className="fixed w-[20%] snap-y snap-mandatory h-[91%] overflow-x-hidden z-40 ">
          <div className="ml-8 mr-2  mt-10 ">
            <div className=" my-6 cursor-pointer">
              <Link href="../course/computer-network">
                <h2 className="py-1 ml-2 font-bold">Course Details</h2>
              </Link>
            </div>
            <div className=" my-6 ">
              <h2
                onClick={toggle}
                className="py-1 list-item ml-8 cursor-pointer"
              >
                WEEK 1
              </h2>
              {this.state.val == "WEEK 1" ? (
                <ul className="ml-12 cursor-pointer">
                  <Link href="/">
                    <li onClick={change}>Lecutre 1</li>
                  </Link>
                  <li onClick={change}>Lecutre 2</li>
                  <li onClick={change}>Lecutre 3</li>
                  <li onClick={change}>Lecutre 4</li>
                  <li>Lecutre 5</li>
                  <li>Lecutre 6</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className=" my-6">
              <h2 onClick={toggle} className="py-1 list-item ml-8">
                WEEK 2
              </h2>
              {this.state.val == "WEEK 2" ? (
                <ul className="ml-12 cursor-pointer">
                  <Link href="/">
                    <li>Lecutre 1 </li>
                  </Link>
                  <li onClick={change}>Lecutre 2</li>
                  <li onClick={change}>Lecutre 3</li>
                  <li onClick={change}>Lecutre 4</li>
                  <li onClick={change}>Lecutre 5</li>
                  <li onClick={change}>Lecutre 6</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className=" my-6">
              <h2 onClick={toggle} className="py-1 list-item ml-8">
                WEEK 3
              </h2>
              {this.state.val == "WEEK 3" ? (
                <ul className="ml-12 cursor-pointer">
                  <Link href="/">
                    <li>Lecutre 1 </li>
                  </Link>
                  <li onClick={change}>Lecutre 2</li>
                  <li onClick={change}>Lecutre 3</li>
                  <li onClick={change}>Lecutre 4</li>
                  <li onClick={change}>Lecutre 5</li>
                  <li onClick={change}>Lecutre 6</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className=" my-6">
              <h2 onClick={toggle} className="py-1 list-item ml-8">
                WEEK 4
              </h2>
              {this.state.val == "WEEK 4" ? (
                <ul className="ml-12 cursor-pointer">
                  <Link href="/">
                    <li>Lecutre 1 </li>
                  </Link>
                  <li>Lecutre 2</li>
                  <li>Lecutre 3</li>
                  <li>Lecutre 4</li>
                  <li>Lecutre 5</li>
                  <li>Lecutre 6</li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="fixed ml-[20%] w-[80%] snap-y snap-mandatory h-[91%] overflow-x-hidden z-40 bg-[#fafafc]">
          {weeeks.map((d, idx) => {
            return (
              <div key={idx} className="container p-10">
                <div className="title ">
                  <h1 className="text-2xl font-bold">{idx.title}</h1>
                </div>
                <div className="title">
                  <h1 className="text-2xl font-semibold">{idx.title}</h1>
                </div>
                <div className="flex justify-center">
                  <div className="">
                    <YouTube
                      videoId={this.state.vlink}
                      opts={opts}
                      // onReady={this._onReady}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}
