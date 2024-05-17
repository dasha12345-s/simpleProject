import { useState } from "react";

import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event){
    console.log(event.target)
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


