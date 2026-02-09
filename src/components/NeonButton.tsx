import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  variant?: "cyan" | "magenta" | "purple";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  href?: string;
  external?: boolean;
}

const NeonButton = ({
  children,
  variant = "cyan",
  size = "md",
  onClick,
  className = "",
  href,
  external,
}: NeonButtonProps) => {
  const colorMap = {
    cyan: {
      border: "border-neon-cyan",
      text: "text-neon-cyan",
      bg: "from-neon-cyan/20 to-neon-cyan/5",
      glow: "hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.4)]",
      shimmer: "via-neon-cyan/40",
    },
    magenta: {
      border: "border-neon-magenta",
      text: "text-neon-magenta",
      bg: "from-neon-magenta/20 to-neon-magenta/5",
      glow: "hover:shadow-[0_0_30px_hsl(300_100%_50%_/_0.4)]",
      shimmer: "via-neon-magenta/40",
    },
    purple: {
      border: "border-neon-purple",
      text: "text-neon-purple",
      bg: "from-neon-purple/20 to-neon-purple/5",
      glow: "hover:shadow-[0_0_30px_hsl(270_100%_60%_/_0.4)]",
      shimmer: "via-neon-purple/40",
    },
  };

  const sizeMap = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const colors = colorMap[variant];
  const sizeClasses = sizeMap[size];

  const buttonContent = (
    <motion.span
      className={`relative inline-flex items-center justify-center gap-2 font-orbitron font-semibold uppercase tracking-wider rounded-lg border-2 ${colors.border} ${colors.text} ${sizeClasses} bg-gradient-to-br ${colors.bg} ${colors.glow} transition-all duration-300 overflow-hidden group ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer effect */}
      <span
        className={`absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent ${colors.shimmer} to-transparent`}
      />
      {/* Spark effect on corners */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
};

export default NeonButton;
