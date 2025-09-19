"use client"

import { useAuth } from "@/hooks/use-auth"
import { usePreferences } from "@/contexts/preferences-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  AlertTriangle,
  Pill,
  Calendar,
  FileText,
  Upload,
  Activity,
  Plus,
  Thermometer,
  WeightIcon,
  Clock,
} from "lucide-react"

export function Dashboard() {
  const { user, loading } = useAuth()
  const { translations } = usePreferences()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {translations["Health Dashboard"] || "Health Dashboard"}
        </h1>
        <p className="text-muted-foreground">{translations["Your Health Overview"] || "Your Health Overview"}</p>
      </div>

      {/* Health Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Heart Rate Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations["Heart Rate"] || "Heart Rate"}</CardTitle>
            <Heart className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72</div>
            <p className="text-xs text-emerald-600">bpm</p>
          </CardContent>
        </Card>

        {/* Blood Pressure Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations["Blood Pressure"] || "Blood Pressure"}</CardTitle>
            <Activity className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120/80</div>
            <p className="text-xs text-emerald-600">mmHg</p>
          </CardContent>
        </Card>

        {/* Temperature Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations["Temperature"] || "Temperature"}</CardTitle>
            <Thermometer className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.6</div>
            <p className="text-xs text-emerald-600">°F</p>
          </CardContent>
        </Card>

        {/* Weight Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations["Weight"] || "Weight"}</CardTitle>
            <WeightIcon className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150</div>
            <p className="text-xs text-emerald-600">~2 lbs</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Records Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              {translations["Recent Records"] || "Recent Records"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Checkup</p>
                <p className="text-sm text-muted-foreground">Dr. Smith • 2024-01-15</p>
              </div>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                completed
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Blood Test</p>
                <p className="text-sm text-muted-foreground">Lab Corp • 2024-01-10</p>
              </div>
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
                results ready
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Prescription</p>
                <p className="text-sm text-muted-foreground">Vitamin D • 2024-01-05</p>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                active
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Appointments Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {translations["Upcoming Appointments"] || "Upcoming Appointments"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Follow-up</p>
                <p className="text-sm text-muted-foreground">Dr. Johnson • 2024-01-25 at 10:00 AM</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Annual Physical</p>
                <p className="text-sm text-muted-foreground">Dr. Brown • 2024-02-01 at 2:30 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Medications Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="h-5 w-5 text-primary" />
              Current Medications
            </CardTitle>
            <CardDescription>Your active prescriptions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Metformin</p>
                <p className="text-sm text-muted-foreground">500mg, twice daily</p>
              </div>
              <Badge variant="outline">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Lisinopril</p>
                <p className="text-sm text-muted-foreground">10mg, once daily</p>
              </div>
              <Badge variant="outline">Active</Badge>
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Plus className="h-4 w-4 mr-2" />
              Add Medication
            </Button>
          </CardContent>
        </Card>

        {/* Allergies Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Allergies
            </CardTitle>
            <CardDescription>Known allergies and reactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <p className="font-medium text-red-800">Penicillin</p>
                <p className="text-sm text-red-600">Severe reaction</p>
              </div>
              <Badge variant="destructive">High Risk</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <p className="font-medium text-yellow-800">Pollen</p>
                <p className="text-sm text-yellow-600">Seasonal</p>
              </div>
              <Badge variant="secondary">Moderate</Badge>
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Plus className="h-4 w-4 mr-2" />
              Add Allergy
            </Button>
          </CardContent>
        </Card>

        {/* Recent Visits Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Recent Visits
            </CardTitle>
            <CardDescription>Your latest appointments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Dr. Sharma</p>
                <p className="text-sm text-muted-foreground">General Checkup</p>
                <p className="text-xs text-muted-foreground">Dec 15, 2024</p>
              </div>
              <Badge variant="outline">Completed</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Dr. Patel</p>
                <p className="text-sm text-muted-foreground">Cardiology</p>
                <p className="text-xs text-muted-foreground">Nov 28, 2024</p>
              </div>
              <Badge variant="outline">Completed</Badge>
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Visit
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Health Records Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Health Records
          </CardTitle>
          <CardDescription>Upload and manage your medical documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm font-medium">Upload Lab Results</p>
              <p className="text-xs text-muted-foreground">PDF, JPG, PNG</p>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm font-medium">Upload Prescription</p>
              <p className="text-xs text-muted-foreground">PDF, JPG, PNG</p>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm font-medium">Upload X-Ray</p>
              <p className="text-xs text-muted-foreground">PDF, JPG, PNG</p>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm font-medium">Other Documents</p>
              <p className="text-xs text-muted-foreground">PDF, JPG, PNG</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
