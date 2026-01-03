export interface FaqItem {
  id: number;
  question: string;
  asker: string; 
  answer: string;
  responder: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    asker: "Steve",
    question: "How do I claim land to protect my builds?",
    responder: "Agnes",
    answer: "We use Towny to protect builds, you can do /towny help to get more information."
  },
  {
    id: 2,
    asker: "Alex",
    question: "Is griefing allowed on the server?",
    responder: "Jeb_",
    answer: "Griefing is strictly prohibited"
  },
  {
    id: 6,
    asker: "MumboJumbo",
    question: "Are Redstone clocks allowed?",
    responder: "Kai",
    answer: "Small redstone mechanisms are fine, but massive lag machines or ultra-fast clocks that drop TPS will be removed by our anti-lag system."
  }
];
