/**
 * Global, language-independent site settings.
 * Change contact data, links and availability here.
 */
export const site = {
  name: "Tim D. Walter",
  degree: "M.Eng.",
  /** Name as shown on the page (hero, footer, legal notice). */
  displayName: "M.Eng. Tim D. Walter",
  fullName: "Tim Daniel Walter",
  brand: "TimTech Solutions",
  email: "tim.d.walter@web.de",
  /** Years of professional experience (hero card, about page). */
  yearsExperience: 9,
  /** Shows the green "available" badge in the hero. */
  available: true,
  /** Absolute production URL, used for canonical/OG tags. Set NEXT_PUBLIC_SITE_URL on Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  socials: {
    linkedin: "https://www.linkedin.com/in/tim-d-walter/",
    xing: "https://www.xing.com/profile/Tim_Walter96/cv",
    github: "https://github.com/timdwalter",
    medium: "https://medium.com/@timwalter23",
  },
  /** GitHub profile is still under construction – set to true to show the link. */
  showGithub: false,
  stack: ["Java", "Spring Boot", "Kubernetes", "AWS", "Azure", "Ollama", "Claude Code", "Celonis", "MQTT"],
};

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
