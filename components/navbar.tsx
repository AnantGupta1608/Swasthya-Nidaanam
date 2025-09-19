"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { usePreferences } from "@/contexts/preferences-context"
import { AuthModal } from "@/components/auth-modal"
import { SettingsModal } from "@/components/settings-modal"
import { Home, FileText, Plus, AlertTriangle, Settings, LogOut, Menu, X } from "lucide-react"

const ECGIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12h3l2-8 4 16 2-8h3" />
  </svg>
)

export function Navbar() {
  const { user, logout } = useAuth()
  const { translations } = usePreferences()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const navigationItems = [
    { href: "/", icon: Home, label: translations["Home"] || "Home" },
    { href: "/records", icon: FileText, label: translations["My Records"] || "My Records" },
    { href: "/add-record", icon: Plus, label: translations["Add Record"] || "Add Record" },
    { href: "/emergency", icon: AlertTriangle, label: translations["Emergency"] || "Emergency" },
  ]

  return (
    <>
      <nav className="bg-slate-800 border-b border-slate-700 px-4 py-3 shadow-sm sticky top-0 z-50">
          <div className="w-full flex items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-lg">
              <ECGIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">
                <span className="hidden sm:inline">Swasthya Nidaanam</span>
                <span className="sm:hidden">Swasthya</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 transition-colors ${
                  pathname === item.href ? "text-blue-400 font-medium" : "text-white hover:text-blue-300"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={() => setShowSettingsModal(true)}
              className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span>{translations["Settings"] || "Settings"}</span>
            </button>
          </div>

          {/* Auth Section and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-300 hidden sm:block">
                  {user.displayName || user.email?.split("@")[0]}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-transparent border-slate-600 text-white hover:bg-slate-700"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">{translations["Logout"] || "Logout"}</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 transition-colors rounded-lg px-3 sm:px-4 py-2"
              >
                {translations["Login"] || "Login"}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 transition-colors p-2 rounded-lg hover:bg-slate-700 ${
                    pathname === item.href ? "text-blue-400 font-medium bg-slate-700" : "text-white hover:text-blue-300"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <button
                onClick={() => {
                  setShowSettingsModal(true)
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 text-white hover:text-blue-300 transition-colors p-2 rounded-lg hover:bg-slate-700"
              >
                <Settings className="w-5 h-5" />
                <span>{translations["Settings"] || "Settings"}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <SettingsModal isOpen={showSettingsModal} onClose={() => setShowSettingsModal(false)} />
    </>
  )
}
