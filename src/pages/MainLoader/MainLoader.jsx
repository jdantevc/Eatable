import "./styles/MainLoader.js"
import { LoaderScreen, Spinner } from "./style.js"

const MainLoader = () => {
  return (
    <LoaderScreen>
      <Spinner/>
      <h1>Cargando...</h1>
    </LoaderScreen>
  );
};

export default MainLoader