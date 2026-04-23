import { ThemeProvider } from "next-themes";
import {
  WaitlistForm,
  WaitlistWrapper,
  MeshGradient,
} from "@/components/waitlist";

const Index = () => {
  const handleSubmit = async (
    email: string
  ): Promise<{ success: boolean; error?: string }> => {
    console.log("Submitting email:", email);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true };
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="antialiased max-w-screen min-h-svh" style={{ backgroundColor: "#080505" }}>
        <MeshGradient
          colors={["#6b0000", "#2a0000", "#8b0000", "#3d0000"]}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            opacity: 0.85,
          }}
        />
        {/* Noise overlay for texture */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />
        <div className="max-w-screen-sm mx-auto w-full relative z-[1] flex flex-col min-h-screen items-center justify-center">
          <div className="px-5 gap-8 flex flex-col">
            <main className="flex justify-center">
              <WaitlistWrapper
                logo={undefined}
                copyright="© 2025"
                copyrightLink={{ text: "DARK RUSSIA", href: "#" }}
                showThemeSwitcher={false}
                hideCopyright={false}
              >
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className="text-xs font-semibold tracking-[0.3em] uppercase"
                      style={{ color: "#c0392b", fontFamily: "'Unbounded', sans-serif" }}
                    >
                      Ранний доступ
                    </span>
                    <h1
                      className="text-3xl sm:text-4xl font-black text-center blood-glow"
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: "#f0d0d0",
                        lineHeight: 1.15,
                      }}
                    >
                      DARK<br />RUSSIA
                    </h1>
                    <div
                      style={{
                        width: 48,
                        height: 2,
                        background: "linear-gradient(90deg, transparent, #8b0000, transparent)",
                        margin: "4px 0",
                      }}
                    />
                  </div>
                  <p
                    className="text-center tracking-tight text-pretty text-sm leading-relaxed"
                    style={{ color: "#c49a9a" }}
                  >
                    Тёмный мир. Жестокие правила. Выживание любой ценой.<br />
                    Зарегистрируйся первым — получи доступ до официального запуска.
                  </p>
                </div>
                <div className="px-1 flex flex-col w-full self-stretch">
                  <WaitlistForm
                    onSubmit={handleSubmit}
                    placeholder="Введите email для раннего доступа"
                    buttonCopy={{
                      idle: "Вступить",
                      loading: "Отправка...",
                      success: "Принято!",
                    }}
                  />
                </div>
              </WaitlistWrapper>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
