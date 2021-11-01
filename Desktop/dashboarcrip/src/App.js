import './assets/css/app.css';
import SideBar from '../src/components/sideBar';
import NavBar from '../src/components/navBar';
import CantCursos from '../src/components/cantCursos';
import CantUsuarios from '../src/components/cantUsuarios';
import UltimoCurso from '../src/components/ultimoCurso';
import Temas from '../src/components/temas';
import Temas2 from '../src/components/temas2';
import Footer from '../src/components/footer';


function App() {
  return (
      <div id="wrapper">
        <SideBar/>

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <NavBar/>
            <div class="container-fluid">

              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">CriptoLatino Dashboard</h1>
              </div>

              <div class="row">
                <CantCursos/>
                <Temas/>
                <CantUsuarios/>
              </div>

              <div class="row">
                <UltimoCurso/> 
                <Temas2/>
              </div>
              
            </div>
          </div>
          <Footer/>
        </div> 

      </div>
  );
}

export default App;
