import { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: React.ReactNode;
  name: string;
};

export function AuthInput({
  label,
  icon,
  name,
  ...props
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label
        className="text-sm font-medium text-on-surface"
        htmlFor={name}
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
          >
            {icon}
          </span>
        )}

        <input
          id={name}
          name={name}
          className="
            w-full pl-10 pr-4 py-3
            rounded-lg border border-outline-variant
            bg-surface-bright
            focus:ring-2 focus:ring-primary/20
            focus:border-primary
            outline-none transition-all text-sm
          "
          {...props}
        />
      </div>
    </div>
  );
}