"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {
  const [search, setSearch] = useState("");

  // Close on ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  function handleClose() {
    setSearch("");
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed left-1/2 top-24 z-[9999] w-full max-w-3xl -translate-x-1/2 px-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="rounded-[32px] bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,.15)]"
            >
              {/* Header */}

              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-black text-[#1F1F1F]">
                  Search Menu
                </h2>

                <button
                  onClick={handleClose}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FFF8EE] transition hover:bg-[#FF6B00] hover:text-white"
                  aria-label="Close Search"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Search Input */}

              <SearchInput
                value={search}
                onChange={setSearch}
              />

              {/* Search Results */}

              <SearchResults
                search={search}
                onClose={handleClose}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}