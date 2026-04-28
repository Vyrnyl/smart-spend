export default function ContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-6 bg-gray-100 flex-1 overflow-auto">
      {children}
    </main>
  );
}