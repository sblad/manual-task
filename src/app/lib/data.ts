import { randomUUID } from "crypto";

const aboutData = [
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

  export const fetchAboutData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return aboutData;
  }