import "./style.css";
function App() {
  const appTitle = "Open Facts";

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Open Facts Logo" />
          <h1>{appTitle}</h1>
        </div>
        <button class="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>Fact List</section>;
}

export default App;
