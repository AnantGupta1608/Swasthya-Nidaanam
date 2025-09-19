import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, Download, Eye, Plus } from "lucide-react"

export default function RecordsPage() {
  const records = [
    {
      id: 1,
      title: "Blood Test Report",
      date: "2024-01-15",
      type: "Lab Report",
      doctor: "Dr. Smith",
      status: "Normal",
    },
    {
      id: 2,
      title: "X-Ray Chest",
      date: "2024-01-10",
      type: "Imaging",
      doctor: "Dr. Johnson",
      status: "Review Required",
    },
    {
      id: 3,
      title: "Prescription",
      date: "2024-01-08",
      type: "Medication",
      doctor: "Dr. Brown",
      status: "Active",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Records</h1>
            <p className="text-muted-foreground mt-1">View and manage your medical records</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New Record
          </Button>
        </div>

        <div className="grid gap-4">
          {records.map((record) => (
            <Card key={record.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{record.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        {record.date} • {record.doctor}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant={
                      record.status === "Normal" ? "default" : record.status === "Active" ? "secondary" : "destructive"
                    }
                  >
                    {record.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{record.type}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
