"use client";

import { useState, useMemo } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { teamMembers, teamCategories, IconLinkedIn, IconInstagram } from './teamdata'

export default function TeamSection() {
  const [filter, setFilter] = useState<(typeof teamCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return teamMembers;
    return teamMembers.filter((m) => m.group === filter);
  }, [filter]);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {teamCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={[
              "px-5 py-2.5 rounded-full text-sm font-bold font-headline transition-all duration-200 border",
              filter === c
                ? "bg-primary-container text-on-primary-container border-primary-container shadow-lg shadow-blue-900/10"
                : "bg-surface-container-lowest text-on-surface-variant border-surface-variant hover:text-primary hover:border-primary/40",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Members */}
      <div
        role="list"
        aria-label="Team members"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6"
      >
        {filtered.map((member, index) => (
          <HoverCard key={`${member.id}-${index}`} openDelay={150}>
            {/* Chip trigger */}
            <HoverCardTrigger
              className={[
                "grid cursor-pointer grid-cols-[auto_1fr] items-center gap-4",
                "rounded-[24px] border border-surface-variant bg-surface-container-lowest p-3 shadow-sm hover:-translate-y-[2px]",
                "transition-all hover:shadow-md focus:outline-none",
                "data-[state=open]:ring-2 data-[state=open]:border-primary",
              ].join(" ")}
            >
              <Avatar className="rounded-2xl size-14 border border-transparent shadow ring-1 ring-foreground/10">
                <AvatarImage src={member.imageSrc} alt={member.name} className="object-cover" />
                <AvatarFallback className="rounded-xl font-headline text-lg bg-surface-container text-on-surface-variant">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex flex-col justify-center gap-0.5">
                <span className="font-headline text-on-primary-container block truncate text-[16px] font-bold">
                  {member.name}
                </span>
                <span className="text-primary block truncate text-[13px] font-semibold">
                  {member.role}
                </span>
              </div>
            </HoverCardTrigger>

            {/* Popover card */}
            <HoverCardContent
              align="start"
              sideOffset={8}
              className={[
                "w-80 rounded-[24px] p-5",
                "border border-surface-variant bg-surface-container-lowest shadow-xl ring-1 ring-black/5",
              ].join(" ")}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <Avatar className="rounded-2xl size-16 border border-transparent shadow ring-1 ring-foreground/10">
                      <AvatarImage src={member.imageSrc} alt={member.name} className="object-cover" />
                      <AvatarFallback className="rounded-2xl font-headline text-2xl bg-surface-container text-on-surface-variant">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="font-headline font-black text-lg text-on-primary-container">
                        {member.name}
                      </div>
                      <div className="text-primary truncate text-sm font-semibold">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-3">
                  {member.socials?.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="w-10 h-10 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container transition-colors flex items-center justify-center shrink-0"
                    >
                      <IconLinkedIn />
                    </a>
                  )}
                  {member.socials?.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                      className="w-10 h-10 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container transition-colors flex items-center justify-center shrink-0"
                    >
                      <IconInstagram />
                    </a>
                  )}
                  {(!member.socials?.linkedin && !member.socials?.instagram) && (
                     <p className="text-on-surface-variant/60 text-xs italic">No social links available</p>
                  )}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}
