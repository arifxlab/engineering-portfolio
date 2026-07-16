import { Dialog, DialogPanel } from "@headlessui/react";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { navigation } from "../../constants/navigation";
import { social } from "../../data/social";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-zinc-300 transition hover:bg-zinc-800 md:hidden"
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-[100]"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <DialogPanel className="flex h-full w-72 flex-col bg-zinc-950 p-6 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-cyan-400">
                AK
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-zinc-300 hover:bg-zinc-800"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-zinc-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex gap-5 pt-10">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <FaGithub size={24} />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-cyan-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
