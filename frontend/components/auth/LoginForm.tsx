import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { AuthInput } from "../ui/AuthInput";

export default function LoginForm() {
  return (
    <form className="space-y-4 sm:space-y-6">
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

      <a className="text-xs text-primarys hover:underline font-medium" href="#">
        Forgot password?
      </a>

      <button
        className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-primarys text-on-primary rounded-lg font-medium shadow-md hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        type="submit"
      >
        Sign In to Dashboard
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
}
