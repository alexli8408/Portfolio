import AnimatedLink from "./AnimatedLink";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <AnimatedLink href="/" className="text-neutral-700 dark:text-neutral-300 font-semibold">
        Alex Li
      </AnimatedLink>
    </header>
  );
}
