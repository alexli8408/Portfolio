import AnimatedLink from "./AnimatedLink";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-4">
      <AnimatedLink href="/" className="text-stone-700 dark:text-stone-200 font-normal">
        alex li
      </AnimatedLink>
    </header>
  );
}
