export type ProjectCategory =
  | "backend"
  | "frontend"
  | "full-stack"
  | "tool"
  | "other";

export type ProjectStatus =
  | "completed"
  | "in-development"
  | "experimental";

export type ProjectArchitecture = {
  description: string;
  components: string[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;

  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;

  description: string;

  technologies: string[];
  highlights: string[];

  architecture?: ProjectArchitecture;
  challenges?: string[];
  learnings?: string[];

  githubUrl: string;
  demoUrl?: string;

  year: number;
};

export const projects: Project[] = [
  {
    id: "inventory-api",
    title: "Inventory API",
    tagline: "A full-stack inventory management system.",
    category: "full-stack",
    status: "in-development",
    featured: true,
    description:
      "An inventory management application built to practice backend development, REST APIs, relational databases, testing, and frontend integration.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "pytest",
      "React",
      "TypeScript",
    ],
    highlights: [
      "REST API for inventory management",
      "PostgreSQL relational database",
      "SQLAlchemy database layer",
      "Automated testing with pytest",
      "Frontend integration",
    ],
    architecture: {
      description:
        "The application follows a full-stack architecture connecting a React frontend with a FastAPI REST API and PostgreSQL database.",
      components: [
        "React + TypeScript frontend",
        "FastAPI REST API",
        "SQLAlchemy data layer",
        "PostgreSQL database",
        "pytest test suite",
      ],
    },
    challenges: [
      "Designing the backend structure around independent features",
      "Connecting the API with the database",
      "Introducing automated tests into the development workflow",
    ],
    learnings: [
      "Building REST APIs with FastAPI",
      "Working with relational databases through SQLAlchemy",
      "Structuring a full-stack application",
      "Testing backend functionality",
    ],
    githubUrl: "https://github.com/adrisalca31-dev/inventory-api",
    year: 2026,
  },

  {
    id: "smart-file-organizer",
    title: "Smart File Organizer",
    tagline: "A Python tool for automated file organization.",
    category: "tool",
    status: "completed",
    featured: true,
    description:
      "A modular Python command-line tool that organizes files automatically while handling duplicates, naming conflicts, previews, logging, and errors.",
    technologies: [
      "Python",
      "Pytest",
      "Black",
      "Ruff",
      "SHA-256",
      "CLI",
    ],
    highlights: [
      "Automatic file categorization",
      "Duplicate detection using SHA-256",
      "Filename conflict handling",
      "Dry-run preview mode",
      "Structured logging",
      "Automated test suite",
    ],
    architecture: {
      description:
        "The application separates file discovery, categorization, duplicate detection, organization, conflict handling, and logging into dedicated components.",
      components: [
        "File scanner",
        "File categorizer",
        "Duplicate checker",
        "File organizer",
        "Conflict handler",
        "Logger",
        "CLI interface",
      ],
    },
    challenges: [
      "Handling different file organization scenarios safely",
      "Detecting duplicate files reliably",
      "Preventing unintended changes through dry-run functionality",
      "Keeping responsibilities separated across the application",
    ],
    learnings: [
      "Working with the Python file system APIs",
      "Designing modular applications",
      "Writing automated tests",
      "Using hashing for duplicate detection",
      "Improving code quality with linting and formatting tools",
    ],
    githubUrl:
      "https://github.com/adrisalca31-dev/smart-file-organizer",
    year: 2026,
  },
];