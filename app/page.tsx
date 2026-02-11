import { Linkedin, Github, FileText, Mail } from "lucide-react";
import Typewriter from "./components/Typewriter";

export default function Home() {
  return (
    <main>
      <div className="background-layer" aria-hidden="true" />
      <div className="content-card">
        {/* Header */}
        <div className="header">
          <h1>alex-li.vercel.app</h1>
          <div className="social-links">
            <a href="mailto:atli@uwaterloo.ca" aria-label="Email" title="Email">
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/alex-li-619870294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alexli8408"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a href="/Resume.pdf" target="_blank" aria-label="Resume" title="Resume">
              <FileText size={20} />
            </a>
          </div>
        </div>

        {/* Typewriter */}
        <div className="section">
          <p>
            Alex{" "}
            <span role="img" aria-label="heart">
              ⚡💻
            </span>{" "}
            <Typewriter />
          </p>
        </div>

        {/* Education */}
        <div className="section">
          <h3>Education</h3>
          <ul className="experience-list">
            <li>
              Computer Engineering @ University of Waterloo
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="section">
          <h3>Experience</h3>
          <ul className="experience-list">
            <li>
              <a
                href="https://github.com/alexli8408/GS-Onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link bold"
              >
                Software Developer
              </a>
              {" "}@ UW Orbital
            </li>
            <li>
              <a
                href="https://github.com/alexli8408/UW-Reality-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link bold"
              >
                Software Developer
              </a>
              {" "}@ Waterloo Reality Labs
            </li>
            <li>
              Computer Architecture Research Intern @ CEcloud
            </li>
            <li>
              Web Development Intern @ Tsinghua University
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div className="section">
          <h3>Projects</h3>
          <ul className="project-list">
            <li>
              <a
                href="https://github.com/alexli8408"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link bold"
              >
                TrueLight
              </a>
              , a Cross-Platform Accessibility App
            </li>
            <li>
              <a
                href="https://github.com/alexli8408"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link bold"
              >
                Data Structures Library
              </a>
              , a C++ Data Structures Library
            </li>
            <li>
              <a
                href="https://github.com/alexli8408"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link bold"
              >
                Study Planner
              </a>
              , a Full-Stack Flask App
            </li>
            <li>
              <a
                href="https://github.com/alexli8408"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link bold"
              >
                FPGA Arithmetic Logic Unit
              </a>
              , a Verilog Arithmetic Logic Unit
            </li>
            <li>
              <a
                href="https://github.com/alexli8408"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link bold"
              >
                CircadiaSense
              </a>
              , an Arduino Circadian Lighting System
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="footer">&copy; 2026 Alex Li</div>
      </div>
    </main>
  );
}
