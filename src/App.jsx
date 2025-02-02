import { Scene } from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // clear console on load
    console.clear();
  }, []);

  return (
    <section className="h-[100dvh] underwater-bg relative w-full overflow-hidden">
      {/* render screen */}
      <Scene />
    </section>
  );
}

export default App;
