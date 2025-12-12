import { Facebook, Github, Linkedin, Youtube } from 'lucide-react'
import React from 'react'

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        name: "Github",
        href: "https://www.github.com",
        icon: <Github className="w-5 h-5" />,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com",
        icon: <Youtube className="w-5 h-5" />,
    }
]

const SocialIcons = () => {
  return (
    <div>SocialIcons</div>
  )
}

export default SocialIcons