"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border/20 bg-[#333333]">
      <Link href="/" className="flex items-center">
        <Logo className="scale-90 sm:scale-100" />
      </Link>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 md:hidden">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3 py-1 h-8"
          asChild
        >
          <Link href="/reserve">RESERVE</Link>
        </Button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/personalization" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Personalization
        </Link>
        <Link href="/charging" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Charging
        </Link>
        <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          FAQ
        </Link>
        <Link href="/signin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Sign in
        </Link>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
          <Link href="/reserve">RESERVE</Link>
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#333333] border-b border-border/20 absolute top-[57px] left-0 right-0 z-50"
          >
            <nav className="flex flex-col py-2">
              <Link
                href="/personalization"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Personalization
              </Link>
              <Link
                href="/charging"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Charging
              </Link>
              <Link
                href="/faq"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/signin"
                className="px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
