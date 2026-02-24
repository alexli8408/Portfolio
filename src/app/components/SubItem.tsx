interface SubItemProps {
  children: React.ReactNode;
}

export default function SubItem({ children }: SubItemProps) {
  return (
    <li className="relative flex items-start gap-4">
      <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500 select-none">
        {"↳"}
      </span>
      <span className="text-stone-600 dark:text-stone-400">{children}</span>
    </li>
  );
}
