import { GalleryHorizontalEnd } from "lucide-react";
import BulletItem from "./components/BulletItem";
import SubItem from "./components/SubItem";
import AnimatedLink from "./components/AnimatedLink";
import Signature from "./components/Signature";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      {/* Hero / Current Status */}
      <ul className="flex flex-col gap-2">
        <BulletItem>
          Computer Engineering{" "}
          <AnimatedLink href="https://uwaterloo.ca">UWaterloo</AnimatedLink>
        </BulletItem>
        <BulletItem>
          Software Developer{" "}
          <AnimatedLink href="https://www.uworbital.com">
            UW Orbital
          </AnimatedLink>
        </BulletItem>
      </ul>

      {/* What I've been building */}
      <ul className="flex flex-col gap-2 mt-2">
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            what i&apos;ve been building:
          </em>
        </BulletItem>
        <ul className="flex flex-col gap-2 pl-5">
          <SubItem>
            building ground station software for{" "}
            <AnimatedLink href="https://www.uworbital.com">
              UW Orbital
            </AnimatedLink>
            &apos;s satellite platform
          </SubItem>
          <SubItem>
            researched virtual memory management across OS architectures @{" "}
            <AnimatedLink href="https://cecloud.com">CEcloud</AnimatedLink>
          </SubItem>
          <SubItem>
            overhauled UI styling and CSS performance for 500+ users @{" "}
            <AnimatedLink href="https://www.tsinghua.edu.cn/en/">
              Tsinghua University
            </AnimatedLink>
          </SubItem>
        </ul>
      </ul>

      {/* CTA Button */}
      <a
        href="#projects"
        className="flex items-center justify-center gap-2 mt-6 py-4 px-6 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-600 dark:text-stone-400 font-extralight transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:border-stone-400 dark:hover:border-stone-600"
      >
        see what i&apos;ve built
        <GalleryHorizontalEnd size={16} />
      </a>

      {/* Projects Section */}
      <ul id="projects" className="flex flex-col gap-2 mt-8 scroll-mt-20">
        <BulletItem>
          <em className="font-medium text-stone-500 dark:text-stone-400">
            what i&apos;ve built:
          </em>
        </BulletItem>
        <ul className="flex flex-col gap-2 pl-5">
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/linkmark">
              Linkmark
            </AnimatedLink>{" "}
            &mdash; full-stack bookmark manager with Chrome extension
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/palette-ai">
              PaletteAI
            </AnimatedLink>{" "}
            &mdash; AI color palette generator with Azure OpenAI
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/co-whiteboard">
              CoWhiteboard
            </AnimatedLink>{" "}
            &mdash; real-time collaborative whiteboard
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/truelight">
              TrueLight
            </AnimatedLink>{" "}
            &mdash; dashcam accessibility app for colorblind users
          </SubItem>
          <SubItem>
            <AnimatedLink href="https://github.com/alexli8408/data-structures-library">
              Data Structures Library
            </AnimatedLink>{" "}
            &mdash; C++ library outperforming STL by 11%
          </SubItem>
        </ul>
      </ul>

      {/* Signature */}
      <Signature />
    </div>
  );
}
