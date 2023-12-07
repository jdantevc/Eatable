import { Loader, LoaderContainer, LoaderScreen } from "./styles/MainLoader"

const MainLoader = () => {
  return (
    <LoaderScreen>
        <LoaderContainer>
          <img src="Logo.svg" alt="Logo"/>
          <Loader/>
        </LoaderContainer>
      </LoaderScreen>
  );
};

export default MainLoader