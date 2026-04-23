import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./ThemeSwitcher";

type WaitlistWrapperProps = PropsWithChildren<{
  logo?: {
    src: string;
    alt?: string;
  };
  copyright?: string;
  copyrightLink?: {
    text: string;
    href: string;
  };
  showThemeSwitcher?: boolean;
  hideCopyright?: boolean;
}>;

export function WaitlistWrapper({
  children,
  logo,
  copyright = "При поддержке",
  copyrightLink = { text: "Ваша компания", href: "#" },
  showThemeSwitcher = true,
  hideCopyright = false,
}: WaitlistWrapperProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto max-w-[500px] flex flex-col justify-center items-center pb-0 overflow-hidden rounded-2xl",
      )}
      style={{
        background: "rgba(10, 5, 5, 0.88)",
        border: "1px solid rgba(120, 0, 0, 0.35)",
        boxShadow: "0 0 60px rgba(100, 0, 0, 0.3), 0 25px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(180,0,0,0.1)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex flex-col items-center gap-4 flex-1 text-center w-full p-8 pb-4">
        {logo && (
          <div className="flex justify-center w-16 h-16 items-center mx-auto">
            <img
              src={logo.src}
              alt={logo.alt || "Logo"}
              className="w-full h-full object-contain logo-spin"
            />
          </div>
        )}
        <div className="flex flex-col gap-10">{children}</div>
      </div>
      <footer className={cn(
        "flex items-center w-full self-stretch px-8 py-3 text-sm overflow-hidden",
        hideCopyright ? "justify-center" : "justify-between"
      )}
        style={{ borderTop: "1px solid rgba(120, 0, 0, 0.2)", background: "rgba(60, 0, 0, 0.15)" }}
      >
        {!hideCopyright && (
          <p className="text-xs text-slate-10">
            {copyright}{" "}
            <a
              href={copyrightLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-slate-12"
            >
              {copyrightLink.text}
            </a>
          </p>
        )}
        {showThemeSwitcher && <ThemeSwitcher />}
      </footer>
    </div>
  );
}