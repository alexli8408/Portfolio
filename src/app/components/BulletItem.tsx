interface BulletItemProps {
  children: React.ReactNode;
}

export default function BulletItem({ children }: BulletItemProps) {
  return (
    <li className="group flex items-start gap-4 pl-5 relative hover:translate-x-1 transition-transform duration-200">
      {/* Diamond bullet */}
      <span className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-700 dark:bg-stone-300 rotate-45 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
      <span className="text-stone-600 dark:text-stone-400">{children}</span>
    </li>
  );
}
