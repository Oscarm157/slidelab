"use client";

import { motion } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  links?: { icon: string; url: string }[];
}

interface TeamGridProps {
  members: TeamMember[];
  columns?: 2 | 3 | 4;
  variant?: "dark" | "light";
}

const colMap = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" };

export function TeamGrid({ members, columns = 3, variant = "light" }: TeamGridProps) {
  const cardStyles = variant === "dark"
    ? "bg-card/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
    : "bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]";

  return (
    <div className={`grid grid-cols-1 ${colMap[columns]} gap-5`}>
      {members.map((member) => (
        <motion.div
          key={member.name}
          whileHover={{ y: -4, boxShadow: variant === "dark" ? "0 8px 30px rgba(0,0,0,0.25)" : "0 8px 30px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`rounded-2xl p-6 text-center ${cardStyles}`}
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="font-semibold text-base">{member.name}</h3>
          <p className="text-primary text-sm mb-2">{member.role}</p>
          {member.bio && <p className="text-muted text-xs leading-relaxed">{member.bio}</p>}
          {member.links && (
            <div className="flex items-center justify-center gap-2 mt-3">
              {member.links.map((link) => (
                <a
                  key={link.icon}
                  href={link.url}
                  className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-[16px]">{link.icon}</span>
                </a>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
