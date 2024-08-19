export interface Template {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    liveDemoUrl: string;
    // category: string;
    degree?: string[];
    experienceOptions ?: string[];
    technicalSkills?: string[];
    softSkills?: string[];
    social?: string[];
  }

  export const templates: Template[] = [
    {
      title: "Rohith",
      description: "",
      imageUrl: "/assets/next js template .png",
      price: "₹ 499",
      liveDemoUrl: "https://google.com",
      degree: [ "BCOM", ],
      experienceOptions : [ "part-time", "experience" ],
      technicalSkills: [ "JavaScript", "React", "Node.js", "CSS" ],
      softSkills: [ "Communication", "Teamwork", "Problem Solving", "Adaptability" ],
    },
  ];