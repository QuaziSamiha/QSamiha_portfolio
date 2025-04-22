"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CommandIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <CommandIcon className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              Home
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/about"))}
            >
              About
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/projects"))}
            >
              Projects
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/experience"))}
            >
              Experience
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/contact"))}
            >
              Contact
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/resume"))}
            >
              Resume
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  window.open("https://github.com/QuaziSamiha", "_blank")
                )
              }
            >
              GitHub
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  window.open(
                    "https://www.linkedin.com/in/quazi-samiha-tasnim",
                    "_blank"
                  )
                )
              }
            >
              LinkedIn
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  window.open("mailto:quazisamiha@gmail.com", "_blank")
                )
              }
            >
              Email
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
