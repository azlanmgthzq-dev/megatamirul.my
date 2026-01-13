"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type CertificateModalProps = {
  open: boolean;
  imageSrc: string;
  onClose: () => void;
};

export default function CertificateModal({
  open,
  imageSrc,
  onClose,
}: CertificateModalProps) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-5xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-10 rounded-full bg-background/90 border border-border p-2 hover:bg-background transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate image */}
            <img
              src={imageSrc}
              alt="Certificate"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl bg-background"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
