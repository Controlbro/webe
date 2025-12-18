export interface StaffMember {
  name: string;
  role: string; 
  description: string;
  customImage?: string;
}

export interface StaffCategory {
  title: string;
  color: string;
  members: StaffMember[];
}

export const staffData: StaffCategory[] = [
  {
    title: "High Management",
    color: "bg-red-100 text-red-600 border-red-200",
    members: [
      {
        name: "CBYT",
        role: "Founder & Owner",
        description: "Overseeing all server operations and development direction.",
        customImage: "https://i.imgur.com/IwLa5S0.png"
      },
    ],
  },
];
