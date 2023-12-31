"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, getAllAdmins } from "@/redux/actions";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function NavBar() {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admins);
  const email = useSelector((state) => state.email);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(getAllAdmins());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  if (!token) {
    // Usuario no autenticado
    return (
      <nav className="w-full mt-0 h-32 bg-black bg-opacity-50">
        <div className="flex justify-center items-center h-full">
          <div className="text-2xl space-x-12">
            <button>
              <Link href="/">Home</Link>
            </button>
            <button>
              <Link href="/login" id="login">Login</Link>
            </button>
            <button>
              <Link href="/register">Registro</Link>
            </button>
          </div>
        </div>
      </nav>
    );
  }

  // Usuario autenticado
  const isAdmin = admins.some((admin) => admin.email === email);

  return (
    <nav className="w-full mt-0 h-32 bg-black bg-opacity-50">
    <div className="flex justify-between items-center h-full px-8">
      <div className="text-2xl space-x-12">
        <button>
          <Link href="/">Home</Link>
        </button>
        {isAdmin && (
          <button>
            <Link href="/dashboard">Panel</Link>
          </button>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <ShoppingCart/> {/* Agrega el componente ShoppingCart aquí */}
        <button onClick={handleLogout} id="logout" className="text-white">
          Logout
        </button>
      </div>
    </div>
  </nav>
  );
}