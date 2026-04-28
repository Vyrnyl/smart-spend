import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { AuthInput } from "../ui/AuthInput";
import { MdDriveFileRenameOutline } from "react-icons/md";

export default function RegisterForm() {
  return (
    <form className="space-y-4 sm:space-y-6">
      <AuthInput
        label="Name"
        name="name"
        placeholder="Juan"
        icon={<MdDriveFileRenameOutline size={22} />}
      />
      <AuthInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="juan@example.com"
        icon={<Mail size={22} />}
      />

      <AuthInput
        label="Password"
        name="password"
        type="password"
        placeholder="••••••••"
        icon={<LockKeyhole size={22} />}
      />
      <AuthInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="••••••••"
        icon={<LockKeyhole size={22} />}
      />

      <button
        className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-primarys text-on-primary rounded-lg font-medium shadow-md hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        type="submit"
      >
        Sign Up
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
}
