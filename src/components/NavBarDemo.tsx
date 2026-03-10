import { Home, User, Briefcase, Code, Mail, Sparkles } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
  { name: 'Home', url: '#hero', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Experience', url: '#experience', icon: Briefcase },
  { name: 'Projects', url: '#projects', icon: Code },
  { name: 'Skills', url: '#skills', icon: Sparkles },
  { name: 'Contact', url: '#contact', icon: Mail }
]

export function NavBarDemo() {
  return <NavBar items={navItems} />
}
