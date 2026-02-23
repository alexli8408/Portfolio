import BulletItem from "./components/BulletItem";
import SubItem from "./components/SubItem";
import AnimatedLink from "./components/AnimatedLink";

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

      {/* Projects Section */}
      <ul id="projects" className="flex flex-col gap-2 mt-4">
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
    </div>
  );
}
