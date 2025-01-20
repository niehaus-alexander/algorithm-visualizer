export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-500">
      {/* <header className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">My Website</h1>
      </header> */}
      <div className=" bg-slate-300 max-w-screen-lg mx-auto ">{children}</div>
      {/* <footer className="bg-gray-800 text-white p-4 mt-8">
        <p>Footer Content</p>
      </footer> */}
    </div>
  );
}
