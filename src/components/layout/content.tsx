interface ContentProps extends React.PropsWithChildren { }

export function Content({
  children,
}: ContentProps) {

  return (
    <main className="flex flex-1">
      <div className="container py-8">
        {children}
      </div>
    </main>
  );
}
