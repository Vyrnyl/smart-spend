
import AuthSection from "@/components/auth/AuthSection";
import SocialLinks from "@/components/auth/SocialLinks";

export default function LoginPage() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 shadow-xl rounded-xl overflow-hidden w-full">
      <div className="px-4 sm:px-6 pb-5 sm:pb-6">
        <AuthSection />
        <SocialLinks />
      </div>
    </div>
  );
}