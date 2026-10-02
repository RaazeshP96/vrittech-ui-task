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

      <div className="relative flex min-h-dvh flex-col p-3 md:p-4">
        <div className="flex items-center gap-2">
          <MenuButton />
          <Input
            type="search"
            placeholder="SEARCH"
            aria-label="Search"
            className="hidden w-56 border-transparent bg-white text-ink md:block"
          />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-10 md:block">
            <p
              className={cn(
                "type-serif-regular order-first text-center text-white",
                "md:absolute md:left-1/2 md:top-1/2 md:z-10 md:-translate-x-1/2 md:-translate-y-1/2",
              )}
            >
              A place
              <br />
              to get your
              <br />
              creativity
              <br />
              <em className="italic">together</em>
            </p>
            <Wordmark className="text-white" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[560px] flex-col gap-2 md:flex-row-reverse">
          <Link
            href="/get-started"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 flex-1 bg-white text-ink uppercase hover:bg-white/90",
            )}
          >
            Get started
          </Link>
          <Link
            href="/library"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 flex-1 bg-brand-secondary text-ink uppercase hover:bg-brand-secondary-hover",
            )}
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LaunchPage;
