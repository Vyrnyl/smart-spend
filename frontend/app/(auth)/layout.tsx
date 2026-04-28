import { Wallet } from "lucide-react";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex justify-center sm:items-center p-4 overflow-y-auto">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-indigo-600 text-white shadow-lg mb-3 sm:mb-4">
            <Wallet size={28} className="sm:w-8 sm:h-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Smart Spend
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mt-2 px-2">
            Master your money with precision.
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}