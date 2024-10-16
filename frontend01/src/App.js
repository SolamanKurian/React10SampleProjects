import Youtube from "./youtube";


function App() {
  let a="suresh"
  return (
    <>
      <h1>Solaman kurian</h1>
      <Youtube/>
      <h1>{a==="suresh" ?"yes":"no"}</h1>
    </>
  );
}

export default App;
