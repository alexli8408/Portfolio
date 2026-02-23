interface SubItemProps {
  children: React.ReactNode;
}

export default function SubItem({ children }: SubItemProps) {
  return (
    <li className="relative flex items-start gap-2 pl-2 ml-2">
      <span className="text-stone-400 dark:text-stone-500 select-none shrink-0">
        {"↳"}
      </span>
      <span className="text-stone-600 dark:text-stone-400">{children}</span>
    </li>
  );
}
