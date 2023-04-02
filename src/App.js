import NavBar from "./components/NavBar";
import Main from "./components/Main";
import data from "./data";

export default function App() {
  const exportData = data.map((importData) => {
    return <Main key={importData.id} {...importData} />;
  });
  return (
    <div>
      <NavBar />
      {exportData}
    </div>
  );
}
