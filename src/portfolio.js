import aboutpic from "./components/Access/small.png";

const header = {
  homepage: "https://rahul2437.github.io",
  title: "Rahul.",
};
const about = {
  photo: aboutpic,
  name: "RAHUL SHEELAVANTAR",
  role: "Software Engineer",
  description:
    "I’m a Software Engineer passionate about designing and building scalable web and data-automation platforms that turn raw data into actionable insights. I excel at both frontend (React + TypeScript) and backend (.NET 8, gRPC/REST) — and thrive on building robust end-to-end systems encompassing data ingestion, transformation, workflow orchestration, and delivery. Whether it's architecting complex ETL pipelines, integrating data connectors, implementing data lineage tracking, or building UI for orchestration and visualization — I love the challenge of bridging engineering and data for real impact.",
  resume:
    "https://drive.google.com/file/d/1dGxK7oAk_VNm5vAVLUMpZQZgqWcwl8kW/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/rahulsheelavantar/",
    github: "https://github.com/rahul2437",
  },
};

const myStory = {
  description: `Certified software engineer specializing in Full Stack development with strong experience in C#, .NET, React and TypeScript. Currently building FuseData — a data automation and engineering platform — at Noesys Software. Skilled in designing ETL pipelines, integrations (Salesforce, Braintree, Dynamics, GraphQL, OData), data transformation and visualization, and delivering production-grade APIs and UIs. Comfortable across the stack: backend services (.NET, gRPC), frontend (React + TypeScript), lightweight storage (SQLite) and CI/CD/DevOps practices. Open to collaborating on data-driven web products and scalable integrations.`,
};

const projects = [
  {
    name: "FuseData",
    description:
      "FuseData is a data automation and data engineering platform I help build at Noesys Software, designed for orchestrating complex end-to-end data workflows. My work spans the full lifecycle of data movement and transformation — from building high-performance source connectors (Salesforce, Braintree, Dynamics, GraphQL, OData) to implementing incremental ingestion, schema-aware extraction, and resilient retry patterns for reliable data acquisition. I contributed to designing a flexible transformation engine supporting mapping rules, schema normalization, JSON flattening, deduplication, and validation logic. To improve pipeline performance, I integrated DuckDB + Apache Arrow for fast in-memory columnar processing, enabling efficient batch/micro-batch transformations and downstream ML/analytics workflows. I also worked on workflow design, scheduling, and monitoring (similar to Infoveave’s automation model), implementing execution metadata, error routing, and full data lineage tracking. The platform is backed by a .NET 8 core exposing gRPC/REST APIs, with a React + TypeScript frontend for workflow orchestration and visualization, and SQLite for transient state management. I strengthened production readiness with structured logging, metrics, retry semantics, CI/CD pipelines, and connector-level safeguards, ensuring scalable, reliable, and observable automation pipelines.",
    stack: [
      "React",
      "TypeScript",
      ".NET 8",
      "gRPC",
      "SQLite",
      "DuckDB",
      "Apache Arrow",
      "ETL",
      "ML Pipelines",
    ],
    sourceCode: "Private",
    livePreview: "https://help.infoveave.com/automation-v8/workflows",
    image: "https://fusedata.cloud/assets/custom/FuseData.gif",
  },
  {
    name: "Infoveave",
    description:
      "Infoveave is an enterprise-grade business intelligence and data automation platform that unifies analytics, automation, and governance into a single ecosystem. It integrates six core modules — Insights, Analysis, Automation, Data Apps, Data Quality, and Data Governance — to help organizations transform raw data into actionable, operational intelligence. I worked on enhancing end-to-end capabilities across these modules, including building interactive dashboards, advanced analysis workflows, and rule-driven automation pipelines powered by gRPC/.NET microservices. Infoveave enables users to connect to diverse data sources, model and transform datasets at scale, schedule and orchestrate workflows, build no-code data applications, validate and cleanse data, and enforce governance standards. The platform combines a modern React + TypeScript frontend with a scalable .NET backend and containerized deployments via Docker, delivering a robust, user-friendly experience for enterprise analytics and automation.",
    stack: ["React", "TypeScript", ".NET", "gRPC", "ETL", "Docker"],
    sourceCode: "Private",
    livePreview: "https://help.infoveave.com/",
    image: "https://help.infoveave.com/_astro/infoveave_lightbg.D2mjkwuM.svg",
  },
];

const skills = [
  { name: ".NET", imageUrl: "https://www.svgrepo.com/show/376369/dotnet.svg" },
  { name: "gRPC", imageUrl: "https://www.svgrepo.com/show/375531/api.svg" },
  {
    name: "AWS",
    imageUrl: "https://www.svgrepo.com/show/448266/aws.svg",
  },
  {
    name: "Docker",
    imageUrl: "https://www.svgrepo.com/show/452192/docker.svg",
  },
  {
    name: "JavaScript",
    imageUrl: "https://www.svgrepo.com/show/373705/js-official.svg",
  },
  {
    name: "TypeScript",
    imageUrl: "https://www.svgrepo.com/show/443502/brand-typescript.svg",
  },
  {
    name: "MongoDB",
    imageUrl: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "Express",
    imageUrl: "https://www.svgrepo.com/show/330398/express.svg",
  },
  {
    name: "React",
    imageUrl: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    name: "Node Js",
    imageUrl: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
  },
  {
    name: "Firebase",
    imageUrl: "https://www.svgrepo.com/show/373595/firebase.svg",
  },
  {
    name: "Git",
    imageUrl: "https://www.svgrepo.com/show/452210/git.svg",
  },
  {
    name: "Java 8",
    imageUrl: "https://www.svgrepo.com/show/452234/java.svg",
  },
];

const contact = {
  email: "rahulsheelavantar@gmail.com",
};

export { header, about, projects, skills, contact, myStory };
