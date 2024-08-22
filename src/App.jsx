import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="min-h-screen bg-[#181818] flex items-center justify-center font-poppins">
      <div className="fixed left-14 top-48 text-white bg-[#282828] px-16 py-8 text-center rounded-lg shadow-lg border-2 border-[#303030]">
        <h1 className="font-bold text-3xl">fycalc</h1>
        <p className="font-light text-xl">by &copy; fyrmnzia.com</p>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
