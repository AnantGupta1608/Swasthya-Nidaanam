"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useAuth } from "@/hooks/use-auth"
import { usePreferences } from "@/contexts/preferences-context"
import { User, Heart, Phone, Info, Mail, Shield, FileText, Clock, Moon, Globe, Settings } from "lucide-react"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { user } = useAuth()
  const { darkMode, language, setDarkMode, setLanguage } = usePreferences()

  const [personalInfo, setPersonalInfo] = useState({
    name: user?.displayName || "",
    age: "",
    aadhaar: "",
    address: "",
    phone: "",
  })

  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: "", phone: "", relation: "" },
    { name: "", phone: "", relation: "" },
  ])

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleEmergencyContactChange = (index: number, field: string, value: string) => {
    setEmergencyContacts((prev) => prev.map((contact, i) => (i === index ? { ...contact, [field]: value } : contact)))
  }

  const handleSavePersonalInfo = () => {
    console.log("[v0] Saving personal info:", personalInfo)
    // Here you would typically save to a database or API
    alert("Personal information saved successfully!")
  }

  const handleSavePreferences = () => {
    console.log("[v0] Preferences already saved automatically:", { darkMode, language })
    alert("Preferences saved successfully!")
  }

  const handleSaveFamilyHistory = () => {
    console.log("[v0] Saving family history")
    alert("Family history saved successfully!")
  }

  const handleSendMessage = () => {
    console.log("[v0] Sending message")
    alert("Message sent successfully! We'll get back to you soon.")
  }

  const handleAddCondition = () => {
    console.log("[v0] Adding medical condition")
    alert("Add medical condition functionality would open a form here")
  }

  const handleAddSurgery = () => {
    console.log("[v0] Adding surgery")
    alert("Add surgery functionality would open a form here")
  }

  const handleSaveEmergencyContacts = () => {
    console.log("[v0] Saving emergency contacts:", emergencyContacts)
    // Here you would typically save to a database or API
    alert("Emergency contacts saved successfully!")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Settings
          </DialogTitle>
          <DialogDescription>Manage your personal information and app preferences</DialogDescription>
        </DialogHeader>

        <Accordion type="single" collapsible className="w-full">
          {/* Personal Information */}
          <AccordionItem value="personal">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                About the Person
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={personalInfo.name}
                    onChange={(e) => handlePersonalInfoChange("name", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={personalInfo.age}
                    onChange={(e) => handlePersonalInfoChange("age", e.target.value)}
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar ID</Label>
                <Input
                  id="aadhaar"
                  value={personalInfo.aadhaar}
                  onChange={(e) => handlePersonalInfoChange("aadhaar", e.target.value)}
                  placeholder="XXXX-XXXX-XXXX"
                  maxLength={14}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={personalInfo.address}
                  onChange={(e) => handlePersonalInfoChange("address", e.target.value)}
                  placeholder="Enter your complete address"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <Button className="w-full" onClick={handleSavePersonalInfo}>
                Save Personal Information
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* App Preferences */}
          <AccordionItem value="preferences">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-primary" />
                App Preferences
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Moon className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">Dark Mode</h4>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                    className="data-[state=checked]:bg-emerald-600 data-[state=unchecked]:bg-gray-300"
                  />
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">Language</h4>
                      <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                    </div>
                  </div>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                      <SelectItem value="bengali">বাংলা (Bengali)</SelectItem>
                      <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                      <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
                      <SelectItem value="marathi">मराठी (Marathi)</SelectItem>
                      <SelectItem value="gujarati">ગુજરાતી (Gujarati)</SelectItem>
                      <SelectItem value="kannada">ಕನ್ನಡ (Kannada)</SelectItem>
                      <SelectItem value="malayalam">മലയാളം (Malayalam)</SelectItem>
                      <SelectItem value="punjabi">ਪੰਜਾਬੀ (Punjabi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* Health History */}
          <AccordionItem value="health">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                Health History
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Medical Conditions
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hypertension (2020)</li>
                    <li>• Type 2 Diabetes (2019)</li>
                    <li>• High Cholesterol (2021)</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent" onClick={handleAddCondition}>
                    Add Condition
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Surgeries
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Appendectomy (2018)</li>
                    <li>• Cataract Surgery (2022)</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent" onClick={handleAddSurgery}>
                    Add Surgery
                  </Button>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Family Medical History</h4>
                <Textarea placeholder="Enter family medical history (diabetes, heart disease, etc.)" rows={3} />
                <Button variant="outline" size="sm" className="mt-2 bg-transparent" onClick={handleSaveFamilyHistory}>
                  Save Family History
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Emergency Contacts */}
          <AccordionItem value="contacts">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                Personal Contacts (Emergency)
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <h4 className="font-semibold">Emergency Contact {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input
                        value={contact.name}
                        onChange={(e) => handleEmergencyContactChange(index, "name", e.target.value)}
                        placeholder="Contact name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input
                        value={contact.phone}
                        onChange={(e) => handleEmergencyContactChange(index, "phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Relation</Label>
                      <Input
                        value={contact.relation}
                        onChange={(e) => handleEmergencyContactChange(index, "relation", e.target.value)}
                        placeholder="Spouse, Parent, etc."
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full" onClick={handleSaveEmergencyContacts}>
                Save Emergency Contacts
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* About the App */}
          <AccordionItem value="about">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-500" />
                About the App
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Swasthya Nidaanam</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Your comprehensive healthcare records management system designed to keep your medical information
                  organized, secure, and easily accessible.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>End-to-end encryption for your data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Comprehensive health tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Easy document management</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Version 1.0.0</p>
                <p>© 2024 Swasthya Nidaanam. All rights reserved.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Contact Us */}
          <AccordionItem value="contact">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-500" />
                Contact Us
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Support
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">For technical support and general inquiries</p>
                  <p className="text-sm font-medium">support@swasthyanidaanam.com</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Support
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">Available Mon-Fri, 9 AM - 6 PM IST</p>
                  <p className="text-sm font-medium">+91 1800-XXX-XXXX</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Send us a message</h4>
                <div className="space-y-3">
                  <Input placeholder="Your email address" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your message" rows={4} />
                  <Button className="w-full" onClick={handleSendMessage}>
                    Send Message
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  )
}
