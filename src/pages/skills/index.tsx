import { NextPage } from "next";
import { motion } from "framer-motion";

const SkillsPage: NextPage = () => {
  const skills = {
    "IoT & Embedded Systems": {
      description: "Building connected devices and real-time systems",
      items: ["Arduino IDE", "MicroPython", "MATLAB / Simulink", "LabVIEW", "OPC UA", "MQTT", "M2M Protocols"],
    },
    "Backend & Cloud": {
      description: "Server-side architecture and cloud infrastructure",
      items: ["Java", "Spring Boot", "Quarkus", "Node.js", "REST APIs", "Microservices", "Monolithic Systems"],
    },
    "Cloud Platforms": {
      description: "Deployment and infrastructure management",
      items: ["Azure", "OpenShift", "Kubernetes", "Docker", "Helm Charts", "Cloud Systems", "Infrastructure as Code"],
    },
    "Databases": {
      description: "Data storage and management",
      items: ["PostgreSQL", "MySQL", "MariaDB", "AzureSQL", "Hibernate ORM", "Flyway Migrations", "Schema-based Multi-Tenancy"],
    },
    "DevOps & CI/CD": {
      description: "Automation and continuous deployment",
      items: ["Jenkins", "Tekton", "ArgoCD", "OpenShift Pipelines", "Azure DevOps", "GitLab CI", "Maven", "Gradle"],
    },
    "Frontend": {
      description: "User interface and web development",
      items: ["JavaScript / TypeScript", "HTML5", "CSS", "Angular", "Next.js", "React", "AJAX", "JSON"],
    },
    "Security & Authentication": {
      description: "Access control and security frameworks",
      items: ["Spring Security", "Apache Shiro", "Keycloak", "OAuth2 / OIDC", "JWT"],
    },
    "Languages & Programming": {
      description: "Programming languages for various platforms",
      items: ["Java", "Python", "C++", "C", "JavaScript", "TypeScript", "MicroPython"],
    },
    "Databases & Tools": {
      description: "Database management and utility tools",
      items: ["MySQL Workbench", "Sequel Pro", "StarUML", "Git", "GitLab", "Gitbucket"],
    },
    "Operating Systems": {
      description: "Development and deployment environments",
      items: ["macOS", "Windows 7/8/10", "Ubuntu", "Raspbian Stretch"],
    },
    "Development Tools": {
      description: "IDEs and development environments",
      items: ["IntelliJ IDEA (Ultimate & Community)", "Android Studio", "Eclipse", "Visual Studio CE", "Xcode", "ATOM"],
    },
    "Methodologies & Frameworks": {
      description: "Development practices and design patterns",
      items: ["Scrum", "Kanban", "Microservices Architecture", "Client-Server", "P2P Architecture", "Cloud-Native Design"],
    },
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 30,
      }}
      style={{ overflow: "hidden", maxWidth: "100%" }}
    >
      <main className="w-full">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
                Skills & Technologies
              </h1>
              <p className="text-xl text-secondary-700 mb-8">
                A comprehensive overview of my expertise across IoT, backend development, cloud infrastructure, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-20 bg-secondary-50">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, data]) => (
                  <div
                    key={category}
                    className="bg-white rounded-lg border border-primary-200 p-8 hover:shadow-lg transition-shadow"
                  >
                    <h2 className="text-2xl font-bold text-primary-600 mb-2">
                      {category}
                    </h2>
                    <p className="text-sm text-secondary-600 mb-6">
                      {data.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {data.items.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block px-3 py-1 bg-primary-50 border border-primary-200 text-secondary-700 text-sm rounded-full hover:bg-primary-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-50 border-t-2 border-primary-200">
          <div className="wrapper-container">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Looking for a Specific Skill?
              </h2>
              <p className="text-xl text-secondary-700 mb-12">
                If you have questions about my expertise or want to discuss a specific technology, reach out directly.
              </p>
              <a
                href="mailto:tim.d.walter@web.de"
                className="inline-block px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default SkillsPage;
