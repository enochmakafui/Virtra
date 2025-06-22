function Container({ children }) {
  return (
    <main className="max-w-6xl mx-auto font-['Preahvihear'] py-20 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-40 pt-10 md:pt-24">
      {children}
    </main>
  );
}

export default Container;
