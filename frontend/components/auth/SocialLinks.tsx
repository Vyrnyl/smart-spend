import { FaApple, FaGoogle } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <>
      {" "}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant/30"></div>
        </div>

        <div className="relative flex justify-center">
          <span className="bg-surface-container-lowest font-medium px-4 text-xs text-outline">
            OR CONTINUE WITH
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-2 px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors text-sm font-medium text-on-surface">
          <FaGoogle />
          Google
        </button>

        <button className="flex items-center justify-center gap-2 py-2 px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors text-sm font-medium text-on-surface">
          <FaApple />
          Apple
        </button>
      </div>
    </>
  );
};

export default SocialLinks;
