import { LoaderScreen, Spinner } from "./styles/MainLoader"

const MainLoader = () => {
  return (
    <LoaderScreen>
      <Spinner/>
      <h1>Cargando...</h1>
    </LoaderScreen>
  );
};

export default MainLoader