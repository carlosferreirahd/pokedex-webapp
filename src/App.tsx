function App() {

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="w-full shadow-md">
        <div className="container">
          header
        </div>
      </header>

      <main className="flex flex-1">
        <div className="container py-8">
          main content
        </div>
      </main>

      <footer className="w-full bg-base-300 text-base-content">
        <div className="container">
          footer
        </div>
      </footer>
    </div>
  );
}

export default App;
