import { useState, type ReactNode } from "react";
import careMateLogo from "./imports/caremate-logo.jpeg";

type IconName =
  | "home"
  | "ticket"
  | "calendar"
  | "map"
  | "help"
  | "bell"
  | "clock"
  | "person"
  | "arrow"
  | "check"
  | "chevron"
  | "moon";

const icons: Record<IconName, ReactNode> = {
  home: <path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9 20v-6h6v6" />,
  ticket: (
    <path d="M4 6.5h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4v-4ZM9 9.5h6M9 15.5h6" />
  ),
  calendar: (
    <path d="M5 5.5h14v14H5zM8 3v5M16 3v5M5 9.5h14M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01" />
  ),
  map: (
    <path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6ZM9 4v14M15 6v14M12 8.5c-1.2 0-2 .8-2 1.9 0 1.5 2 3.6 2 3.6s2-2.1 2-3.6c0-1.1-.8-1.9-2-1.9Z" />
  ),
  help: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9.7 9a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1.1.9-1.1 1.8M12 16.5h.01" />
  ),
  bell: <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7ZM10 20h4" />,
  clock: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3.5 2" />
  ),
  person: (
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 21a7.5 7.5 0 0 1 15 0" />
  ),
  arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 6 6 6-6 6" />,
  moon: <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {icons[name]}
    </svg>
  );
}

function BrandLogo({ small = false }: { small?: boolean }) {
  return <span className={`brand-logo ${small ? "small" : ""}`}><img src={careMateLogo} alt="" /></span>;
}

const navItems: { icon: IconName; label: string }[] = [
  { icon: "home", label: "Home" },
  { icon: "ticket", label: "My queue" },
  { icon: "calendar", label: "Appointments" },
  { icon: "map", label: "Hospital map" },
];

const doctorsBySpecialty: Record<string, { name: string; initials: string; experience: string; next: string }[]> = {
  "General Practice": [
    { name: "Dr. Sarah Chen", initials: "SC", experience: "12 years", next: "Available today" },
    { name: "Dr. Aditya Rahman", initials: "AR", experience: "9 years", next: "Available tomorrow" },
  ],
  "Dental Care": [
    { name: "Dr. Bima Pratama", initials: "BP", experience: "10 years", next: "Available Oct 15" },
    { name: "Dr. Nadia Putri", initials: "NP", experience: "7 years", next: "Available Oct 17" },
  ],
  Cardiology: [
    { name: "Dr. Rafi Wibowo", initials: "RW", experience: "15 years", next: "Available Oct 16" },
    { name: "Dr. Melissa Tan", initials: "MT", experience: "11 years", next: "Available Oct 20" },
  ],
  Laboratory: [
    { name: "CareMate Lab Team", initials: "CL", experience: "Certified lab", next: "Available today" },
    { name: "Express Diagnostics", initials: "ED", experience: "Priority testing", next: "Available tomorrow" },
  ],
};

const hospitalsByLocation: Record<string, { name: string; distance: string; availability: string }[]> = {
  "Jakarta Selatan": [
    { name: "CareMate Medika Selatan", distance: "1.2 km", availability: "8 slots available" },
    { name: "CareMate Kemang Clinic", distance: "3.8 km", availability: "4 slots available" },
  ],
  "Jakarta Pusat": [
    { name: "CareMate Central Hospital", distance: "0.9 km", availability: "12 slots available" },
    { name: "CareMate Menteng Clinic", distance: "2.6 km", availability: "6 slots available" },
  ],
  "Jakarta Barat": [
    { name: "CareMate West Medical Center", distance: "1.7 km", availability: "5 slots available" },
    { name: "CareMate Puri Clinic", distance: "4.1 km", availability: "9 slots available" },
  ],
};

const hospitalMapData: Record<string, { starts: string[]; destinations: string[]; wing: string }> = {
  "CareMate Medika Selatan": {
    starts: ["Main Lobby", "Parking Area", "Emergency Entrance", "Pharmacy"],
    destinations: ["General Practice • Room 204", "Laboratory • Level 1", "Cardiology • Room 201", "Pharmacy • Level 1"],
    wing: "East Wing",
  },
  "CareMate Central Hospital": {
    starts: ["South Lobby", "Underground Parking", "Emergency Entrance", "Cafeteria"],
    destinations: ["Specialist Clinic • Room 304", "Imaging • Room 302", "Laboratory • Level 1", "Patient Services • Level 2"],
    wing: "Central Tower",
  },
  "CareMate West Medical Center": {
    starts: ["West Lobby", "Visitor Parking", "Transit Drop-off", "Rehabilitation"],
    destinations: ["Dental Care • Room 112", "General Practice • Room 205", "Radiology • Level 3", "Pharmacy • Ground Floor"],
    wing: "West Pavilion",
  },
};

const hospitalFloorPlans: Record<string, Record<string, { label: string; rooms: { code: string; name: string }[] }>> = {
  "CareMate Medika Selatan": {
    "Level 1": {
      label: "Admissions & Diagnostics",
      rooms: [
        { code: "L01", name: "Main Lobby" }, { code: "L02", name: "Registration" },
        { code: "L03", name: "Laboratory" }, { code: "L04", name: "Pharmacy" },
        { code: "L05", name: "Emergency" }, { code: "L06", name: "Imaging" },
      ],
    },
    "Level 2": {
      label: "Outpatient Clinics",
      rooms: [
        { code: "201", name: "Cardiology" }, { code: "202", name: "Consultation" },
        { code: "203", name: "Pediatrics" }, { code: "204", name: "General Practice" },
        { code: "205", name: "Treatment" }, { code: "206", name: "Nurse Station" },
      ],
    },
    "Level 3": {
      label: "Specialist & Imaging",
      rooms: [
        { code: "301", name: "Radiology" }, { code: "302", name: "Imaging" },
        { code: "303", name: "Neurology" }, { code: "304", name: "Specialist Clinic" },
        { code: "305", name: "Recovery" }, { code: "306", name: "Quiet Lounge" },
      ],
    },
  },
  "CareMate Central Hospital": {
    "Level 1": {
      label: "Public Services",
      rooms: [
        { code: "C01", name: "South Lobby" }, { code: "C02", name: "Patient Services" },
        { code: "C03", name: "Laboratory" }, { code: "C04", name: "Cafeteria" },
        { code: "C05", name: "Emergency" }, { code: "C06", name: "Pharmacy" },
      ],
    },
    "Level 2": {
      label: "Medical Clinics",
      rooms: [
        { code: "211", name: "Internal Medicine" }, { code: "212", name: "Patient Services" },
        { code: "213", name: "Endocrinology" }, { code: "214", name: "Consultation" },
        { code: "215", name: "Day Treatment" }, { code: "216", name: "Nurse Hub" },
      ],
    },
    "Level 3": {
      label: "Imaging & Specialists",
      rooms: [
        { code: "301", name: "MRI Suite" }, { code: "302", name: "Imaging" },
        { code: "303", name: "Ultrasound" }, { code: "304", name: "Specialist Clinic" },
        { code: "305", name: "Preparation" }, { code: "306", name: "Results Desk" },
      ],
    },
  },
  "CareMate West Medical Center": {
    "Level 1": {
      label: "Community Care",
      rooms: [
        { code: "W01", name: "West Lobby" }, { code: "W02", name: "Dental Care" },
        { code: "W03", name: "Rehabilitation" }, { code: "W04", name: "Pharmacy" },
        { code: "W05", name: "Minor Procedures" }, { code: "W06", name: "Reception" },
      ],
    },
    "Level 2": {
      label: "Primary Care",
      rooms: [
        { code: "201", name: "Family Medicine" }, { code: "202", name: "Consultation" },
        { code: "203", name: "Women’s Health" }, { code: "205", name: "General Practice" },
        { code: "206", name: "Vaccination" }, { code: "207", name: "Nurse Station" },
      ],
    },
    "Level 3": {
      label: "Diagnostics",
      rooms: [
        { code: "311", name: "Radiology" }, { code: "312", name: "CT Scan" },
        { code: "313", name: "Physiotherapy" }, { code: "314", name: "Specialist Clinic" },
        { code: "315", name: "Recovery" }, { code: "316", name: "Staff Station" },
      ],
    },
  },
};

