import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <header className="header">Header</header>
      <div className="content">
        <div className="leftSide">
          <Card />
        </div>
        <div className="rightSide">
          <div className="aboutMe">About me</div>
          <div className="projects">Projects</div>
        </div>
      </div>
    </div>
  );
}

export default App;
