import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth scroll to element by id
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Subtract header height
      behavior: "smooth"
    });
  }
}

// Format number with commas
export function formatNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Generate random ID for uniqueness
export function generateId(length = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}
