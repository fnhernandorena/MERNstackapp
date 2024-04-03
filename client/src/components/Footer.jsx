import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="fixed bottom-1 left-0 p-1 w-full flex justify-center">
      <Link className="max-w-screen-md w-full bg-black flex justify-center rounded-lg p-2" to="https://oficial-site-next-app.vercel.app">Developer web site!</Link>
    </div>
  );
}
