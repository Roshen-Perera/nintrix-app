import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    iconClassName?: string;
    toolTipClassName?: string;
}

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
  },
];

const SocialIcons = ( { className, iconClassName, toolTipClassName }: Props ) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks?.map((item) => (
          <Tooltip key={item?.name}>
            <TooltipTrigger asChild>
              <a key={item?.name} href={item?.href} className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)} target="_blank" rel="noopener noreferrer">
                {item?.icon}
              </a>
            </TooltipTrigger>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialIcons;
