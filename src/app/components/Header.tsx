import AnimatedLink from "./AnimatedLink";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-neutral-700 dark:text-neutral-300 font-semibold">
        <AnimatedLink href="/">
          Alex Li
        </AnimatedLink>
      </h1>
    </div>
  );
}
