"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Zap } from "lucide-react";
import Link from "next/link";

// Floating AWS service badges
const awsBadges = [
  { label: "S3", color: "border-green-400/50 text-green-400 shadow-green-400/20", x: "8%", y: "18%", delay: 0 },
  { label: "EC2", color: "border-blue-400/50 text-blue-400 shadow-blue-400/20", x: "88%", y: "22%", delay: 0.5 },
  { label: "λ", color: "border-orange-400/50 text-orange-400 shadow-orange-400/20", x: "5%", y: "55%", delay: 1.0 },
  { label: "RDS", color: "border-purple-400/50 text-purple-400 shadow-purple-400/20", x: "92%", y: "60%", delay: 1.5 },
  { label: "DynamoDB", color: "border-cyan-400/50 text-cyan-400 shadow-cyan-400/20", x: "12%", y: "80%", delay: 2.0 },
  { label: "EKS", color: "border-amber-400/50 text-amber-400 shadow-amber-400/20", x: "85%", y: "80%", delay: 0.8 },
  { label: "SQS", color: "border-pink-400/50 text-pink-400 shadow-pink-400/20", x: "20%", y: "35%", delay: 1.3 },
  { label: "CloudFront", color: "border-indigo-400/50 text-indigo-400 shadow-indigo-400/20", x: "78%", y: "42%", delay: 1.8 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic background gradients */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030816] via-[#0a1128] to-[#030816]" />

        {/* Nebula-like gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,45,120,0.06)_0%,transparent_70%)] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_60%)] rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating AWS Service Badges */}
      {awsBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className={`absolute hidden sm:flex items-center justify-center px-3 py-1.5 text-xs font-mono font-semibold rounded border backdrop-blur-sm bg-black/30 ${badge.color}`}
          style={{
            left: badge.x,
            top: badge.y,
            boxShadow: `0 0 15px currentColor`,
            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${badge.delay}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8 + badge.delay * 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          {badge.label}
        </motion.div>
      ))}

      {/* Main Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20"
      >
        {/* Cloud icon animation */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Cloud
              size={64}
              className="text-white/20"
              strokeWidth={1}
            />
            <Zap
              size={24}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent"
            />
          </div>
        </motion.div>

        {/* Subtitle tag */}
        <motion.div variants={itemVariants} className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono tracking-widest uppercase border border-accent/30 text-accent/90 bg-accent/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AWS Cloud Club · MAIT
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.25] mb-8"
        >
          <span className="block text-white">JOIN THE</span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ff2d78 0%, #ff6b9d 30%, #ffffff 50%, #60a5fa 70%, #3b82f6 100%)",
              backgroundSize: "200% auto",
              animation: "shimmer 4s ease-in-out infinite",
            }}
          >
            CLOUD CLUB
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-14"
        >
          Learn cloud computing, build real-world projects, and deploy on AWS.
          <br className="hidden sm:block" />
          <span className="text-gray-300">
            Your gateway to the cloud starts here.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#join"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-accent text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,45,120,0.4)] hover:scale-[1.02]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-pink-400 to-accent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient-shift_3s_ease_infinite]" />
            <span className="relative flex items-center gap-3">
              Join Us
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href="#events"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/15 text-gray-300 font-medium text-base backdrop-blur-sm hover:border-accent/40 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
          >
            Explore Events
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "200+", label: "Members" },
            { value: "30+", label: "Events" },
            { value: "15+", label: "Projects" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 sm:mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