export default function App() {
  const [activeView, setActiveView] = useState("Home");
  const [notifications, setNotifications] = useState(true);
  const [notice, setNotice] = useState("");
  const [mapFloor, setMapFloor] = useState("Level 2");
  const [appointmentTab, setAppointmentTab] = useState("Upcoming");
  const [mapSearch, setMapSearch] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("General Practice");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [directionStep, setDirectionStep] = useState(0);
  const [bookingMonth, setBookingMonth] = useState(9);
  const [bookingYear, setBookingYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedLocation, setSelectedLocation] = useState("Jakarta Selatan");
  const [selectedHospital, setSelectedHospital] = useState("CareMate Medika Selatan");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Sarah Chen");
  const [historyVisit, setHistoryVisit] = useState<"past" | "cancelled">("past");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [allergies, setAllergies] = useState("No known allergies");
  const [conditions, setConditions] = useState("Recurring headaches");
  const [medications, setMedications] = useState("");
  const [bloodType, setBloodType] = useState("O+");
  const [savedAllergies, setSavedAllergies] = useState("No known allergies");
  const [savedConditions, setSavedConditions] = useState("Recurring headaches");
  const [savedBloodType, setSavedBloodType] = useState("O+");
  const [medicalRecords, setMedicalRecords] = useState<
    { id: number; bloodType: string; allergies: string; conditions: string; medications: string; files: string[]; savedAt: string }[]
  >([]);
  const [filePreviews, setFilePreviews] = useState<Record<string, { url: string; type: string }>>({});
  const [previewFile, setPreviewFile] = useState<{ name: string; url: string; type: string } | null>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationsRead, setNotificationsRead] = useState(false);
  const [mapHospital, setMapHospital] = useState("CareMate Medika Selatan");
  const [mapStart, setMapStart] = useState("Main Lobby");
  const [mapDestination, setMapDestination] = useState("General Practice • Room 204");
  const [darkMode, setDarkMode] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("Wira Kurniawan");
  const [userEmail, setUserEmail] = useState("wira.k@example.com");
  const [userPhone, setUserPhone] = useState("+62 812 •••• 4831");
  const [userDateOfBirth, setUserDateOfBirth] = useState("1996-08-12");
  const [authName, setAuthName] = useState("Wira Kurniawan");
  const [authEmail, setAuthEmail] = useState("wira.k@example.com");
  const [authPhone, setAuthPhone] = useState("+62 812 0000 4831");
  const [authDateOfBirth, setAuthDateOfBirth] = useState("1996-08-12");
  const [patientId, setPatientId] = useState("2481");
  const [memberSince, setMemberSince] = useState("March 2024");
  const [emergencyContact, setEmergencyContact] = useState("Rani Kurniawan");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("+62 812 5555 0192");
  const [emergencyContactRelation, setEmergencyContactRelation] = useState("Sibling");
  const [bookedAppointments, setBookedAppointments] = useState<
    { id: number; specialty: string; doctor: string; date: string; day: number; month: string; year: number; time: string; hospital: string }[]
  >([]);
  const [cancelledAppointmentIds, setCancelledAppointmentIds] = useState<string[]>([]);
  const [rescheduledCancellations, setRescheduledCancellations] = useState<
    { id: string; specialty: string; doctor: string; dateLabel: string; time: string; hospital: string; replacementDate: string; replacementTime: string }[]
  >([]);
  const [selectedUpcomingId, setSelectedUpcomingId] = useState<string | null>(null);
  const [selectedCancellationId, setSelectedCancellationId] = useState<string | null>(null);
  const [selectedProfileDoctor, setSelectedProfileDoctor] = useState<{ name: string; specialty: string } | null>(null);
  const [contactTopic, setContactTopic] = useState("Today's appointment");
  const [rescheduleAppointmentId, setRescheduleAppointmentId] = useState("current-visit");
  const [rescheduleDate, setRescheduleDate] = useState("2026-10-20");
  const [rescheduleTime, setRescheduleTime] = useState("10:30 AM");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };

  const saveMedicalRecord = (files: string[] = []) => {
    if (!bloodType && !allergies.trim() && !conditions.trim() && !medications.trim() && files.length === 0) {
      showNotice("Add health information or a document before saving");
      return;
    }
    const record = {
      id: Date.now(),
      bloodType,
      allergies: allergies.trim(),
      conditions: conditions.trim(),
      medications: medications.trim(),
      files,
      savedAt: new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date()),
    };
    setMedicalRecords((records) => [record, ...records]);
    if (files.length > 0) {
      setUploadedFiles((currentFiles) => [...currentFiles, ...files]);
    }
    if (record.allergies) setSavedAllergies(record.allergies);
    if (record.conditions) setSavedConditions(record.conditions);
    if (record.bloodType) setSavedBloodType(record.bloodType);
    setBloodType("");
    setAllergies("");
    setConditions("");
    setMedications("");
    showNotice(files.length > 0 ? `${files.length} medical record${files.length > 1 ? "s" : ""} uploaded and saved` : "Medical history entry saved");
    setActiveView("Profile");
  };

  const downloadPdf = (title: string, lines: string[], filename: string) => {
    const escapePdfText = (value: string) =>
      value.replace(/[^\x20-\x7E]/g, "-").replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
    const contentLines = [
      "BT",
      "/F1 20 Tf",
      "60 770 Td",
      `(${escapePdfText(title)}) Tj`,
      "/F1 11 Tf",
      ...lines.flatMap((line, index) => [
        index === 0 ? "0 -38 Td" : "0 -22 Td",
        `(${escapePdfText(line)}) Tj`,
      ]),
      "ET",
    ];
    const stream = contentLines.join("\n");
    const objects = [
      "<< /Type /Catalog /Pages 2 0 R >>",
      "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    ];
    let pdf = "%PDF-1.4\n";
    const offsets = [0];
    objects.forEach((object, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });
    const xrefOffset = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => {
      pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
    });
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
    const url = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showNotice(`${filename} downloaded`);
  };

  const changeMonth = (offset: number) => {
    const next = new Date(bookingYear, bookingMonth + offset, 1);
    setBookingMonth(next.getMonth());
    setBookingYear(next.getFullYear());
    setSelectedDate(1);
  };

  const monthName = new Intl.DateTimeFormat("en", { month: "long" }).format(
    new Date(bookingYear, bookingMonth, 1),
  );
  const daysInMonth = new Date(bookingYear, bookingMonth + 1, 0).getDate();
  const firstDay = new Date(bookingYear, bookingMonth, 1).getDay();
  const upcomingAppointments = [
    {
      id: "current-visit",
      specialty: "General consultation",
      doctor: "Dr. Sarah Chen • General Practice",
      day: 6,
      month: "October",
      year: 2026,
      time: "10:30 AM",
      hospital: "Room 204",
      status: "checked",
      dateLabel: "Today",
    },
    ...bookedAppointments.map((appointment) => ({
      ...appointment,
      id: String(appointment.id),
      doctor: appointment.doctor,
      status: "new",
      dateLabel: String(appointment.year),
    })),
    {
      id: "dental-visit",
      specialty: "Dental check-up",
      doctor: "Dr. Bima Pratama • Dental Care",
      day: 18,
      month: "November",
      year: 2026,
      time: "2:00 PM",
      hospital: "Dental Wing",
      status: "scheduled",
      dateLabel: "Wednesday",
    },
  ].filter((appointment) => !cancelledAppointmentIds.includes(String(appointment.id))).sort((first, second) => {
    const firstDate = new Date(first.year, new Date(`${first.month} 1, 2000`).getMonth(), first.day).getTime();
    const secondDate = new Date(second.year, new Date(`${second.month} 1, 2000`).getMonth(), second.day).getTime();
    return firstDate - secondDate;
  });
  const selectedUpcomingAppointment = upcomingAppointments.find(
    (appointment) => String(appointment.id) === selectedUpcomingId,
  );
  const selectedCancellation = rescheduledCancellations.find(
    (appointment) => appointment.id === selectedCancellationId,
  );
  const userInitials = userName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
  const userFirstName = userName.trim().split(/\s+/)[0] || "there";
  const formattedDateOfBirth = userDateOfBirth
    ? new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(
        new Date(`${userDateOfBirth}T00:00:00`),
      )
    : "Not provided";

  const getLocationFloor = (location: string) => {
    const explicitLevel = location.match(/Level\s(\d)/i);
    if (explicitLevel) return Number(explicitLevel[1]);
    const room = location.match(/Room\s(\d)/i);
    if (room) return Number(room[1][0]);
    if (/304|302|radiology|imaging|specialist/i.test(location)) return 3;
    if (/204|205|201|cardiology|patient services/i.test(location)) return 2;
    return 1;
  };

  const startFloor = getLocationFloor(mapStart);
  const destinationFloor = getLocationFloor(mapDestination);
  const liftName = mapHospital === "CareMate Central Hospital" ? "Central Lifts" : mapHospital === "CareMate West Medical Center" ? "West Lifts" : "Lifts A";
  const startingInstruction = /parking/i.test(mapStart)
    ? `Leave ${mapStart} through the pedestrian entrance`
    : /emergency/i.test(mapStart)
      ? "Exit the emergency waiting area toward the main corridor"
      : /pharmacy|cafeteria|rehabilitation/i.test(mapStart)
        ? `Leave ${mapStart} and follow signs to the main corridor`
        : `Walk forward from ${mapStart} toward the information desk`;
  const routeSteps = [
    {
      title: startingInstruction,
      detail: `Follow the orange route markers inside ${mapHospital}.`,
      floor: startFloor,
      turn: "↑",
    },
    ...(startFloor !== destinationFloor
      ? [
          {
            title: `Continue to ${liftName}`,
            detail: `Stay on Level ${startFloor} and follow signs for ${liftName}. Do not take the stairs unless you prefer them.`,
            floor: startFloor,
            turn: "↗",
          },
          {
            title: `Take ${liftName} to Level ${destinationFloor}`,
            detail: `Select Level ${destinationFloor}. The lift has voice announcements and step-free access.`,
            floor: destinationFloor,
            turn: "↑",
          },
        ]
      : [
          {
            title: `Stay on Level ${startFloor}`,
            detail: `Continue along the main corridor toward ${hospitalMapData[mapHospital].wing}.`,
            floor: startFloor,
            turn: "→",
          },
        ]),
    {
      title: `Follow signs through ${hospitalMapData[mapHospital].wing}`,
      detail: `${mapDestination.split(" • ")[0]} is marked on the map. Continue past the nurse station and follow the room numbers.`,
      floor: destinationFloor,
      turn: "→",
    },
    {
      title: `Arrive at ${mapDestination.split(" • ")[0]}`,
      detail: "You have reached your destination. Check in at the desk if one is available.",
      floor: destinationFloor,
      turn: "✓",
    },
  ];
  const activeFloorPlan = hospitalFloorPlans[mapHospital][mapFloor];
  const displayedFloor = Number(mapFloor.slice(-1));
  const destinationTitle = mapDestination.split(" • ")[0].toLowerCase();
  const destinationRoomIndex = activeFloorPlan.rooms.findIndex((room) =>
    room.name.toLowerCase().includes(destinationTitle) || destinationTitle.includes(room.name.toLowerCase()),
  );
  const visibleDestinationIndex = destinationFloor === displayedFloor ? destinationRoomIndex : -2;
  const hospitalPlanIndex = Object.keys(hospitalMapData).indexOf(mapHospital);
  const floorLayoutPattern = hospitalPlanIndex * 3 + displayedFloor - 1;
  const roomRoutePoints = [
    [{ x: 72, y: 105 }, { x: 300, y: 145 }, { x: 510, y: 105 }, { x: 72, y: 250 }, { x: 445, y: 180 }, { x: 545, y: 180 }],
    [{ x: 120, y: 180 }, { x: 285, y: 110 }, { x: 410, y: 110 }, { x: 535, y: 110 }, { x: 285, y: 255 }, { x: 420, y: 255 }],
    [{ x: 85, y: 110 }, { x: 220, y: 110 }, { x: 495, y: 180 }, { x: 85, y: 260 }, { x: 240, y: 260 }, { x: 395, y: 260 }],
    [{ x: 500, y: 180 }, { x: 65, y: 105 }, { x: 185, y: 105 }, { x: 305, y: 105 }, { x: 85, y: 255 }, { x: 225, y: 255 }],
    [{ x: 90, y: 105 }, { x: 305, y: 145 }, { x: 540, y: 105 }, { x: 540, y: 255 }, { x: 70, y: 180 }, { x: 170, y: 180 }],
    [{ x: 75, y: 105 }, { x: 300, y: 125 }, { x: 520, y: 105 }, { x: 95, y: 260 }, { x: 300, y: 260 }, { x: 505, y: 260 }],
    [{ x: 500, y: 110 }, { x: 380, y: 110 }, { x: 120, y: 150 }, { x: 500, y: 260 }, { x: 360, y: 260 }, { x: 210, y: 260 }],
    [{ x: 85, y: 110 }, { x: 300, y: 155 }, { x: 515, y: 110 }, { x: 80, y: 260 }, { x: 300, y: 260 }, { x: 520, y: 260 }],
    [{ x: 70, y: 115 }, { x: 210, y: 115 }, { x: 500, y: 140 }, { x: 75, y: 260 }, { x: 250, y: 260 }, { x: 475, y: 260 }],
  ];
  const routePointFor = (roomIndex: number, fallback: "entrance" | "lift") => {
    if (roomIndex >= 0) {
      return roomRoutePoints[floorLayoutPattern][roomIndex];
    }
    return fallback === "entrance" ? { x: 300, y: 342 } : { x: 270, y: 180 };
  };
  const fixedPovPoints = [{ x: 328, y: 180 }, { x: 328, y: 180 }, { x: 328, y: 180 }];
  const visibleStartPoint = fixedPovPoints[hospitalPlanIndex];
  const visibleEndPoint = routePointFor(visibleDestinationIndex, destinationFloor === displayedFloor ? "entrance" : "lift");
  const planRoutePoints = `${visibleStartPoint.x},${visibleStartPoint.y} ${visibleStartPoint.x},180 ${visibleEndPoint.x},180 ${visibleEndPoint.x},${visibleEndPoint.y}`;
  const planStartClass = "pov-fixed";
  const planEndClass = visibleDestinationIndex >= 0 ? `pin-room-${visibleDestinationIndex + 1}` : "pin-lift";
  const planStartLabel = startFloor === displayedFloor ? mapStart : `${liftName} from Level ${startFloor}`;
  const planEndLabel = destinationFloor === displayedFloor ? mapDestination.split(" • ")[0] : `${liftName} to Level ${destinationFloor}`;

  if (!authenticated) {
    return (
      <div className={`auth-shell ${darkMode ? "dark" : ""}`}>
        <button
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="auth-theme-button"
          onClick={() => setDarkMode((enabled) => !enabled)}
        >
          <Icon name="moon" />
          <span>{darkMode ? "Light mode" : "Dark mode"}</span>
        </button>
        <section className="auth-card">
          <aside className="auth-story">
            <div className="brand auth-brand">
              <BrandLogo />
              <span>CareMate</span>
            </div>
            <div className="auth-story-copy">
              <p className="eyebrow">Healthcare, made calmer</p>
              <h1>Your hospital visit, all in one place.</h1>
              <p>Manage appointments, follow your live queue, navigate the hospital, and keep your health information ready.</p>
              <div className="auth-benefits">
                <div><span><Icon name="ticket" /></span><div><strong>Less waiting, more clarity</strong><small>See your queue position and receive timely alerts.</small></div></div>
                <div><span><Icon name="map" /></span><div><strong>Find your way confidently</strong><small>Get indoor directions from any hospital location.</small></div></div>
                <div><span><Icon name="check" /></span><div><strong>Your information stays private</strong><small>Health records are securely managed in one place.</small></div></div>
              </div>
            </div>
            <p className="auth-trust"><Icon name="check" size={14} /> Private and secure healthcare access</p>
          </aside>
          <main className="auth-form-panel">
            <div className="auth-mobile-brand">
              <BrandLogo small />
              CareMate
            </div>
            <div className="auth-form-heading">
              <p className="eyebrow">{authMode === "signin" ? "Welcome back" : "Create your account"}</p>
              <h2>{authMode === "signin" ? "Sign in to CareMate" : "Let’s get you started"}</h2>
              <p>{authMode === "signin" ? "Access your appointments and healthcare journey." : "Set up your secure patient account in a few steps."}</p>
            </div>
            <div className="auth-tabs">
              <button className={authMode === "signin" ? "active" : ""} onClick={() => setAuthMode("signin")}>Sign in</button>
              <button className={authMode === "signup" ? "active" : ""} onClick={() => setAuthMode("signup")}>Create account</button>
            </div>
            <form className="auth-form" onSubmit={(event) => {
              event.preventDefault();
              const normalizedEmail = authEmail.trim().toLowerCase();
              if (authMode === "signup") {
                setUserName(authName.trim() || "CareMate Patient");
                setUserPhone(authPhone.trim());
                setUserDateOfBirth(authDateOfBirth);
                setPatientId(String(Math.floor(1000 + Math.random() * 9000)));
                setMemberSince("Today");
                setEmergencyContact("Not provided");
                setEmergencyContactPhone("");
                setEmergencyContactRelation("");
                setSavedAllergies("");
                setSavedConditions("");
                setSavedBloodType("");
                setBloodType("");
                setAllergies("");
                setConditions("");
                setMedications("");
                setUploadedFiles([]);
                setMedicalRecords([]);
                setBookedAppointments([]);
                setCancelledAppointmentIds([]);
                setRescheduledCancellations([]);
                setPreviewFile(null);
                setFilePreviews((previews) => {
                  Object.values(previews).forEach((preview) => URL.revokeObjectURL(preview.url));
                  return {};
                });
              } else if (normalizedEmail !== userEmail.toLowerCase()) {
                const emailName = normalizedEmail
                  .split("@")[0]
                  .split(/[._-]+/)
                  .filter(Boolean)
                  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                  .join(" ");
                setUserName(emailName || "CareMate Patient");
              }
              setUserEmail(authEmail.trim());
              setAuthenticated(true);
            }}>
              {authMode === "signup" && (
                <label><span>Full name</span><div className="auth-input"><Icon name="person" size={18} /><input required value={authName} onChange={(event) => setAuthName(event.target.value)} placeholder="Your full name" /></div></label>
              )}
              <label><span>Email or patient ID</span><div className="auth-input"><Icon name="person" size={18} /><input required type="email" value={authEmail} onChange={(event) => setAuthEmail(event.target.value)} placeholder="name@example.com" /></div></label>
              {authMode === "signup" && (
                <>
                  <label><span>Mobile number</span><div className="auth-input"><Icon name="bell" size={18} /><input required type="tel" value={authPhone} onChange={(event) => setAuthPhone(event.target.value)} placeholder="+62 812 0000 0000" /></div></label>
                  <label><span>Date of birth</span><div className="auth-input"><Icon name="calendar" size={18} /><input required type="date" value={authDateOfBirth} onChange={(event) => setAuthDateOfBirth(event.target.value)} /></div></label>
                </>
              )}
              <label>
                <span>Password</span>
                <div className="auth-input"><Icon name="ticket" size={18} /><input required minLength={6} type={showPassword ? "text" : "password"} defaultValue="caremate123" placeholder="Enter your password" /><button type="button" onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? "Hide" : "Show"}</button></div>
              </label>
              {authMode === "signin" ? (
                <div className="auth-options"><label><input type="checkbox" defaultChecked /> Keep me signed in</label><button type="button" onClick={() => showNotice("Password reset link requested")}>Forgot password?</button></div>
              ) : (
                <label className="terms-check"><input required type="checkbox" /> <span>I agree to the Terms of Service and Privacy Policy.</span></label>
              )}
              <button className="primary-button auth-submit" type="submit">{authMode === "signin" ? "Sign in securely" : "Create my account"} <Icon name="arrow" size={17} /></button>
            </form>
            <div className="auth-help">Need help accessing your account? <button onClick={() => showNotice("Support request opened")}>Contact support</button></div>
          </main>
        </section>
        <div className={`toast ${notice ? "show" : ""}`} role="status"><Icon name="check" size={17} />{notice}</div>
      </div>
    );
  }

  return (
    <div className={`app-shell ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar">
        <div className="brand">
          <BrandLogo />
          <span>CareMate</span>
        </div>

        <nav className="side-nav" aria-label="Primary navigation">
          <p className="eyebrow nav-label">Workspace</p>
          {navItems.map((item) => (
            <button
              className={`nav-item ${activeView === item.label ? "active" : ""}`}
              key={item.label}
              onClick={() => setActiveView(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.label === "My queue" && <span className="nav-badge">1</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className={`nav-item ${activeView === "Contact reception" ? "active" : ""}`} onClick={() => setActiveView("Contact reception")}>
            <Icon name="help" />
            <span>Help center</span>
          </button>
          <button className="user-card" onClick={() => setActiveView("Profile")}>
            <div className="avatar">{userInitials}</div>
            <div>
              <strong>{userName}</strong>
              <span>Patient ID •••• {patientId}</span>
            </div>
            <Icon name="chevron" size={17} />
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="mobile-brand">
            <BrandLogo small />
            CareMate
          </div>
          <div className="topbar-actions">
            <button
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={darkMode}
              className="icon-button theme-button"
              onClick={() => setDarkMode((enabled) => !enabled)}
              title={darkMode ? "Use light mode" : "Use dark mode"}
            >
              <Icon name="moon" />
            </button>
            <button
              aria-label="Notifications"
              aria-expanded={notificationsOpen}
              className={`icon-button ${notificationsOpen ? "selected" : ""}`}
              onClick={() => setNotificationsOpen((open) => !open)}
            >
              <Icon name="bell" />
              {!notificationsRead && <i />}
            </button>
            <button className="top-avatar" onClick={() => setActiveView("Profile")}>
              {userInitials}
            </button>
          </div>
          {notificationsOpen && (
            <>
            <button aria-label="Close notifications" className="notification-scrim" onClick={() => setNotificationsOpen(false)} />
            <aside className="notification-panel">
              <div className="notification-head"><div><strong>Notifications</strong><span>Today</span></div><button onClick={() => setNotificationsRead(true)}>Mark all as read</button></div>
              <button className={`notification-item ${notificationsRead ? "" : "unread"}`} onClick={() => { setNotificationsRead(true); setActiveView("My queue"); setNotificationsOpen(false); }}>
                <span className="notification-symbol"><Icon name="ticket" size={18} /></span>
                <span><strong>You&apos;re 3rd in line</strong><small>Estimated wait: 12–18 minutes</small><em>Just now</em></span>
              </button>
              <button className="notification-item" onClick={() => { setActiveView("Appointment detail"); setNotificationsOpen(false); }}>
                <span className="notification-symbol"><Icon name="calendar" size={18} /></span>
                <span><strong>Appointment checked in</strong><small>Dr. Sarah Chen • Room 204</small><em>8 minutes ago</em></span>
              </button>
              <button className="notification-item" onClick={() => { setActiveView("Medical history"); setNotificationsOpen(false); }}>
                <span className="notification-symbol"><Icon name="check" size={18} /></span>
                <span><strong>Health profile ready</strong><small>Review your information before the visit</small><em>Yesterday</em></span>
              </button>
              <button className="notification-footer" onClick={() => { setNotificationsOpen(false); showNotice("Notification preferences opened"); }}>Notification preferences</button>
            </aside>
            </>
          )}
        </header>

        <section className="content-wrap">
          {activeView === "Home" && (
            <>
          <div className="welcome-row">
            <div>
              <p className="eyebrow date-label">Tuesday, October 6</p>
              <h1>Good morning, {userFirstName}</h1>
              <p className="subhead">Here&apos;s everything you need for today&apos;s visit.</p>
            </div>
            <button className="outline-button" onClick={() => setActiveView("Hospital map")}>
              <Icon name="map" size={18} />
              View hospital map
            </button>
          </div>

          <section className="queue-card">
            <div className="queue-intro">
              <div>
                <div className="status-pill">
                  <span />
                  Queue is moving
                </div>
                <p className="eyebrow queue-label">General practice • Room 204</p>
                <h2>You&apos;re 3rd in line</h2>
                <p className="queue-copy">
                  Stay comfortable — we&apos;ll let you know when it&apos;s almost your turn.
                </p>
              </div>
              <div className="ticket-number">
                <span>Your ticket</span>
                <strong>A-024</strong>
              </div>
            </div>

            <div className="queue-progress" aria-label="Queue progress">
              <div className="home-queue-flow">
                <div className="home-flow-step complete">
                  <span><Icon name="check" size={14} /></span>
                  <div><strong>Checked in</strong><small>Your arrival is confirmed</small></div>
                </div>
                <div className="home-flow-line complete" />
                <div className="home-flow-step current">
                  <span>2</span>
                  <div><strong>Waiting now</strong><small>3 patients are ahead</small></div>
                </div>
                <div className="home-flow-line" />
                <div className="home-flow-step">
                  <span>3</span>
                  <div><strong>You&apos;re next</strong><small>We&apos;ll send an alert</small></div>
                </div>
                <div className="home-flow-line" />
                <div className="home-flow-step">
                  <span>4</span>
                  <div><strong>Your turn</strong><small>Go to Room 204</small></div>
                </div>
              </div>
            </div>

            <div className="queue-footer">
              <div className="estimate">
                <div className="estimate-icon">
                  <Icon name="clock" size={22} />
                </div>
                <div>
                  <span>Estimated wait</span>
                  <strong>12–18 minutes</strong>
                </div>
              </div>
              <div className="notify-control">
                <div>
                  <strong>Notify me when I&apos;m next</strong>
                  <span>We&apos;ll send a gentle alert</span>
                </div>
                <button
                  aria-label="Toggle next-in-line notifications"
                  aria-pressed={notifications}
                  className={`toggle ${notifications ? "on" : ""}`}
                  onClick={() => {
                    setNotifications((value) => !value);
                    showNotice(notifications ? "Queue alerts paused" : "Queue alerts enabled");
                  }}
                >
                  <span />
                </button>
              </div>
            </div>
          </section>

          <div className="section-heading">
            <div>
              <h2>Today&apos;s visit</h2>
              <p>All the details in one place.</p>
            </div>
          </div>

          <div className="details-grid">
            <article className="appointment-card">
              <div className="appointment-top">
                <div className="calendar-tile">
                  <span>OCT</span>
                  <strong>06</strong>
                </div>
                <div className="appointment-title">
                  <span className="confirmed">
                    <Icon name="check" size={13} />
                    Checked in
                  </span>
                  <h3>General consultation</h3>
                  <p>Dr. Sarah Chen</p>
                </div>
              </div>
              <div className="appointment-meta">
                <div>
                  <Icon name="clock" size={18} />
                  <span>
                    Scheduled time
                    <strong>10:30 AM</strong>
                  </span>
                </div>
                <div>
                  <Icon name="map" size={18} />
                  <span>
                    Location
                    <strong>East Wing, Level 2</strong>
                  </span>
                </div>
              </div>
              <button className="text-button" onClick={() => setActiveView("Appointment detail")}>
                View appointment details
                <Icon name="arrow" size={18} />
              </button>
            </article>

            <aside className="prep-card">
              <div className="prep-icon">
                <Icon name="check" size={22} />
              </div>
              <div>
                <p className="eyebrow">Before your visit</p>
                <h3>You&apos;re all set</h3>
                <p>Your forms are complete and your insurance is verified.</p>
              </div>
              <button className="text-button light" onClick={() => showNotice("Preparation checklist opened")}>
                Review checklist
                <Icon name="arrow" size={18} />
              </button>
            </aside>
          </div>
            </>
          )}

          {activeView === "My queue" && (
            <div className="page-view">
              <div className="page-heading">
                <button className="back-button" onClick={() => setActiveView("Home")}>
                  <span>←</span> Back to home
                </button>
                <div className="heading-line">
                  <div>
                    <p className="eyebrow date-label">Live updates</p>
                    <h1>My queue</h1>
                    <p className="subhead">Know exactly when to be ready without waiting by the door.</p>
                  </div>
                  <div className="live-chip"><span /> Updating live</div>
                </div>
              </div>

              <section className="queue-detail-card">
                <div className="queue-ticket-panel">
                  <p className="eyebrow">Your ticket</p>
                  <strong>A-024</strong>
                  <span>General practice</span>
                  <div className="qr-placeholder">
                    <i /><i /><i /><i /><i /><i /><i /><i /><i />
                  </div>
                  <small>Scan at the reception desk</small>
                </div>
                <div className="queue-status-panel">
                  <div className="queue-status-top">
                    <div>
                      <span className="confirmed"><Icon name="check" size={13} /> You&apos;re checked in</span>
                      <h2>3 people ahead of you</h2>
                      <p>The queue is moving normally. We&apos;ll alert you when one person remains.</p>
                    </div>
                    <div className="wait-bubble">
                      <Icon name="clock" size={20} />
                      <span>Estimated wait</span>
                      <strong>12–18 min</strong>
                    </div>
                  </div>
                  <div className="queue-journey">
                    <div className="journey-step complete"><span><Icon name="check" size={14} /></span><div><strong>Checked in</strong><small>10:12 AM</small></div></div>
                    <div className="journey-step complete"><span><Icon name="check" size={14} /></span><div><strong>Details verified</strong><small>Reception complete</small></div></div>
                    <div className="journey-step active"><span>3</span><div><strong>Waiting now</strong><small>3 patients ahead</small></div><em>Current step</em></div>
                    <div className="journey-step"><span>4</span><div><strong>You&apos;re next</strong><small>We&apos;ll alert you</small></div></div>
                    <div className="journey-step"><span>5</span><div><strong>See the doctor</strong><small>Room 204</small></div></div>
                  </div>
                  <div className="queue-room">
                    <div className="room-icon"><Icon name="map" /></div>
                    <div><span>Where to go</span><strong>Room 204, East Wing, Level 2</strong></div>
                    <button onClick={() => setActiveView("Hospital map")}>Get directions <Icon name="arrow" size={17} /></button>
                  </div>
                </div>
              </section>

              <div className="info-grid">
                <article className="info-card">
                  <div className="info-icon"><Icon name="bell" /></div>
                  <div><h3>Queue alerts <span className={`alert-state ${notifications ? "enabled" : ""}`}>{notifications ? "On" : "Off"}</span></h3><p>{notifications ? "Alerts are active. We'll notify you when you're next." : "Alerts are paused. Turn them on so you don't miss your turn."}</p></div>
                  <button
                    aria-label={`${notifications ? "Disable" : "Enable"} queue alerts`}
                    aria-pressed={notifications}
                    className={`toggle ${notifications ? "on" : ""}`}
                    onClick={() => setNotifications((enabled) => {
                      showNotice(enabled ? "Queue alerts turned off" : "Queue alerts turned on");
                      return !enabled;
                    })}
                  ><span /></button>
                </article>
                <article className="info-card">
                  <div className="info-icon"><Icon name="help" /></div>
                  <div><h3>Need more time?</h3><p>Let reception know if you may miss your call.</p></div>
                  <button className="text-button" onClick={() => setActiveView("Contact reception")}>Contact reception</button>
                </article>
              </div>
            </div>
          )}

          {activeView === "Appointments" && (
            <div className="page-view">
              <div className="page-heading heading-line">
                <div>
                  <p className="eyebrow date-label">Your care schedule</p>
                  <h1>Appointments</h1>
                  <p className="subhead">View and manage your upcoming visits.</p>
                </div>
                <button className="primary-button" onClick={() => setActiveView("Book appointment")}>+ Book appointment</button>
              </div>
              <div className="tab-row">
                {["Upcoming", "Past", "Cancelled"].map((tab, index) => (
                  <button className={appointmentTab === tab ? "selected" : ""} onClick={() => setAppointmentTab(tab)} key={tab}>
                    {tab} <span>{[upcomingAppointments.length, 3, 1 + rescheduledCancellations.length][index]}</span>
                  </button>
                ))}
              </div>
              <section className="appointment-list">
                {appointmentTab === "Upcoming" && (
                  <>
                    {upcomingAppointments.map((appointment) => (
                      <article className={`visit-row ${appointment.status === "checked" ? "featured" : ""} ${appointment.status === "new" ? "newly-booked" : ""}`} key={appointment.id}>
                        <div className={`visit-date ${appointment.status === "scheduled" ? "muted" : ""}`}><span>{appointment.month.slice(0, 3).toUpperCase()}</span><strong>{String(appointment.day).padStart(2, "0")}</strong><small>{appointment.dateLabel}</small></div>
                        <div className="visit-main">
                          {appointment.status === "checked" && <span className="confirmed"><Icon name="check" size={13} /> Checked in</span>}
                          {appointment.status === "new" && <span className="new-booking-label"><Icon name="check" size={13} /> Newly booked</span>}
                          {appointment.status === "scheduled" && <span className="scheduled">Scheduled</span>}
                          <h2>{appointment.specialty}</h2>
                          <p>{appointment.doctor}</p>
                          <div className="visit-tags"><span><Icon name="clock" size={16} /> {appointment.time}</span><span><Icon name="map" size={16} /> {appointment.hospital}</span></div>
                        </div>
                        <div className="visit-actions">
                          <button className={appointment.status === "checked" ? "primary-button compact" : "outline-button"} onClick={() => {
                            if (appointment.status === "checked") {
                              setActiveView("Appointment detail");
                            } else {
                              setSelectedUpcomingId(String(appointment.id));
                              setActiveView("New appointment detail");
                            }
                          }}>View details</button>
                          <button className="more-button" onClick={() => showNotice("Appointment options opened")}>•••</button>
                        </div>
                      </article>
                    ))}
                  </>
                )}
                {appointmentTab === "Past" && (
                  <>
                    <article className="visit-row history">
                      <div className="visit-date muted"><span>AUG</span><strong>12</strong><small>2026</small></div>
                      <div className="visit-main">
                        <span className="completed-label"><Icon name="check" size={13} /> Completed</span>
                        <h2>Annual health screening</h2>
                        <p>Dr. Sarah Chen • General Practice</p>
                        <div className="visit-tags"><span><Icon name="clock" size={16} /> 9:00 AM</span><span><Icon name="map" size={16} /> Room 204</span></div>
                      </div>
                      <div className="visit-actions"><button className="outline-button" onClick={() => { setHistoryVisit("past"); setActiveView("History detail"); }}>View summary</button><button className="download-button" onClick={() => downloadPdf("Annual Health Screening Summary", [`Patient: ${userName}`, "Date: August 12, 2026", "Provider: Dr. Sarah Chen", "Blood pressure: 118/76 mmHg - Normal", "Resting heart rate: 72 bpm - Normal", "Recommendation: Continue healthy habits and return in 12 months."], "annual-health-summary.pdf")}>Download PDF</button></div>
                    </article>
                    <article className="visit-row history">
                      <div className="visit-date muted"><span>MAY</span><strong>21</strong><small>2026</small></div>
                      <div className="visit-main">
                        <span className="completed-label"><Icon name="check" size={13} /> Completed</span>
                        <h2>Laboratory blood test</h2>
                        <p>CareMate Laboratory • West Wing</p>
                        <div className="visit-tags"><span><Icon name="clock" size={16} /> 8:15 AM</span><span><Icon name="map" size={16} /> Laboratory 1</span></div>
                      </div>
                      <div className="visit-actions"><button className="outline-button" onClick={() => { setHistoryVisit("past"); setActiveView("History detail"); }}>View results</button><button className="download-button" onClick={() => downloadPdf("Laboratory Blood Test Report", [`Patient: ${userName}`, "Date: May 21, 2026", "Facility: CareMate Laboratory", "Hemoglobin: 14.2 g/dL - Normal", "White blood cells: 6.8 x10^9/L - Normal", "Platelets: 245 x10^9/L - Normal", "Reviewed by: CareMate Laboratory Team"], "laboratory-report.pdf")}>Download PDF</button></div>
                    </article>
                    <article className="visit-row history">
                      <div className="visit-date muted"><span>FEB</span><strong>03</strong><small>2026</small></div>
                      <div className="visit-main">
                        <span className="completed-label"><Icon name="check" size={13} /> Completed</span>
                        <h2>Dental check-up</h2>
                        <p>Dr. Bima Pratama • Dental Care</p>
                        <div className="visit-tags"><span><Icon name="clock" size={16} /> 1:30 PM</span><span><Icon name="map" size={16} /> Dental Wing</span></div>
                      </div>
                      <div className="visit-actions"><button className="outline-button" onClick={() => setActiveView("Book appointment")}>Book again</button></div>
                    </article>
                  </>
                )}
                {appointmentTab === "Cancelled" && (
                  <>
                  {rescheduledCancellations.map((appointment) => (
                    <article className="visit-row cancelled-row" key={appointment.id}>
                      <div className="visit-date cancelled-date"><span>OLD</span><strong>×</strong><small>Rescheduled</small></div>
                      <div className="visit-main">
                        <span className="cancelled-label">Previous time cancelled</span>
                        <h2>{appointment.specialty}</h2>
                        <p>{appointment.doctor}</p>
                        <div className="visit-tags"><span><Icon name="clock" size={16} /> {appointment.dateLabel} • {appointment.time}</span><span><Icon name="map" size={16} /> {appointment.hospital}</span></div>
                      </div>
                      <div className="visit-actions"><button className="outline-button" onClick={() => { setSelectedCancellationId(appointment.id); setActiveView("Cancellation detail"); }}>Cancellation details</button></div>
                    </article>
                  ))}
                  <article className="visit-row cancelled-row">
                    <div className="visit-date cancelled-date"><span>SEP</span><strong>14</strong><small>2026</small></div>
                    <div className="visit-main">
                      <span className="cancelled-label">Cancelled Sep 12</span>
                      <h2>Physiotherapy consultation</h2>
                      <p>Dr. Maya Putri • Rehabilitation</p>
                      <div className="visit-tags"><span><Icon name="clock" size={16} /> 3:00 PM</span><span><Icon name="map" size={16} /> Rehab Center</span></div>
                    </div>
                    <div className="visit-actions"><button className="outline-button" onClick={() => { setHistoryVisit("cancelled"); setActiveView("History detail"); }}>Details</button><button className="primary-button compact" onClick={() => setActiveView("Book appointment")}>Reschedule</button></div>
                  </article>
                  </>
                )}
              </section>
              <div className="care-note"><Icon name="calendar" /><div><strong>Planning ahead?</strong><span>Appointments can be rescheduled up to 24 hours before your visit.</span></div></div>
            </div>
          )}

          {activeView === "Hospital map" && (
            <div className="page-view">
              <div className="page-heading heading-line">
                <div>
                  <p className="eyebrow date-label">Find your way</p>
                  <h1>Hospital map</h1>
                  <p className="subhead">Simple directions from where you are to where you need to be.</p>
                </div>
                <div className="location-pill"><span /> You are near Main Lobby</div>
              </div>
              <section className="map-route-planner">
                <label className="hospital-select">
                  <span>Hospital</span>
                  <select value={mapHospital} onChange={(event) => {
                    const hospital = event.target.value;
                    setMapHospital(hospital);
                    setMapStart(hospitalMapData[hospital].starts[0]);
                    setMapDestination(hospitalMapData[hospital].destinations[0]);
                    setMapFloor("Level 1");
                  }}>
                    {Object.keys(hospitalMapData).map((hospital) => <option key={hospital}>{hospital}</option>)}
                  </select>
                </label>
                <div className="route-field">
                  <span className="route-marker start" />
                  <label><span>Starting point</span><select value={mapStart} onChange={(event) => setMapStart(event.target.value)}>{[...hospitalMapData[mapHospital].starts, ...hospitalMapData[mapHospital].destinations].map((point) => <option key={point}>{point}</option>)}</select></label>
                </div>
                <button className="swap-route" aria-label="Swap starting point and destination" onClick={() => {
                  const previousStart = mapStart;
                  setMapStart(mapDestination);
                  setMapDestination(previousStart);
                  setMapFloor(previousStart.includes("3") ? "Level 3" : previousStart.includes("2") || previousStart.includes("Room 2") ? "Level 2" : "Level 1");
                  showNotice("Starting point and destination switched");
                }}>⇄</button>
                <div className="route-field">
                  <span className="route-marker end" />
                  <label><span>Destination</span><select value={mapDestination} onChange={(event) => {
                    const destination = event.target.value;
                    setMapDestination(destination);
                    setMapFloor(destination.includes("3") ? "Level 3" : destination.includes("2") || destination.includes("Room 2") ? "Level 2" : "Level 1");
                  }}>{[...hospitalMapData[mapHospital].starts, ...hospitalMapData[mapHospital].destinations].map((point) => <option key={point}>{point}</option>)}</select></label>
                </div>
                <button className="primary-button" onClick={() => { setDirectionStep(0); setActiveView("Directions"); }}>Show route <Icon name="arrow" size={16} /></button>
              </section>
              <div className="map-layout">
                <aside className="map-sidebar">
                  <label className="search-box">
                    <span>⌕</span>
                    <input
                      aria-label="Search room or hospital service"
                      onChange={(event) => setMapSearch(event.target.value)}
                      placeholder="Search room or service"
                      value={mapSearch}
                    />
                    {mapSearch && <button aria-label="Clear search" onClick={() => setMapSearch("")}>×</button>}
                  </label>
                  <p className="eyebrow">Quick destinations</p>
                  {hospitalMapData[mapHospital].destinations.filter((destination) => destination.toLowerCase().includes(mapSearch.toLowerCase())).map((destination, index) => {
                    const [title, meta] = destination.split(" • ");
                    return <button className={mapDestination === destination ? "destination active" : "destination"} key={destination} onClick={() => {
                      setMapDestination(destination);
                      setMapFloor(destination.includes("3") ? "Level 3" : destination.includes("2") || destination.includes("Room 2") ? "Level 2" : "Level 1");
                    }}>
                      <span className="destination-icon"><Icon name={index === 0 ? "person" : "map"} size={18} /></span>
                      <span><strong>{title}</strong><small>{meta}</small></span>
                      <Icon name="chevron" size={16} />
                    </button>;
                  })}
                </aside>
                <section className="map-canvas">
                  <div className="floor-tabs">
                    {["Level 1", "Level 2", "Level 3"].map((floor) => <button className={mapFloor === floor ? "active" : ""} onClick={() => setMapFloor(floor)} key={floor}>{floor}</button>)}
                  </div>
                  <div className={`real-floor-plan hospital-plan-${Object.keys(hospitalMapData).indexOf(mapHospital) + 1} plan-level-${mapFloor.slice(-1)}`}>
                    <div className="plan-heading"><div><strong>{mapHospital}</strong><span>{hospitalFloorPlans[mapHospital][mapFloor].label}</span></div><span>{mapFloor} • {hospitalMapData[mapHospital].wing}</span></div>
                    <div className="plan-building">
                      <div className="plan-corridor main"><span>Main corridor</span></div>
                      <div className="plan-corridor cross" />
                      {hospitalFloorPlans[mapHospital][mapFloor].rooms.map((room, index) => (
                        <div className={`plan-room plan-room-${index + 1}`} key={`${room.code}-${room.name}`}>
                          <span className="room-code">{room.code}</span>
                          <strong>{room.name}</strong>
                          <i className="room-door" />
                        </div>
                      ))}
                      <div className="plan-facility plan-lifts"><span>⇅</span><strong>Lifts</strong></div>
                      <div className="plan-facility plan-stairs"><span>↗</span><strong>Stairs</strong></div>
                      <div className="plan-facility plan-restroom"><span>WC</span><strong>Restroom</strong></div>
                      <div className="plan-waiting"><i /><i /><i /><span>Waiting</span></div>
                      <div className="plan-fire-exit exit-left">Exit</div>
                      <div className="plan-fire-exit exit-right">Exit</div>
                      <div className="plan-entrance"><span>Entrance</span><i /></div>
                      <svg className="plan-route" viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true">
                        <polyline points={planRoutePoints} />
                      </svg>
                      <div className={`plan-start-pin ${planStartClass}`}><span><Icon name="person" size={15} /></span><small>{planStartLabel}</small></div>
                      <div className={`plan-end-pin ${planEndClass}`}><span><Icon name="map" size={15} /></span><small>{planEndLabel}</small></div>
                      <div className="floor-compass">N ↑</div>
                    </div>
                    <div className="plan-legend"><span><i className="legend-start" />Your starting point</span><span><i className="legend-end" />Destination</span><span><i className="legend-route" />Accessible route</span></div>
                  </div>
                  <div className="direction-bar">
                    <div className="direction-number">{mapFloor.slice(-1)}</div>
                    <div><span>About 3–6 minutes from {mapStart}</span><strong>Route to {mapDestination} at {mapHospital}</strong></div>
                    <button onClick={() => { setDirectionStep(0); setActiveView("Directions"); }}>Start directions <Icon name="arrow" size={17} /></button>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeView === "Profile" && (
            <div className="page-view">
              <div className="page-heading">
                <p className="eyebrow date-label">Account & preferences</p>
                <h1>Profile</h1>
                <p className="subhead">Keep your personal and care information up to date.</p>
              </div>
              <section className="profile-hero">
                <div className="profile-avatar">{userInitials}</div>
                <div><h2>{userName}</h2><p>Patient since {memberSince}</p><span>Patient ID •••• {patientId}</span></div>
                <div className="profile-actions">
                  <button className="outline-button" onClick={() => setActiveView("Edit profile")}>Edit profile</button>
                  <button className="signout-button" onClick={() => { setAuthenticated(false); setActiveView("Home"); }}>Sign out</button>
                </div>
              </section>
              <div className="profile-grid">
                <article className="profile-card">
                  <div className="card-heading"><div><p className="eyebrow">Personal information</p><h3>Your details</h3></div><button aria-label="Edit personal information" title="Edit personal information" onClick={() => setActiveView("Edit profile")}><Icon name="person" /></button></div>
                  <dl>
                    <div><dt>Full name</dt><dd>{userName}</dd></div>
                    <div><dt>Date of birth</dt><dd>{formattedDateOfBirth}</dd></div>
                    <div><dt>Phone</dt><dd>{userPhone}</dd></div>
                    <div><dt>Email</dt><dd>{userEmail}</dd></div>
                  </dl>
                </article>
                <article className="profile-card">
                  <div className="card-heading"><div><p className="eyebrow">Care information</p><h3>Health essentials</h3></div><button aria-label="Manage health essentials" title="Manage health essentials" onClick={() => setActiveView("Medical history")}><Icon name="help" /></button></div>
                  <dl>
                    <div><dt>Blood type</dt><dd>{savedBloodType || "Not provided"}</dd></div>
                    <div><dt>Allergies</dt><dd>{savedAllergies || "Not provided"}</dd></div>
                    <div><dt>Conditions</dt><dd>{savedConditions || "Not provided"}</dd></div>
                    <div>
                      <dt>Emergency contact</dt>
                      <dd className="emergency-contact-value">
                        <span>{emergencyContact}</span>
                        {emergencyContact !== "Not provided" && <small>{emergencyContactRelation}{emergencyContactRelation && emergencyContactPhone ? " • " : ""}{emergencyContactPhone}</small>}
                        <button onClick={() => setActiveView("Edit profile")}>{emergencyContact === "Not provided" ? "Add contact" : "Edit"}</button>
                      </dd>
                    </div>
                    <div><dt>Documents</dt><dd>{uploadedFiles.length} uploaded</dd></div>
                  </dl>
                </article>
              </div>
              <article className="settings-card">
                <div><span className="info-icon"><Icon name="bell" /></span><div><h3>Visit notifications</h3><p>Queue updates, appointment reminders, and preparation tips.</p></div></div>
                <button className={`toggle ${notifications ? "on" : ""}`} onClick={() => setNotifications(!notifications)}><span /></button>
              </article>
              <article className="settings-card medical-record-entry">
                <div><span className="info-icon"><Icon name="ticket" /></span><div><h3>Medical history & documents</h3><p>Keep allergies, conditions, and previous medical records ready for your care team.</p></div></div>
                <button className="primary-button compact" onClick={() => setActiveView("Medical history")}>Manage records <Icon name="arrow" size={16} /></button>
              </article>
              {medicalRecords.length > 0 && (
                <section className="saved-records-card">
                  <div className="saved-records-head"><div><p className="eyebrow">Medical history</p><h3>Saved records</h3></div><span>{medicalRecords.length} {medicalRecords.length === 1 ? "entry" : "entries"}</span></div>
                  <div className="saved-records-list">
                    {medicalRecords.slice(0, 3).map((record) => (
                      <article key={record.id}>
                        <span className="record-check"><Icon name="check" size={15} /></span>
                        <div><strong>{record.files.length > 0 ? record.files.join(", ") : "Health information update"}</strong><small>{record.savedAt} • {record.bloodType ? `Blood type ${record.bloodType}` : record.allergies || record.conditions || "General medical information"}</small></div>
                        {record.files.length > 0 && filePreviews[record.files[0]] ? (
                          <button className="record-preview-button" onClick={() => setPreviewFile({ name: record.files[0], ...filePreviews[record.files[0]] })}>
                            Preview
                          </button>
                        ) : <span>Details</span>}
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {activeView === "Edit profile" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Profile")}><span>←</span> Back to profile</button>
              <div className="page-heading">
                <p className="eyebrow date-label">Personal information</p>
                <h1>Edit your profile</h1>
                <p className="subhead">Keep your contact details accurate so your care team can reach you.</p>
              </div>
              <div className="edit-profile-layout">
                <section className="edit-profile-card">
                  <div className="edit-profile-avatar">
                    <div className="profile-avatar">{userInitials}</div>
                    <div><h2>{userName}</h2><p>Your initials update automatically with your name.</p></div>
                  </div>
                  <form onSubmit={(event) => {
                    event.preventDefault();
                    showNotice("Personal information updated");
                    setActiveView("Profile");
                  }}>
                    <div className="edit-fields">
                      <label><span>Full name</span><input required value={userName} onChange={(event) => setUserName(event.target.value)} /></label>
                      <label><span>Email address</span><input required type="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} /></label>
                      <label><span>Phone number</span><input required value={userPhone} onChange={(event) => setUserPhone(event.target.value)} /></label>
                      <label><span>Date of birth</span><input required type="date" value={userDateOfBirth} onChange={(event) => setUserDateOfBirth(event.target.value)} /></label>
                      <div className="emergency-fields">
                        <div className="emergency-fields-heading"><span className="info-icon"><Icon name="person" size={17} /></span><div><strong>Emergency contact</strong><small>Someone we can contact if urgent support is needed.</small></div></div>
                        <div className="emergency-fields-grid">
                          <label><span>Contact name</span><input value={emergencyContact === "Not provided" ? "" : emergencyContact} onChange={(event) => setEmergencyContact(event.target.value || "Not provided")} placeholder="Full name" /></label>
                          <label><span>Relationship</span><select value={emergencyContactRelation} onChange={(event) => setEmergencyContactRelation(event.target.value)}><option value="">Select relationship</option><option>Parent</option><option>Spouse</option><option>Sibling</option><option>Child</option><option>Friend</option><option>Caregiver</option><option>Other</option></select></label>
                          <label className="wide-field"><span>Contact phone number</span><input type="tel" value={emergencyContactPhone} onChange={(event) => setEmergencyContactPhone(event.target.value)} placeholder="+62 812 0000 0000" /></label>
                        </div>
                      </div>
                    </div>
                    <div className="edit-form-actions">
                      <button className="outline-button" type="button" onClick={() => setActiveView("Profile")}>Cancel</button>
                      <button className="primary-button" type="submit">Save changes <Icon name="check" size={16} /></button>
                    </div>
                  </form>
                </section>
                <aside className="edit-profile-note">
                  <span className="info-icon"><Icon name="check" /></span>
                  <div><h3>Your information is protected</h3><p>Profile details are visible only to you and authorized staff supporting your care.</p></div>
                </aside>
              </div>
            </div>
          )}

          {activeView === "Appointment detail" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Appointments")}><span>←</span> Back to appointments</button>
              <div className="detail-heading">
                <div><span className="confirmed"><Icon name="check" size={13} /> Checked in</span><h1>General consultation</h1><p>Tuesday, October 6 at 10:30 AM</p></div>
                <button className="more-button" onClick={() => showNotice("Appointment options opened")}>•••</button>
              </div>
              <div className="appointment-detail-grid">
                <section className="detail-main-card">
                  <div className="doctor-row">
                    <div className="doctor-avatar">SC</div>
                    <div><span>Your doctor</span><h2>Dr. Sarah Chen</h2><p>General Practitioner • 12 years experience</p></div>
                    <button className="outline-button" onClick={() => setActiveView("Doctor profile")}>View profile</button>
                  </div>
                  <div className="detail-section">
                    <h3>Visit details</h3>
                    <div className="detail-facts">
                      <div><span className="fact-icon"><Icon name="calendar" /></span><span>Date<strong>Tuesday, October 6</strong></span></div>
                      <div><span className="fact-icon"><Icon name="clock" /></span><span>Time<strong>10:30 AM</strong></span></div>
                      <div><span className="fact-icon"><Icon name="map" /></span><span>Location<strong>Room 204, East Wing</strong></span></div>
                    </div>
                  </div>
                  <div className="detail-section">
                    <h3>Reason for visit</h3>
                    <p>Routine consultation and follow-up for recurring headaches.</p>
                  </div>
                </section>
                <aside className="detail-side">
                  <article className="next-step-card"><p className="eyebrow">Next step</p><h3>You&apos;re in the queue</h3><p>There are 3 people ahead of you.</p><button className="primary-button" onClick={() => setActiveView("My queue")}>View live queue <Icon name="arrow" size={17} /></button></article>
                  <article className="support-card"><Icon name="help" /><div><h3>Need help?</h3><p>Contact reception for changes or questions.</p><button className="text-button" onClick={() => setActiveView("Contact reception")}>Contact reception</button></div></article>
                </aside>
              </div>
            </div>
          )}

          {activeView === "New appointment detail" && selectedUpcomingAppointment && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Appointments")}><span>←</span> Back to appointments</button>
              <div className="detail-heading">
                <div><span className={selectedUpcomingAppointment.status === "new" ? "new-booking-label" : "scheduled"}><Icon name="check" size={13} /> {selectedUpcomingAppointment.status === "new" ? "Appointment confirmed" : "Scheduled"}</span><h1>{selectedUpcomingAppointment.specialty}</h1><p>{selectedUpcomingAppointment.month} {selectedUpcomingAppointment.day}, {selectedUpcomingAppointment.year} at {selectedUpcomingAppointment.time}</p></div>
                <button className="more-button" onClick={() => showNotice("Appointment options opened")}>•••</button>
              </div>
              <div className="appointment-detail-grid">
                <section className="detail-main-card">
                  <div className="doctor-row">
                    <div className="doctor-avatar">{selectedUpcomingAppointment.doctor.split(/\s+/).map((part) => part[0]).slice(-2).join("").toUpperCase()}</div>
                    <div><span>Your care provider</span><h2>{selectedUpcomingAppointment.doctor}</h2><p>{selectedUpcomingAppointment.specialty}</p></div>
                    <button className="outline-button" onClick={() => {
                      setSelectedProfileDoctor({ name: selectedUpcomingAppointment.doctor.split(" • ")[0], specialty: selectedUpcomingAppointment.specialty });
                      setActiveView("Selected doctor profile");
                    }}>View doctor profile</button>
                  </div>
                  <div className="detail-section">
                    <h3>Appointment details</h3>
                    <div className="detail-facts">
                      <div><span className="fact-icon"><Icon name="calendar" /></span><span>Date<strong>{selectedUpcomingAppointment.month} {selectedUpcomingAppointment.day}, {selectedUpcomingAppointment.year}</strong></span></div>
                      <div><span className="fact-icon"><Icon name="clock" /></span><span>Time<strong>{selectedUpcomingAppointment.time}</strong></span></div>
                      <div><span className="fact-icon"><Icon name="map" /></span><span>Hospital<strong>{selectedUpcomingAppointment.hospital}</strong></span></div>
                    </div>
                  </div>
                  <div className="detail-section"><h3>Before your visit</h3><p>Please arrive 15 minutes early and bring a valid ID, insurance card, and any relevant medical records.</p></div>
                </section>
                <aside className="detail-side">
                  <article className="next-step-card"><p className="eyebrow">Appointment status</p><h3>Your visit is confirmed</h3><p>We&apos;ll remind you before the appointment.</p><button className="primary-button" onClick={() => showNotice("Appointment reminder enabled")}>Remind me <Icon name="bell" size={17} /></button></article>
                  <article className="support-card"><Icon name="calendar" /><div><h3>Need another time?</h3><p>Reschedule this appointment through reception.</p><button className="text-button" onClick={() => { setContactTopic("Reschedule a visit"); setRescheduleAppointmentId(String(selectedUpcomingAppointment.id)); setActiveView("Contact reception"); }}>Reschedule appointment</button></div></article>
                </aside>
              </div>
            </div>
          )}

          {activeView === "Selected doctor profile" && selectedProfileDoctor && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("New appointment detail")}><span>←</span> Back to appointment</button>
              <section className="doctor-profile-hero">
                <div className="doctor-photo">{selectedProfileDoctor.name.split(/\s+/).filter((part) => !part.includes("Dr.")).map((part) => part[0]).slice(0, 2).join("").toUpperCase()}</div>
                <div className="doctor-bio">
                  <span className="verified-doctor"><Icon name="check" size={13} /> Verified CareMate provider</span>
                  <h1>{selectedProfileDoctor.name}</h1>
                  <p>{selectedProfileDoctor.specialty} • CareMate Medical Network</p>
                  <div className="doctor-stats"><span><strong>10+ yrs</strong>Experience</span><span><strong>4.9</strong>Patient rating</span><span><strong>1,800+</strong>Consultations</span></div>
                </div>
                <button className="primary-button" onClick={() => {
                  if (doctorsBySpecialty[selectedProfileDoctor.specialty]) {
                    setSelectedSpecialty(selectedProfileDoctor.specialty);
                    setSelectedDoctor(selectedProfileDoctor.name);
                  }
                  setActiveView("Book appointment");
                }}><Icon name="calendar" size={17} /> Book this doctor</button>
              </section>
              <div className="doctor-profile-grid">
                <section className="profile-content-card">
                  <div><h2>About {selectedProfileDoctor.name}</h2><p>{selectedProfileDoctor.name} provides patient-centered care with an emphasis on clear communication, careful diagnosis, and practical treatment plans. Every patient is encouraged to ask questions and take an active role in their care.</p></div>
                  <div><h2>Areas of care</h2><div className="expertise-tags"><span>{selectedProfileDoctor.specialty}</span><span>Preventive care</span><span>Patient education</span><span>Follow-up care</span></div></div>
                  <div><h2>Languages</h2><p>Bahasa Indonesia and English</p></div>
                </section>
                <aside className="availability-card">
                  <p className="eyebrow">Next availability</p>
                  <h3>Appointments this week</h3>
                  <div className="mini-slots"><button>9:15 AM</button><button>10:30 AM</button><button>1:30 PM</button></div>
                  <button className="outline-button" onClick={() => setActiveView("Book appointment")}>View all availability</button>
                  <div className="clinic-location"><Icon name="map" /><div><span>Current appointment</span><strong>{selectedUpcomingAppointment?.hospital ?? "CareMate Hospital"}</strong></div></div>
                </aside>
              </div>
            </div>
          )}

          {activeView === "Cancellation detail" && selectedCancellation && (
            <div className="page-view">
              <button className="back-button" onClick={() => { setAppointmentTab("Cancelled"); setActiveView("Appointments"); }}><span>←</span> Back to cancelled appointments</button>
              <div className="history-hero cancelled-history">
                <div className="history-status-icon">×</div>
                <div><span>Previous appointment cancelled</span><h1>{selectedCancellation.specialty}</h1><p>{selectedCancellation.dateLabel} at {selectedCancellation.time}</p></div>
                <span className="replacement-badge"><Icon name="check" size={14} /> Successfully rescheduled</span>
              </div>
              <div className="history-detail-grid">
                <section className="history-main-card">
                  <div className="cancellation-timeline">
                    <div className="complete"><span><Icon name="check" size={14} /></span><div><strong>Original appointment scheduled</strong><small>{selectedCancellation.dateLabel} at {selectedCancellation.time}</small></div></div>
                    <div className="complete"><span><Icon name="check" size={14} /></span><div><strong>Reschedule request confirmed</strong><small>Processed through CareMate Reception</small></div></div>
                    <div className="cancelled"><span>×</span><div><strong>Previous appointment cancelled</strong><small>No cancellation fee was charged</small></div></div>
                    <div className="complete"><span><Icon name="check" size={14} /></span><div><strong>Replacement appointment created</strong><small>{selectedCancellation.replacementDate} at {selectedCancellation.replacementTime}</small></div></div>
                  </div>
                  <div className="history-section"><h2>Cancellation details</h2><dl className="cancellation-facts"><div><dt>Care provider</dt><dd>{selectedCancellation.doctor}</dd></div><div><dt>Hospital</dt><dd>{selectedCancellation.hospital}</dd></div><div><dt>Reason</dt><dd>Rescheduled by patient</dd></div><div><dt>Fee</dt><dd>No fee</dd></div></dl></div>
                </section>
                <aside className="history-side-card replacement-card">
                  <p className="eyebrow">New appointment</p><h3>{selectedCancellation.replacementDate}</h3><p>{selectedCancellation.replacementTime} • {selectedCancellation.hospital}</p>
                  <button className="primary-button" onClick={() => { setAppointmentTab("Upcoming"); setActiveView("Appointments"); }}>View upcoming appointment</button>
                  <button className="text-button" onClick={() => setActiveView("Contact reception")}>Contact reception</button>
                </aside>
              </div>
            </div>
          )}

          {activeView === "Book appointment" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Appointments")}><span>←</span> Back to appointments</button>
              <div className="page-heading">
                <p className="eyebrow date-label">New appointment</p>
                <h1>Book an appointment</h1>
                <p className="subhead">Choose the care you need and a time that works for you.</p>
              </div>
              <div className="booking-layout">
                <section className="booking-main">
                  <div className="booking-step">
                    <div className="step-title"><span>1</span><div><h2>Choose a specialty</h2><p>What can we help you with?</p></div></div>
                    <div className="specialty-grid">
                      {["General Practice", "Dental Care", "Cardiology", "Laboratory"].map((specialty) => (
                        <button className={selectedSpecialty === specialty ? "selected" : ""} onClick={() => {
                          setSelectedSpecialty(specialty);
                          setSelectedDoctor(doctorsBySpecialty[specialty][0].name);
                        }} key={specialty}>
                          <span className="specialty-icon"><Icon name={specialty === "Laboratory" ? "ticket" : "person"} /></span>
                          <strong>{specialty}</strong>
                          <small>{specialty === "General Practice" ? "Everyday health concerns" : specialty === "Dental Care" ? "Oral health and check-ups" : specialty === "Cardiology" ? "Heart and circulation" : "Tests and diagnostics"}</small>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="booking-step">
                    <div className="step-title"><span>2</span><div><h2>Choose a location and hospital</h2><p>We&apos;ll show available care near you.</p></div></div>
                    <div className="location-picker">
                      <label>
                        <span>Your area</span>
                        <select value={selectedLocation} onChange={(event) => {
                          const location = event.target.value;
                          setSelectedLocation(location);
                          setSelectedHospital(hospitalsByLocation[location][0].name);
                        }}>
                          {Object.keys(hospitalsByLocation).map((location) => <option key={location}>{location}</option>)}
                        </select>
                      </label>
                      <button className="detect-location" onClick={() => showNotice("Location detected: Jakarta Selatan")}>◎ Use my location</button>
                    </div>
                    <div className="hospital-grid">
                      {hospitalsByLocation[selectedLocation].map((hospital) => (
                        <button className={selectedHospital === hospital.name ? "selected" : ""} onClick={() => setSelectedHospital(hospital.name)} key={hospital.name}>
                          <span className="hospital-radio"><i /></span>
                          <span><strong>{hospital.name}</strong><small><Icon name="map" size={13} /> {hospital.distance} away</small></span>
                          <em>{hospital.availability}</em>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="booking-step">
                    <div className="step-title"><span>3</span><div><h2>Choose your doctor</h2><p>Doctors shown specialize in {selectedSpecialty.toLowerCase()}.</p></div></div>
                    <div className="doctor-choice-grid">
                      {doctorsBySpecialty[selectedSpecialty].map((doctor, index) => (
                        <button className={selectedDoctor === doctor.name ? "selected" : ""} onClick={() => setSelectedDoctor(doctor.name)} key={doctor.name}>
                          <span className="doctor-avatar">{doctor.initials}</span>
                          <span><strong>{doctor.name}</strong><small>{selectedSpecialty} • {doctor.experience}</small><em>{doctor.next}</em></span>
                          {index === 0 && <i>Recommended</i>}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="booking-step">
                    <div className="step-title"><span>4</span><div><h2>Select a date and time</h2><p>Browse any available month. All times are in GMT+7.</p></div></div>
                    <div className="calendar-head">
                      <button aria-label="Previous month" onClick={() => changeMonth(-1)}>‹</button>
                      <strong>{monthName} {bookingYear}</strong>
                      <button aria-label="Next month" onClick={() => changeMonth(1)}>›</button>
                    </div>
                    <div className="calendar-grid">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <span className="calendar-weekday" key={day}>{day}</span>)}
                      {Array.from({ length: firstDay }).map((_, index) => <span className="calendar-empty" key={`empty-${index}`} />)}
                      {Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => {
                        const unavailable = day % 7 === 0;
                        return <button className={selectedDate === day ? "selected" : ""} disabled={unavailable} onClick={() => setSelectedDate(day)} key={day}>{day}{day % 5 === 0 && !unavailable && <i />}</button>;
                      })}
                    </div>
                    <div className="calendar-legend"><span><i /> Good availability</span><span>Unavailable dates are dimmed</span></div>
                    <p className="slot-label">Available times for {monthName} {selectedDate}</p>
                    <div className="time-grid">
                      {["8:30 AM", "9:15 AM", "10:30 AM", "11:45 AM", "1:30 PM", "3:00 PM"].map((time) => (
                        <button className={selectedTime === time ? "selected" : ""} onClick={() => setSelectedTime(time)} key={time}>{time}</button>
                      ))}
                    </div>
                  </div>
                </section>
                <aside className="booking-summary">
                  <p className="eyebrow">Appointment summary</p>
                  <h2>{selectedSpecialty}</h2>
                  <div className="summary-doctor"><div className="doctor-avatar">{doctorsBySpecialty[selectedSpecialty].find((doctor) => doctor.name === selectedDoctor)?.initials}</div><div><strong>{selectedDoctor}</strong><span>{selectedSpecialty}</span></div></div>
                  <div className="summary-facts">
                    <div><Icon name="calendar" /><span>Date<strong>{monthName} {selectedDate}, {bookingYear}</strong></span></div>
                    <div><Icon name="clock" /><span>Time<strong>{selectedTime}</strong></span></div>
                    <div><Icon name="map" /><span>Hospital<strong>{selectedHospital}</strong></span></div>
                  </div>
                  <div className="insurance-check"><Icon name="check" /><span>Your insurance is verified</span></div>
                  <button className="primary-button book-confirm" onClick={() => {
                    setBookedAppointments((appointments) => [{
                      id: Date.now(),
                      specialty: selectedSpecialty,
                      doctor: selectedDoctor,
                      date: `${monthName} ${selectedDate}, ${bookingYear}`,
                      day: selectedDate,
                      month: monthName,
                      year: bookingYear,
                      time: selectedTime,
                      hospital: selectedHospital,
                    }, ...appointments]);
                    setAppointmentTab("Upcoming");
                    showNotice("Appointment booked successfully");
                    setActiveView("Appointments");
                  }}>Confirm appointment</button>
                  <small>No payment is required at this step.</small>
                </aside>
              </div>
            </div>
          )}

          {activeView === "Doctor profile" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Appointment detail")}><span>←</span> Back to appointment</button>
              <section className="doctor-profile-hero">
                <div className="doctor-photo">SC</div>
                <div className="doctor-bio">
                  <span className="verified-doctor"><Icon name="check" size={13} /> Verified physician</span>
                  <h1>Dr. Sarah Chen</h1>
                  <p>General Practitioner • MD, University of Melbourne</p>
                  <div className="doctor-stats"><span><strong>12 yrs</strong>Experience</span><span><strong>4.9</strong>Patient rating</span><span><strong>2,400+</strong>Consultations</span></div>
                </div>
                <button className="primary-button" onClick={() => setActiveView("Book appointment")}><Icon name="calendar" size={17} /> Book with Dr. Chen</button>
              </section>
              <div className="doctor-profile-grid">
                <section className="profile-content-card">
                  <div><h2>About Dr. Chen</h2><p>Dr. Sarah Chen provides thoughtful, evidence-based care for adults and families. She focuses on preventive medicine, chronic condition management, and helping patients understand their health in clear, practical language.</p></div>
                  <div><h2>Areas of care</h2><div className="expertise-tags"><span>General wellness</span><span>Preventive care</span><span>Headache management</span><span>Chronic conditions</span><span>Women&apos;s health</span></div></div>
                  <div><h2>Languages</h2><p>English, Bahasa Indonesia, Mandarin</p></div>
                </section>
                <aside className="availability-card">
                  <p className="eyebrow">Next availability</p>
                  <h3>Wednesday, October 14</h3>
                  <div className="mini-slots"><button>9:15 AM</button><button>10:30 AM</button><button>1:30 PM</button></div>
                  <button className="outline-button" onClick={() => setActiveView("Book appointment")}>View all availability</button>
                  <div className="clinic-location"><Icon name="map" /><div><span>Primary clinic</span><strong>East Wing, Level 2</strong></div></div>
                </aside>
              </div>
            </div>
          )}

          {activeView === "Contact reception" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Appointment detail")}><span>←</span> Back</button>
              <div className="page-heading">
                <p className="eyebrow date-label">Help & support</p>
                <h1>Contact reception</h1>
                <p className="subhead">Choose the quickest way to get help with your visit.</p>
              </div>
              <div className="contact-layout">
                <section className="contact-options">
                  <article className="contact-option recommended">
                    <div className="contact-icon"><Icon name="help" /></div>
                    <div><span className="recommended-label">Recommended</span><h2>Send a message</h2><p>Usually replies in under 5 minutes during opening hours.</p></div>
                    <span className="open-status"><i /> Online now</span>
                  </article>
                  <article className="contact-option">
                    <div className="contact-icon"><Icon name="bell" /></div>
                    <div><h2>Request a call</h2><p>Reception will call your saved number ending in 4831.</p></div>
                    <button className="outline-button" onClick={() => showNotice("Call requested — reception will call soon")}>Request call</button>
                  </article>
                  <div className="hours-card"><Icon name="clock" /><div><strong>Reception hours</strong><span>Monday–Friday, 7:00 AM–8:00 PM</span></div></div>
                </section>
                <section className="message-card">
                  <div className="message-head"><div className="avatar">CR</div><div><strong>CareMate Reception</strong><span><i /> Online • replies in ~5 min</span></div></div>
                  <div className="topic-select">
                    <label htmlFor="topic">What do you need help with?</label>
                    <select id="topic" value={contactTopic} onChange={(event) => {
                      const topic = event.target.value;
                      setContactTopic(topic);
                      if (topic === "Reschedule a visit" && !upcomingAppointments.some((appointment) => String(appointment.id) === rescheduleAppointmentId)) {
                        setRescheduleAppointmentId(String(upcomingAppointments[0]?.id ?? ""));
                      }
                    }}><option>Today&apos;s appointment</option><option>Reschedule a visit</option><option>Queue assistance</option><option>General question</option></select>
                  </div>
                  {contactTopic === "Reschedule a visit" ? (
                    <div className="reschedule-form">
                      <div className="reschedule-intro"><span className="info-icon"><Icon name="calendar" /></span><div><strong>Choose a new appointment time</strong><small>The previous time will move to Cancelled automatically.</small></div></div>
                      <label><span>Appointment to reschedule</span><select value={rescheduleAppointmentId} onChange={(event) => setRescheduleAppointmentId(event.target.value)}>{upcomingAppointments.map((appointment) => <option value={String(appointment.id)} key={appointment.id}>{appointment.specialty} — {appointment.month} {appointment.day}, {appointment.time}</option>)}</select></label>
                      <div className="reschedule-fields">
                        <label><span>New date</span><input type="date" min="2026-10-07" value={rescheduleDate} onChange={(event) => setRescheduleDate(event.target.value)} /></label>
                        <label><span>New time</span><select value={rescheduleTime} onChange={(event) => setRescheduleTime(event.target.value)}>{["8:30 AM", "9:15 AM", "10:30 AM", "11:45 AM", "1:30 PM", "3:00 PM"].map((time) => <option key={time}>{time}</option>)}</select></label>
                      </div>
                      <label className="message-box"><span>Reason for rescheduling</span><textarea defaultValue="I need to move this appointment to a more suitable time." rows={3} /><small>Reception will receive this reason with your request.</small></label>
                      <button className="primary-button" onClick={() => {
                        const previousAppointment = upcomingAppointments.find((appointment) => String(appointment.id) === rescheduleAppointmentId);
                        if (!previousAppointment || !rescheduleDate) {
                          showNotice("Select an appointment and a new date");
                          return;
                        }
                        const newDate = new Date(`${rescheduleDate}T00:00:00`);
                        const newMonth = new Intl.DateTimeFormat("en", { month: "long" }).format(newDate);
                        setCancelledAppointmentIds((ids) => [...ids, String(previousAppointment.id)]);
                        setRescheduledCancellations((appointments) => [{
                          id: `cancelled-${previousAppointment.id}-${Date.now()}`,
                          specialty: previousAppointment.specialty,
                          doctor: previousAppointment.doctor,
                          dateLabel: `${previousAppointment.month} ${previousAppointment.day}, ${previousAppointment.year}`,
                          time: previousAppointment.time,
                          hospital: previousAppointment.hospital,
                          replacementDate: `${newMonth} ${newDate.getDate()}, ${newDate.getFullYear()}`,
                          replacementTime: rescheduleTime,
                        }, ...appointments]);
                        setBookedAppointments((appointments) => [{
                          id: Date.now(),
                          specialty: previousAppointment.specialty,
                          doctor: previousAppointment.doctor,
                          date: `${newMonth} ${newDate.getDate()}, ${newDate.getFullYear()}`,
                          day: newDate.getDate(),
                          month: newMonth,
                          year: newDate.getFullYear(),
                          time: rescheduleTime,
                          hospital: previousAppointment.hospital,
                        }, ...appointments]);
                        setAppointmentTab("Upcoming");
                        setContactTopic("Today's appointment");
                        setActiveView("Appointments");
                        showNotice("Appointment rescheduled successfully");
                      }}>Confirm new appointment <Icon name="check" size={17} /></button>
                    </div>
                  ) : (
                    <>
                      <label className="message-box">
                        <span>Your message</span>
                        <textarea defaultValue="Hi, I need help with my appointment today." rows={5} />
                        <small>Please don&apos;t include sensitive medical information.</small>
                      </label>
                      <button className="primary-button" onClick={() => showNotice("Message sent to reception")}>Send message <Icon name="arrow" size={17} /></button>
                    </>
                  )}
                </section>
              </div>
            </div>
          )}

          {activeView === "History detail" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Appointments")}><span>←</span> Back to appointments</button>
              {historyVisit === "past" ? (
                <>
                  <div className="history-hero completed-history">
                    <div className="history-status-icon"><Icon name="check" size={25} /></div>
                    <div><span>Completed visit</span><h1>Annual health screening</h1><p>August 12, 2026 • Dr. Sarah Chen</p></div>
                    <button className="outline-button" onClick={() => downloadPdf("Annual Health Screening Summary", [`Patient: ${userName}`, "Date: August 12, 2026", "Provider: Dr. Sarah Chen", "Blood pressure: 118/76 mmHg - Normal", "Resting heart rate: 72 bpm - Normal", "Recommendation: Return for annual screening in August 2027."], "annual-health-summary.pdf")}>Download summary PDF</button>
                  </div>
                  <div className="history-detail-grid">
                    <section className="history-main-card">
                      <div className="history-section"><h2>Visit summary</h2><p>Your general health screening was completed successfully. Blood pressure, heart rate, and physical examination results were within healthy ranges.</p></div>
                      <div className="result-row"><span className="result-icon"><Icon name="person" /></span><div><span>Blood pressure</span><strong>118/76 mmHg</strong></div><em>Normal</em></div>
                      <div className="result-row"><span className="result-icon"><Icon name="clock" /></span><div><span>Resting heart rate</span><strong>72 bpm</strong></div><em>Normal</em></div>
                      <div className="history-section"><h2>Doctor&apos;s notes</h2><div className="doctor-note"><div className="doctor-avatar">SC</div><p>Continue your current healthy habits. Maintain regular exercise and return for another screening in 12 months.</p></div></div>
                    </section>
                    <aside className="history-side-card">
                      <p className="eyebrow">Follow-up</p><h3>No immediate action needed</h3><p>Your next annual screening is recommended for August 2027.</p>
                      <button className="primary-button" onClick={() => setActiveView("Book appointment")}>Book follow-up</button>
                      <div className="history-provider"><span>Care provider</span><strong>Dr. Sarah Chen</strong><small>General Practice</small></div>
                    </aside>
                  </div>
                </>
              ) : (
                <>
                  <div className="history-hero cancelled-history">
                    <div className="history-status-icon">×</div>
                    <div><span>Cancelled appointment</span><h1>Physiotherapy consultation</h1><p>Originally scheduled for September 14, 2026</p></div>
                    <button className="primary-button" onClick={() => setActiveView("Book appointment")}>Reschedule visit</button>
                  </div>
                  <div className="history-detail-grid">
                    <section className="history-main-card">
                      <div className="cancellation-timeline">
                        <div className="complete"><span><Icon name="check" size={14} /></span><div><strong>Appointment booked</strong><small>September 2 at 10:14 AM</small></div></div>
                        <div className="complete"><span><Icon name="check" size={14} /></span><div><strong>Cancellation requested</strong><small>September 12 at 4:25 PM</small></div></div>
                        <div className="cancelled"><span>×</span><div><strong>Appointment cancelled</strong><small>Cancelled without a fee</small></div></div>
                      </div>
                      <div className="history-section"><h2>Cancellation details</h2><dl className="cancellation-facts"><div><dt>Reason</dt><dd>Schedule conflict</dd></div><div><dt>Reference</dt><dd>CAN-290184</dd></div><div><dt>Refund</dt><dd>No payment was collected</dd></div></dl></div>
                    </section>
                    <aside className="history-side-card cancelled-help">
                      <p className="eyebrow">Still need this care?</p><h3>Find another suitable time</h3><p>Your previous preferences are saved, so rescheduling only takes a moment.</p>
                      <button className="primary-button" onClick={() => setActiveView("Book appointment")}>Find a new time</button>
                      <button className="text-button" onClick={() => setActiveView("Contact reception")}>Ask reception for help</button>
                    </aside>
                  </div>
                </>
              )}
            </div>
          )}

          {activeView === "Medical history" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Profile")}><span>←</span> Back to profile</button>
              <div className="page-heading heading-line">
                <div><p className="eyebrow date-label">Private health record</p><h1>Medical history</h1><p className="subhead">Give your care team a clearer picture before your visit.</p></div>
                <span className="privacy-chip"><Icon name="check" size={14} /> Private & encrypted</span>
              </div>
              <div className="medical-layout">
                <section className="medical-form-card">
                  <div className="medical-section-head"><span className="info-icon"><Icon name="help" /></span><div><h2>Health information</h2><p>Update this whenever your health information changes.</p></div></div>
                  <div className="medical-fields">
                    <label><span>Blood type</span><select value={bloodType} onChange={(event) => setBloodType(event.target.value)}><option value="">Select blood type</option>{["Not sure", "A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"].map((type) => <option key={type}>{type}</option>)}</select><small>Select “Not sure” only if your blood type has not been confirmed.</small></label>
                    <label><span>Allergies</span><textarea value={allergies} onChange={(event) => setAllergies(event.target.value)} rows={3} placeholder="List medicine, food, or environmental allergies" /><small>Include the reaction if you know it.</small></label>
                    <label><span>Current or past conditions</span><textarea value={conditions} onChange={(event) => setConditions(event.target.value)} rows={3} placeholder="For example: asthma, diabetes, high blood pressure" /></label>
                    <label><span>Current medications</span><textarea value={medications} onChange={(event) => setMedications(event.target.value)} rows={3} placeholder="Medicine name, dose, and how often you take it" /></label>
                  </div>
                  <button className="primary-button" onClick={() => saveMedicalRecord()}>Save as new entry</button>
                </section>
                <aside className="upload-record-card">
                  <div className="medical-section-head"><span className="info-icon"><Icon name="ticket" /></span><div><h2>Medical documents</h2><p>Upload previous results, referrals, or prescriptions.</p></div></div>
                  <label className="upload-zone">
                    <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={(event) => {
                      const selectedFiles = Array.from(event.target.files ?? []);
                      const names = selectedFiles.map((file) => file.name);
                      if (names.length > 0) {
                        setFilePreviews((previews) => ({
                          ...previews,
                          ...Object.fromEntries(selectedFiles.map((file) => [file.name, { url: URL.createObjectURL(file), type: file.type }])),
                        }));
                        saveMedicalRecord(names);
                      }
                    }} />
                    <span className="upload-icon">↑</span>
                    <strong>Choose files to upload</strong>
                    <span>PDF, JPG or PNG • up to 10 MB each</span>
                  </label>
                  <div className="uploaded-list">
                    <p className="uploaded-list-label">Previously saved documents</p>
                    {uploadedFiles.length === 0 && <div className="empty-upload"><Icon name="ticket" /><span>No documents uploaded yet</span></div>}
                    {uploadedFiles.map((file, index) => (
                      <div className="uploaded-file" key={`${file}-${index}`}>
                        <span className="file-type">DOC</span>
                        <button className="uploaded-file-name" onClick={() => filePreviews[file] && setPreviewFile({ name: file, ...filePreviews[file] })}>
                          <strong>{file}</strong><small>Click to preview this document</small>
                        </button>
                        <button aria-label={`Remove ${file}`} onClick={() => {
                          setUploadedFiles((files) => files.filter((_, fileIndex) => fileIndex !== index));
                          setMedicalRecords((records) => records.map((record) => ({ ...record, files: record.files.filter((recordFile) => recordFile !== file) })));
                          if (filePreviews[file]) URL.revokeObjectURL(filePreviews[file].url);
                          setFilePreviews((previews) => {
                            const nextPreviews = { ...previews };
                            delete nextPreviews[file];
                            return nextPreviews;
                          });
                        }}>×</button>
                      </div>
                    ))}
                  </div>
                  <div className="upload-consent"><Icon name="check" size={15} /><p>Documents are visible only to you and authorized healthcare professionals involved in your care.</p></div>
                </aside>
              </div>
            </div>
          )}

          {activeView === "Directions" && (
            <div className="page-view">
              <button className="back-button" onClick={() => setActiveView("Hospital map")}><span>←</span> Exit directions</button>
              <div className="directions-layout">
                <section className="navigation-map">
                  <div className="nav-map-grid" />
                  <div className={`nav-route route-step-${directionStep}`} />
                  <div className="nav-start"><Icon name="person" size={17} /></div>
                  <div className="nav-end"><Icon name="map" size={17} /></div>
                  <div className="nav-level-badge">Level {routeSteps[directionStep].floor} • {hospitalMapData[mapHospital].wing}</div>
                  <button className="recenter-button" onClick={() => showNotice("Map centered on your location")}>◎ Recenter</button>
                </section>
                <aside className="directions-panel">
                  <div className="route-summary"><span>{mapHospital}</span><h1>{mapDestination.split(" • ")[0]}</h1><p>From {mapStart} • {hospitalMapData[mapHospital].wing}</p><div><strong>{startFloor === destinationFloor ? "3–4 min" : "5–7 min"}</strong><span>{startFloor === destinationFloor ? `Stay on Level ${startFloor}` : `Level ${startFloor} → Level ${destinationFloor}`} • Step-free</span></div></div>
                  <div className="route-overview">
                    <span className="complete"><i />{mapStart}</span>
                    {startFloor !== destinationFloor && <span><i />{liftName}</span>}
                    <span><i />{mapDestination.split(" • ")[0]}</span>
                  </div>
                  <div className="current-instruction">
                    <span className="instruction-count">Step {directionStep + 1} of {routeSteps.length} • Level {routeSteps[directionStep].floor}</span>
                    <div className="turn-icon">{routeSteps[directionStep].turn}</div>
                    <h2>{routeSteps[directionStep].title}</h2>
                    <p>{routeSteps[directionStep].detail}</p>
                  </div>
                  <div className="direction-controls">
                    <button className="outline-button" disabled={directionStep === 0} onClick={() => setDirectionStep((step) => Math.max(0, step - 1))}>Previous</button>
                    {directionStep < routeSteps.length - 1 ? <button className="primary-button" onClick={() => setDirectionStep((step) => step + 1)}>Next step <Icon name="arrow" size={17} /></button> : <button className="primary-button" onClick={() => { showNotice(`You have arrived at ${mapDestination.split(" • ")[0]}`); setActiveView("Hospital map"); }}>I&apos;ve arrived <Icon name="check" size={17} /></button>}
                  </div>
                  <button className="accessible-route" onClick={() => showNotice("Step-free route is already active")}><Icon name="check" size={16} /> Step-free accessible route active</button>
                </aside>
              </div>
            </div>
          )}
        </section>
      </main>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <button
            className={activeView === item.label ? "active" : ""}
            key={item.label}
            onClick={() => setActiveView(item.label)}
          >
            <Icon name={item.icon} />
            <span>{item.label === "Appointments" ? "Visits" : item.label}</span>
          </button>
        ))}
      </nav>

      <div className={`toast ${notice ? "show" : ""}`} role="status">
        <Icon name="check" size={17} />
        {notice}
      </div>
      {previewFile && (
        <div className="preview-overlay" role="dialog" aria-modal="true" aria-label={`Preview ${previewFile.name}`}>
          <button className="preview-backdrop" aria-label="Close document preview" onClick={() => setPreviewFile(null)} />
          <section className="preview-dialog">
            <header>
              <div><span className="file-type">{previewFile.type.includes("pdf") ? "PDF" : "IMG"}</span><div><strong>{previewFile.name}</strong><small>Medical record preview</small></div></div>
              <button aria-label="Close preview" onClick={() => setPreviewFile(null)}>×</button>
            </header>
            <div className="preview-content">
              {previewFile.type.includes("pdf") ? (
                <iframe src={previewFile.url} title={previewFile.name} />
              ) : (
                <img src={previewFile.url} alt={`Preview of ${previewFile.name}`} />
              )}
            </div>
            <footer><span><Icon name="check" size={14} /> Private medical document</span><button className="outline-button" onClick={() => setPreviewFile(null)}>Close preview</button></footer>
          </section>
        </div>
      )}
    </div>
  );
}
