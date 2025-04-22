"use client";
interface ReviewHeaderProps {
  date: string;
}

export default function ReviewHeader({ date }: ReviewHeaderProps) {
  return (
    <div className="mb-8 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        Review for {date}
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
    </div>
  );
}
