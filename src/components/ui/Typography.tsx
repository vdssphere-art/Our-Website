import React from "react";

export type HeadingLevel = 1 | 2 | 3 | 4;
export type HeadingSize = "xl" | "lg" | "md";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

/**
 * GLOBAL HEADING COMPONENT
 * Modifying default styles here or in globals.css will propagate across all page sections globally!
 */
export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  size,
  children,
  className = "",
  gradient = false,
  ...props
}) => {
  // Determine tag element safely for TS
  const Tag: React.ElementType =
    level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4";

  // Auto-select size based on heading level if size is not explicitly passed
  const calculatedSize: HeadingSize =
    size || (level === 1 ? "xl" : level === 2 ? "lg" : "md");

  const sizeClasses: Record<HeadingSize, string> = {
    xl: "vds-heading-xl",
    lg: "vds-heading-lg",
    md: "vds-heading-md",
  };

  const gradientClass = gradient
    ? "bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
    : "";

  return (
    <Tag
      className={`${sizeClasses[calculatedSize]} ${gradientClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
};

interface SubheadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * GLOBAL SUBHEADING COMPONENT
 * Modifying default styles here or in globals.css will propagate across all page sections globally!
 */
export const Subheading: React.FC<SubheadingProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p className={`vds-subheading ${className}`.trim()} {...props}>
      {children}
    </p>
  );
};

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

/**
 * REUSABLE SECTION HEADER COMPONENT
 * Standardizes section titles across all landing page sections
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={`flex flex-col max-w-3xl mb-12 ${alignClasses[align]} ${className}`.trim()}
    >
      {badge && (
        <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full mb-4 inline-block">
          {badge}
        </span>
      )}
      <Heading level={2} size="lg" className="mb-4">
        {title}
      </Heading>
      {subtitle && <Subheading>{subtitle}</Subheading>}
    </div>
  );
};
