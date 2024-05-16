import { useState } from "react";

import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalHandler(){
    setModalIsVisible(false)
  }

  function showModalHandler(){
    setModalIsVisible(true)
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
      <main>
      <PostList isVisible={modalIsVisible} onStopShowing={hideModalHandler}/>
    </main>
    </>
  );
}

export default App;


