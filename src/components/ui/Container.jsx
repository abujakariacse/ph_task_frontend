export default function Container({ children }) {
  return (
    <div className="bg-primary-gradient w-full h-screen max-w-[1450px] mx-auto">
      {children}
    </div>
  );
}
