interface BulletItemProps {
  children: React.ReactNode;
}

export default function BulletItem({ children }: BulletItemProps) {
  return (
    <li className="flex items-start gap-4 pl-4 relative">
      {/* Diamond bullet */}
      <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110 group-active:rotate-90 group-active:scale-110" />
      <span className="text-stone-600 dark:text-stone-400">{children}</span>
    </li>
  );
}
