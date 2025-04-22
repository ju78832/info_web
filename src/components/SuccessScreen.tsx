"use client";
import { Smile } from "lucide-react";
import { Button } from "./ui/button";

interface SuccessScreenProps {
  onReset: () => void;
}

export default function SuccessScreen({ onReset }: SuccessScreenProps) {
  return (
    <div className="text-center space-y-6 animate-fade-in">
      <Smile className="w-20 h-20 text-yellow-400 mx-auto" />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Thank you for your daily reflection!
        </h2>

        <p className="text-gray-400">
          &quot;The only way to do great work is to love what you do.&quot; -
          Steve Jobs
        </p>
      </div>

      <Button
        onClick={onReset}
        className="mt-8 bg-purple-600 hover:bg-purple-700"
      >
        Write Another Review
      </Button>
    </div>
  );
}
