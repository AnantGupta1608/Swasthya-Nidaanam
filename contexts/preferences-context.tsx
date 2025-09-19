"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Language =
  | "english"
  | "hindi"
  | "tamil"
  | "telugu"
  | "kannada"
  | "malayalam"
  | "bengali"
  | "gujarati"
  | "marathi"
  | "punjabi"

interface PreferencesContextType {
  darkMode: boolean
  language: Language
  setDarkMode: (darkMode: boolean) => void
  setLanguage: (language: Language) => void
  translations: Record<string, string>
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  english: {
    "Health Dashboard": "Health Dashboard",
    "Your Health Overview": "Your Health Overview",
    "Heart Rate": "Heart Rate",
    "Blood Pressure": "Blood Pressure",
    Temperature: "Temperature",
    Weight: "Weight",
    "Recent Records": "Recent Records",
    "Upcoming Appointments": "Upcoming Appointments",
    Home: "Home",
    "My Records": "My Records",
    "Add Record": "Add Record",
    Emergency: "Emergency",
    Settings: "Settings",
    Login: "Login",
    Logout: "Logout",
  },
  hindi: {
    "Health Dashboard": "स्वास्थ्य डैशबोर्ड",
    "Your Health Overview": "आपका स्वास्थ्य अवलोकन",
    "Heart Rate": "हृदय गति",
    "Blood Pressure": "रक्तचाप",
    Temperature: "तापमान",
    Weight: "वजन",
    "Recent Records": "हाल के रिकॉर्ड",
    "Upcoming Appointments": "आगामी अपॉइंटमेंट",
    Home: "होम",
    "My Records": "मेरे रिकॉर्ड",
    "Add Record": "रिकॉर्ड जोड़ें",
    Emergency: "आपातकाल",
    Settings: "सेटिंग्स",
    Login: "लॉगिन",
    Logout: "लॉगआउट",
  },
  tamil: {
    "Health Dashboard": "சுகாதார டாஷ்போர்டு",
    "Your Health Overview": "உங்கள் சுகாதார மேலோட்டம்",
    "Heart Rate": "இதய துடிப்பு",
    "Blood Pressure": "இரத்த அழுத்தம்",
    Temperature: "வெப்பநிலை",
    Weight: "எடை",
    "Recent Records": "சமீபத்திய பதிவுகள்",
    "Upcoming Appointments": "வரவிருக்கும் சந்திப்புகள்",
    Home: "முகப்பு",
    "My Records": "என் பதிவுகள்",
    "Add Record": "பதிவு சேர்க்க",
    Emergency: "அவசரநிலை",
    Settings: "அமைப்புகள்",
    Login: "உள்நுழைய",
    Logout: "வெளியேறு",
  },
  telugu: {
    "Health Dashboard": "ఆరోగ్య డాష్‌బోర్డ్",
    "Your Health Overview": "మీ ఆరోగ్య అవలోకనం",
    "Heart Rate": "హృదయ స్పందన",
    "Blood Pressure": "రక్తపోటు",
    Temperature: "ఉష్ణోగ్రత",
    Weight: "బరువు",
    "Recent Records": "ఇటీవలి రికార్డులు",
    "Upcoming Appointments": "రాబోయే అపాయింట్‌మెంట్లు",
    Home: "హోమ్",
    "My Records": "నా రికార్డులు",
    "Add Record": "రికార్డ్ జోడించు",
    Emergency: "అత్యవసరం",
    Settings: "సెట్టింగ్‌లు",
    Login: "లాగిన్",
    Logout: "లాగౌట్",
  },
  kannada: {
    "Health Dashboard": "ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    "Your Health Overview": "ನಿಮ್ಮ ಆರೋಗ್ಯ ಅವಲೋಕನ",
    "Heart Rate": "ಹೃದಯ ಬಡಿತ",
    "Blood Pressure": "ರಕ್ತದೊತ್ತಡ",
    Temperature: "ತಾಪಮಾನ",
    Weight: "ತೂಕ",
    "Recent Records": "ಇತ್ತೀಚಿನ ದಾಖಲೆಗಳು",
    "Upcoming Appointments": "ಮುಂಬರುವ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
    Home: "ಮುಖ್ಯಪುಟ",
    "My Records": "ನನ್ನ ದಾಖಲೆಗಳು",
    "Add Record": "ದಾಖಲೆ ಸೇರಿಸಿ",
    Emergency: "ತುರ್ತುಸ್ಥಿತಿ",
    Settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    Login: "ಲಾಗಿನ್",
    Logout: "ಲಾಗೌಟ್",
  },
  malayalam: {
    "Health Dashboard": "ആരോഗ്യ ഡാഷ്‌ബോർഡ്",
    "Your Health Overview": "നിങ്ങളുടെ ആരോഗ്യ അവലോകനം",
    "Heart Rate": "ഹൃദയമിടിപ്പ്",
    "Blood Pressure": "രക്തസമ്മർദ്ദം",
    Temperature: "താപനില",
    Weight: "ഭാരം",
    "Recent Records": "സമീപകാല രേഖകൾ",
    "Upcoming Appointments": "വരാനിരിക്കുന്ന അപ്പോയിന്റ്‌മെന്റുകൾ",
    Home: "ഹോം",
    "My Records": "എന്റെ രേഖകൾ",
    "Add Record": "രേഖ ചേർക്കുക",
    Emergency: "അടിയന്തിരാവസ്ഥ",
    Settings: "ക്രമീകരണങ്ങൾ",
    Login: "ലോഗിൻ",
    Logout: "ലോഗൗട്ട്",
  },
  bengali: {
    "Health Dashboard": "স্বাস্থ্য ড্যাশবোর্ড",
    "Your Health Overview": "আপনার স্বাস্থ্য সংক্ষিপ্ত বিবরণ",
    "Heart Rate": "হৃদস্পন্দন",
    "Blood Pressure": "রক্তচাপ",
    Temperature: "তাপমাত্রা",
    Weight: "ওজন",
    "Recent Records": "সাম্প্রতিক রেকর্ড",
    "Upcoming Appointments": "আসন্ন অ্যাপয়েন্টমেন্ট",
    Home: "হোম",
    "My Records": "আমার রেকর্ড",
    "Add Record": "রেকর্ড যোগ করুন",
    Emergency: "জরুরি",
    Settings: "সেটিংস",
    Login: "লগইন",
    Logout: "লগআউট",
  },
  gujarati: {
    "Health Dashboard": "આરોગ્ય ડેશબોર્ડ",
    "Your Health Overview": "તમારી આરોગ્ય ઝાંખી",
    "Heart Rate": "હૃદયના ધબકારા",
    "Blood Pressure": "બ્લડ પ્રેશર",
    Temperature: "તાપમાન",
    Weight: "વજન",
    "Recent Records": "તાજેતરના રેકોર્ડ્સ",
    "Upcoming Appointments": "આગામી એપોઇન્ટમેન્ટ્સ",
    Home: "હોમ",
    "My Records": "મારા રેકોર્ડ્સ",
    "Add Record": "રેકોર્ડ ઉમેરો",
    Emergency: "કટોકટી",
    Settings: "સેટિંગ્સ",
    Login: "લોગિન",
    Logout: "લોગઆઉટ",
  },
  marathi: {
    "Health Dashboard": "आरोग्य डॅशबोर्ड",
    "Your Health Overview": "तुमचे आरोग्य विहंगावलोकन",
    "Heart Rate": "हृदयाचा ठोका",
    "Blood Pressure": "रक्तदाब",
    Temperature: "तापमान",
    Weight: "वजन",
    "Recent Records": "अलीकडील रेकॉर्ड",
    "Upcoming Appointments": "येणाऱ्या भेटी",
    Home: "होम",
    "My Records": "माझे रेकॉर्ड",
    "Add Record": "रेकॉर्ड जोडा",
    Emergency: "आणीबाणी",
    Settings: "सेटिंग्ज",
    Login: "लॉगिन",
    Logout: "लॉगआउट",
  },
  punjabi: {
    "Health Dashboard": "ਸਿਹਤ ਡੈਸ਼ਬੋਰਡ",
    "Your Health Overview": "ਤੁਹਾਡੀ ਸਿਹਤ ਦੀ ਸਮੀਖਿਆ",
    "Heart Rate": "ਦਿਲ ਦੀ ਧੜਕ",
    "Blood Pressure": "ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ",
    Temperature: "ਤਾਪਮਾਨ",
    Weight: "ਭਾਰ",
    "Recent Records": "ਹਾਲੀਆ ਰਿਕਾਰਡ",
    "Upcoming Appointments": "ਆਉਣ ਵਾਲੀਆਂ ਮੁਲਾਕਾਤਾਂ",
    Home: "ਘਰ",
    "My Records": "ਮੇਰੇ ਰਿਕਾਰਡ",
    "Add Record": "ਰਿਕਾਰਡ ਸ਼ਾਮਲ ਕਰੋ",
    Emergency: "ਐਮਰਜੈਂਸੀ",
    Settings: "ਸੈਟਿੰਗਾਂ",
    Login: "ਲਾਗਇਨ",
    Logout: "ਲਾਗਆਉਟ",
  },
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkModeState] = useState(false)
  const [language, setLanguageState] = useState<Language>("english")

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    const savedLanguage = localStorage.getItem("language") as Language

    if (savedDarkMode !== null) {
      setDarkModeState(JSON.parse(savedDarkMode))
    }
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const setDarkMode = (value: boolean) => {
    setDarkModeState(value)
    localStorage.setItem("darkMode", JSON.stringify(value))
  }

  const setLanguage = (value: Language) => {
    setLanguageState(value)
    localStorage.setItem("language", value)
  }

  const currentTranslations = translations[language] || translations.english

  return (
    <PreferencesContext.Provider
      value={{
        darkMode,
        language,
        setDarkMode,
        setLanguage,
        translations: currentTranslations,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (context === undefined) {
    throw new Error("usePreferences must be used within a PreferencesProvider")
  }
  return context
}
