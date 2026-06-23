export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
      {children}
    </span>
  );
}
