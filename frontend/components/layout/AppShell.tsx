
import ContentContainer from "./ContentContainer";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">

      <div className="flex-1 flex flex-col">

        <ContentContainer>
          {children}
        </ContentContainer>
      </div>
    </div>
  );
}