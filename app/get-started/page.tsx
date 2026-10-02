"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuButton } from "@/components/shell/menu-button";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TAGS } from "@/data/tags";
import { cn } from "@/lib/utils";

const GetStartedPage = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (tag: string) => {
    setSelected((current) =>
      current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag],
    );
  };

  const nextHref =
    selected.length > 0
      ? `/browse?tags=${encodeURIComponent(selected.join(","))}`
      : "/browse";

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <Image
        src="/get-started/background-img.png"
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
            className="hidden h-10 w-56 border-transparent bg-surface-tertiary type-label-strong-caps md:block"
          />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <h1 className="type-serif-regular text-center text-white">
            Pick some tags
            <br />
            and get started
          </h1>

          <ul className="flex max-w-[680px] flex-wrap justify-center gap-2">
            {TAGS.map((tag) => {
              const isSelected = selected.includes(tag);
              return (
                <li key={tag}>
                  <Button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggle(tag)}
                    className={cn(
                      "h-14 rounded-pill px-6 type-label-strong-caps",
                      "bg-surface-tertiary text-ink-secondary hover:bg-surface-tertiary",
                      "aria-pressed:bg-surface-tertiary-hover aria-pressed:text-icon",
                    )}
                  >
                    {tag}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mx-auto flex w-full max-w-[560px]">
          <Link
            href={nextHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 flex-1 bg-surface-tertiary text-ink-secondary uppercase hover:bg-surface-tertiary",
            )}
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GetStartedPage;
