import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
      <Header />
    </div>
    </div>
  );
}
export default App;
