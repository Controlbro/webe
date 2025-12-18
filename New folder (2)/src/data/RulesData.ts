import { MessageSquare, Shield, UserX, Monitor, Gavel, HeartHandshake } from 'lucide-react';

export const rulesData = [
  {
    category: "General Conduct",
    icon: HeartHandshake,
    description: "Basic standards of behavior expected from all community members.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    rules: [
      "Treat all players and staff with respect. Toxicity and harassment are strictly prohibited.",
      "Inappropriate names (IGNs) or skins containing offensive or NSFW content are not allowed.",
      "Impersonating Staff members or content creators will result in an immediate ban.",
      "Scamming is prohibited on all servers, except for the Anarchy realm."
    ]
  },
  {
    category: "Chat & Communication",
    icon: MessageSquare,
    description: "Guidelines for in-game chat and discord communication.",
    color: "text-green-600",
    bg: "bg-green-50",
    rules: [
      "Do not spam, flood, or use excessive caps in the global chat.",
      "Advertising other servers (IPs/Links) or sending phishing links is strictly forbidden.",
      "Avoid controversial topics such as politics or religion that may cause heated arguments.",
      "Hate speech, racism, sexism, or discrimination of any kind equals a Permanent Ban."
    ]
  },
  {
    category: "Gameplay & Fair Play",
    icon: Shield,
    description: "Ensuring a fair and enjoyable game environment for everyone.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    rules: [
      "Using Cheat Clients or Hacked Clients (X-Ray, KillAura, Fly, etc.) is strictly banned.",
      "Do not exploit server bugs or glitches. Report them to staff for a reward.",
      "Creating Lag Machines or structures designed to crash the server is prohibited.",
      "AFK Farming is allowed as long as no external macros or autoclickers are used."
    ]
  },
  {
    category: "Griefing & Raiding",
    icon: UserX,
    description: "Rules regarding destruction of other players' property.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    rules: [
      "Griefing is strictly PROHIBITED on all servers.",
    ]
  },
  {
    category: "Client Modifications",
    icon: Monitor,
    description: "List of allowed and disallowed client mods.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    rules: [
      "Allowed: Optifine, Sodium, Minimap (No Entity Radar), Litematica (Printer OFF).",
      "Disallowed: X-Ray Texture Packs, Freecam, Baritone, Killaura.",
      "Using hardware macros (Mouse/Keyboard macros) for PvP is considered cheating."
    ]
  },
  {
    category: "Punishments",
    icon: Gavel,
    description: "Consequences for violating the server rules.",
    color: "text-red-600",
    bg: "bg-red-50",
    rules: [
      "Staff members reserve the right to issue punishments based on the severity of the offense.",
      "Ban Evasion (Joining with an alt account while banned) will result in a Permanent IP Ban.",
      "Staff decisions are final, but you may submit a ban appeal on our Discord server."
    ]
  }
];
