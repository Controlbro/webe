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
        customImage: "https://media.discordapp.net/attachments/1399519570133254258/1451349355062890547/mcpfp_-_CBYT.png?ex=6945d9eb&is=6944886b&hm=369153ea87ac0744388763b9dffc6eeb39aee0d06f28a88d34b80ca4b3b1b54f&=&format=webp&quality=lossless"
      },
    ],
  },
];
