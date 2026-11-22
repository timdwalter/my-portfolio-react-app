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
  /** Absolute production URL (no trailing slash), used for canonical and link-preview tags. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timtechsolutions.de",
  socials: {
    linkedin: "https://www.linkedin.com/in/tim-d-walter/",
    xing: "https://www.xing.com/profile/Tim_Walter96/cv",
    github: "https://github.com/timdwalter",
    medium: "https://medium.com/@timwalter23",
  },
  /** Show the GitHub link (profile holds only a small public selection of projects). */
  showGithub: true,
  stack: ["Java", "Spring Boot", "Kubernetes", "AWS", "Azure", "Ollama", "Claude Code", "Celonis", "MQTT"],
};

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
