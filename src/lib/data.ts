import { randomUUID } from "crypto";
import { AboutData, FooterSection } from "./types";

const aboutData: AboutData[] = [
    {
      id: randomUUID(),
      subtitle: "Hair loss",
      title: "Hair loss needn't be irreversible. We can help!",
      content:
        "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      imgUrl: '/photo-1.png'
    },
    {
      id: randomUUID(),
      subtitle: "Erecetile dysfunction",
      title: "Erections can be a tricky thing. But no need to feel down!",
      content:
        "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      imgUrl: '/photo-2.png',
    },
  ];


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

  export const fetchAboutData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));

    return aboutData;
  }


  export const fetchFooterData = async () => {
    return submenusConfig;
  }