import { Navbar } from "@/components/navbar"
import { Dashboard } from "@/components/dashboard"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Dashboard />
      </main>
    </div>
  )
}
