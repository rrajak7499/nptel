import React, { useState } from "react";
import YouTube from "react-youtube";
import Link from "next/link";

export default function ComputerNetwork() {
  const [val, setVal] = useState("");

  const opts = {
    height: "450",
    width: "824 ",
  };

  function toggle(e) {
    if (e.target.innerText === val) {
      setVal("");
      return;
    }
    setVal(e.target.innerText);
  }

  const lectures = [
    {
      id: "1",
      head: "WEEK 1",
      title1: "Lecture 1 : Introduction",
      title2: "Lecture 2 : Introduction (Contd.)",
      title3: "Lecture 3 : Introduction (Contd.)",
      title4: "Lecture 4 : Introduction (Contd.)",
      title5: "Lecture 5 : Introduction (Contd.)",
    },
    {
      id: "2",
      head: "WEEK 2",
      title1: "Lecture 6 : Introduction (Contd.)",
      title2: "Lecture 7 : Lexical Analysis",
      title3: "Lecture 8 : Lexical Analysis (Contd.)",
      title4: "Lecture 9 : Lexical Analysis (Contd.)",
      title5: "Lecture 10 : Lexical Analysis (Contd.)",
    },
    {
      id: "3",
      head: "WEEK 3",
      title1: "Lecture 11 : Lexical Analysis (Contd.)",
      title2: "Lecture 12 : Lexical Analysis (Contd.)",
      title3: "Lecture 13 : Lexical Analysis (Contd.)",
      title4: "Lecture 14 : Lexical Analysis (Contd.)",
      title5: "Lecture 15 : Lexical Analysis (Contd.)",
    },
    {
      id: "4",
      head: "WEEK 4",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "5",
      head: "WEEK 5",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "6",
      head: "WEEK 6",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "7",
      head: "WEEK 7",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "8",
      head: "WEEK 8",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "9",
      head: "WEEK 9",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "10",
      head: "WEEK 10",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "11",
      head: "WEEK 11",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
    {
      id: "12",
      head: "WEEK 12",
      title1: "Lecutre 1",
      title2: "Lecutre 2",
      title3: "Lecutre 3",
      title4: "Lecutre 4",
      title5: "Lecutre 5",
    },
  ];

  const link = {
    "WEEK 1": {
      1: {
        url: "https://www.youtube.com/watch?v=7Nb-NTGbe-Q",
        title: "Lecture 01 : Introduction",
      },
      2: {
        url: "https://www.youtube.com/watch?v=aa2ZdZXnGeY",
        title: "Lecture 02: Introduction (Contd.)",
      },
      3: {
        url: "https://www.youtube.com/watch?v=L7B7b9phxV8",
        title: "Lecture : 03 Introduction (Contd.)",
      },
      4: {
        url: "https://www.youtube.com/watch?v=IstUr884mnA",
        title: "Lecture : 04 Introduction (Contd.)",
      },
      5: {
        url: "https://www.youtube.com/watch?v=vcVHjoSYU_M",
        title: "Lecture : 05 Introduction (Contd.)",
      },
    },
    "WEEK 2": {
      6: {
        url: "https://www.youtube.com/watch?v=kJlOkN1iBHQ",
        title: "Lecture 06: Introduction (Contd.)",
      },
      7: {
        url: "https://www.youtube.com/watch?v=xBQEqI91cJM",
        title: "Lecture 07: Lexical Analysis",
      },
      8: {
        url: "https://www.youtube.com/watch?v=5Vv3HHSeJUA",
        title: "Lecture 08: Lexical Analysis (Contd.)",
      },
      9: {
        url: "https://www.youtube.com/watch?v=EBTK19pGYiQ",
        title: "Lecture 09: Lexical Analysis (Contd.)",
      },
      10: {
        url: "https://www.youtube.com/watch?v=zpuouhg1NWM",
        title: "Lecture 10: Lexical Analysis (Contd.)",
      },
    },
    "WEEK 3": {
      11: {
        url: "https://www.youtube.com/watch?v=HVkeeVNs1Ws",
        title: "Lecture 11 : Lexical Analysis (Contd.)",
      },
      12: {
        url: "https://www.youtube.com/watch?v=MjTdYxEF0Ug",
        title: "Lecture 12 : Lexical Analysis (Contd.)",
      },
      13: {
        url: "https://www.youtube.com/watch?v=NoLQWQZGmWs",
        title: "Lecture 13 : Lexical Analysis (Contd.)",
      },
      14: {
        url: "https://www.youtube.com/watch?v=IWBCw2CYswg",
        title: "Lecture 14 : Lexical Analysis (Contd.)",
      },
      15: {
        url: "https://www.youtube.com/watch?v=A7BvcTuk1V0",
        title: "Lecture 15 : Lexical Analysis (Contd.)",
      },
    },
    "WEEK 4": {
      11: {
        url: "https://www.youtube.com/watch?v=kJlOkN1iBHQ",
        title: "",
      },
      12: {
        url: "https://www.youtube.com/watch?v=xBQEqI91cJM",
        title: "",
      },
      13: {
        url: "https://www.youtube.com/watch?v=xBQEqI91cJM",
        title: "",
      },
      14: {
        url: "https://www.youtube.com/watch?v=5Vv3HHSeJUA",
        title: "",
      },
      15: {
        url: "https://www.youtube.com/watch?v=EBTK19pGYiQ",
        title: "",
      },
    },
  };

  const [vlink, setVlink] = useState("_ck1Lnm28hQ");
  const [tit, setTit] = useState("About Course");
  const [courseAbstract, setcourseAbstract] = useState("Course Abstract");
  const [disc, setdisc] = useState(
    "Compilers have become part and parcel of today’s computer systems. They are responsible for making the user’s computing requirements, specified as a piece of program, understandable to the underlying machine. There tools work as interface between the entities of two different domains – the human being and the machine. The actual process involved in this transformation is quite complex. Automata Theory provides the base of the course on which several automated tools can be designed to be used at various phases of a compiler. Advances in computer architecture, memory management and operating systems provide the compiler designer large number of options to try out for efficient code generation. This course on compiler design is to address all these issues, starting from the theoretical foundations to the architectural issues to automated tools. Being primarily targeted to a one-semester course for the undergraduate students, the course will follow the current GATE syllabus, enabling the students to prepare well for the same. It can also help all other participants looking for an introduction to the domain of compiler designs and code translators."
  );

  const change = (e) => {
    const event = e.target;
    const videoNo = event.innerText.split(" ")[1];
    const week = event.parentElement.parentElement.children[0].innerText;
    console.log(week);

    console.log(videoNo);
    const videoLink = link[week][videoNo].url.split("=")[1];
    const linkTitle = link[week][videoNo].title;
    const Abstract = link[week][videoNo].abstract;
    const discription = link[week][videoNo].disc;
    console.log(videoLink);
    setVlink(videoLink);
    setTit(linkTitle);
    setcourseAbstract(Abstract);
    setdisc(discription);
  };

  return (
    <div className="absolute mt-9 bg-[#fafafc]">
      <div className="fixed w-[20%] snap-y snap-mandatory h-[91%] overflow-x-hidden z-40 ">
        <div className="ml-8 mr-2  mt-10 ">
          <div className=" my-6 cursor-pointer">
            <Link href="../course/computer-network">
              <h2
                href="../course/computer-network"
                className="py-1 ml-2 font-bold"
              >
                Course Details
              </h2>
            </Link>
          </div>
          {lectures.map(function (d, idx) {
            return (
              <div key={d} className=" my-6 ">
                <h2
                  onClick={toggle}
                  className="py-1 list-item ml-8 p-2 cursor-pointer hover:bg-[#6698ff33] rounded-lg"
                >
                  {d.head}
                </h2>
                {val == d.head ? (
                  <ul className="ml-12 cursor-pointer ">
                    <li
                      className="hover:bg-[#39d98a33] px-2 py-1 rounded-lg"
                      onClick={change}
                    >
                      {d.title1}
                    </li>
                    <li
                      className="hover:bg-[#39d98a33] px-2 py-1 rounded-lg"
                      onClick={change}
                    >
                      {d.title2}
                    </li>
                    <li
                      className="hover:bg-[#39d98a33] px-2 py-1 rounded-lg"
                      onClick={change}
                    >
                      {d.title3}
                    </li>
                    <li
                      className="hover:bg-[#39d98a33] px-2 py-1 rounded-lg"
                      onClick={change}
                    >
                      {d.title4}
                    </li>
                    <li
                      className="hover:bg-[#39d98a33] px-2 py-1 rounded-lg"
                      onClick={change}
                    >
                      {d.title5}
                    </li>
                    <li
                      className="hover:bg-[#39d98a33] px-2 py-1 rounded-lg"
                      onClick={change}
                    >
                      {d.title6}
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="fixed ml-[20%] w-[80%] snap-y snap-mandatory h-[91%] overflow-x-hidden z-40 bg-[#fafafc]">
        <div className="container p-10">
          <div className="title">
            <h1 className="text-2xl font-semibold">{tit}</h1>
          </div>
          <div className="flex justify-center">
            <div className="">
              <YouTube videoId={vlink} opts={opts} />
            </div>
          </div>
          <div>
            <h2>{courseAbstract}</h2>
            <p>{disc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
