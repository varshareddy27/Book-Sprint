import logo from './logo.svg';
import './App.css';
let name="varsha";
function App() {
  return (
    <>
    <h1>Are you a book enthusiast? Then this is for you, dear!!!</h1>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Book Love</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://openlibrary.org/">Online Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.infobooks.org/free-pdf-books/computers/">Technology Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://pdfdrive.to/">Find All Books</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
  
}

export default App;
