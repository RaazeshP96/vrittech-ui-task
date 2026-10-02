import Image from "next/image";
import Link from "next/link";
import { MenuButton } from "@/components/shell/menu-button";
import { Wordmark } from "@/components/shell/wordmark";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const LaunchPage = () => {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <Image
        src="/launch-page/background-img.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      <div className="relative flex min-h-dvh flex-col p-3 md:p-4">
        <div className="flex items-center gap-2">
          <MenuButton />
          <Input
            type="search"
            placeholder="SEARCH"
            aria-label="Search"
            className="hidden h-9 w-56 rounded-full border-transparent bg-surface-tertiary/90 type-label-strong-caps text-[#1e1e1e] placeholder:text-[#1e1e1e]/50 md:block"
          />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-6">
          <div className="relative hidden w-full [container-type:inline-size] md:block">
            <Wordmark className="text-white" />
            <div
              aria-hidden="false"
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <p
                className="text-center text-white"
                style={{
                  fontFamily:
                    "var(--font-display-src), 'Libre Caslon Text', serif",
                  fontSize: "1.1cqw",
                  lineHeight: "125%",
                  letterSpacing: "-0.01em",
                  paddingRight: "5rem",
                }}
              >
                A place
                <br />
                to get your
                <br />
                creativity
                <br />
                <em className="italic">together</em>
              </p>
            </div>
          </div>

          <div className="w-full md:hidden">
            <Wordmark className="text-white" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[560px] flex-col gap-2 md:flex-row md:gap-3">
          <Link
            href="/library"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 flex-1 rounded-lg bg-surface-neutral type-label-strong-caps text-[#1e1e1e] hover:bg-surface-neutral/90",
            )}
          >
            Log in
          </Link>
          <Link
            href="/get-started"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 flex-1 rounded-lg bg-surface-tertiary type-label-strong-caps text-[#1e1e1e] hover:bg-surface-tertiary-hover",
            )}
          >
            Get started
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LaunchPage;
