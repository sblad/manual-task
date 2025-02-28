"use server";

import { randomUUID } from "crypto";
import { AboutData, FooterSection, QuizResponse } from "./types";

export const fetchAboutData = async () => {
  const aboutData: AboutData[] = [
    {
      id: randomUUID(),
      subtitle: "Hair loss",
      title: "Hair loss needn't be irreversible. We can help!",
      content:
        "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      imgUrl: "/photo-1.png",
    },
    {
      id: randomUUID(),
      subtitle: "Erecetile dysfunction",
      title: "Erections can be a tricky thing. But no need to feel down!",
      content:
        "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      imgUrl: "/photo-2.png",
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 2500));

  return aboutData;
};

export const fetchFooterData = async () => {
  const submenusConfig: FooterSection[] = [
    {
      section: "Product",
      items: [
        {
          name: "Popular",
          link: "/#",
        },
        {
          name: "Trending",
          link: "/#",
        },
        {
          name: "Guided",
          link: "/#",
        },
        {
          name: "Products",
          link: "/#",
        },
      ],
    },
    {
      section: "Company",
      items: [
        {
          name: "Press",
          link: "/#",
        },
        {
          name: "Mission",
          link: "/#",
        },
        {
          name: "Strategy",
          link: "/#",
        },
        {
          name: "About",
          link: "/#",
        },
      ],
    },
    {
      section: "Info",
      items: [
        {
          name: "Support",
          link: "/#",
        },
        {
          name: "Customer Service",
          link: "/#",
        },
        {
          name: "Get started",
          link: "/#",
        },
      ],
    },
  ];

  return submenusConfig;
};

export const fetchQuizData = async () => {
  const quizData: QuizResponse = {
    questions: [
      {
        question: "Which image best matches your hair loss?",
        type: "ChoiceType",
        options: [
          {
            display:
              '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />',
            value: "Temples",
            isRejection: false,
          },
          {
            display:
              '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x"/>',
            value: "Temples & Crown",
            isRejection: false,
          },
          {
            display:
              '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>',
            value: "Patchy",
            isRejection: true,
          },
          {
            display:
              '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x" />',
            value: "Moderate",
            isRejection: false,
          },
          {
            display:
              '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x"/>',
            value: "Extensive",
            isRejection: true,
          },
          {
            display:
              '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x" />',
            value: "Complete",
            isRejection: true,
          },
        ],
      },
      {
        question:
          "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
        type: "ChoiceType",
        options: [
          {
            display: "Yes",
            value: true,
            isRejection: true,
          },
          {
            display: "No",
            value: false,
            isRejection: false,
          },
        ],
      },
      {
        question:
          "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
        type: "ChoiceType",
        options: [
          {
            display: "Yes",
            value: true,
            isRejection: true,
          },
          {
            display: "No",
            value: false,
            isRejection: false,
          },
        ],
      },
    ],
  };

  return quizData;
};
