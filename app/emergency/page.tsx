import type React from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Phone, MapPin, Clock, Heart, User } from "lucide-react"

export default function EmergencyPage() {
  const emergencyContacts = [
    { name: "John Doe", relation: "Spouse", phone: "+91 98765 43210" },
    { name: "Jane Doe", relation: "Daughter", phone: "+91 87654 32109" },
  ]

  const medicalInfo = {
    bloodType: "O+",
    allergies: ["Penicillin", "Shellfish"],
    conditions: ["Hypertension", "Type 2 Diabetes"],
    medications: ["Metformin 500mg", "Lisinopril 10mg"],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            Emergency Information
          </h1>
          <p className="text-muted-foreground mt-1">Critical information for emergency situations</p>
        </div>

        <div className="grid gap-6">
          {/* Emergency Services */}
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Emergency Services
              </CardTitle>
              <CardDescription>Call immediately in case of emergency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-red-600 hover:bg-red-700 h-16 text-lg">
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 mb-1" />
                    <span>108 - Ambulance</span>
                  </div>
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 h-16 text-lg">
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 mb-1" />
                    <span>102 - Medical</span>
                  </div>
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 h-16 text-lg">
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 mb-1" />
                    <span>100 - Police</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Emergency Contacts
                </CardTitle>
                <CardDescription>People to contact in case of emergency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{contact.name}</h4>
                      <p className="text-sm text-muted-foreground">{contact.relation}</p>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  Add Emergency Contact
                </Button>
              </CardContent>
            </Card>

            {/* Medical Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Critical Medical Info
                </CardTitle>
                <CardDescription>Important medical information for first responders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Blood Type</Label>
                    <Badge variant="secondary" className="mt-1">
                      {medicalInfo.bloodType}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Emergency ID</Label>
                    <Badge variant="outline" className="mt-1">
                      MED-2024-001
                    </Badge>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Allergies</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {medicalInfo.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Medical Conditions</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {medicalInfo.conditions.map((condition, index) => (
                      <Badge key={index} variant="secondary">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Current Medications</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {medicalInfo.medications.map((medication, index) => (
                      <Badge key={index} variant="outline">
                        {medication}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nearby Hospitals
              </CardTitle>
              <CardDescription>Hospitals and clinics in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "City General Hospital", distance: "2.3 km", time: "8 mins" },
                  { name: "Emergency Care Center", distance: "1.8 km", time: "6 mins" },
                  { name: "Metro Medical Center", distance: "3.1 km", time: "12 mins" },
                ].map((hospital, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-semibold">{hospital.name}</h4>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {hospital.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {hospital.time}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                      Get Directions
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-sm font-medium ${className}`}>{children}</div>
}
