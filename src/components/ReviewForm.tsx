"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Loader, Star } from "lucide-react";
import SuccessScreen from "./SuccessScreen";
import axios from "axios";
import type { Review, ReviewFormErrors } from "@/types/review";

export default function ReviewForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ReviewFormErrors>({});

  const [review, setReview] = useState<Review>({
    name: "",
    selfRating: 1,
    achievements: "",
    challenges: "",
    goals: "",
    feedback: "",
    dreamTeam: "",
    improvement: "",
  });

  const validateForm = (): boolean => {
    const newErrors: ReviewFormErrors = {};

    if (!review.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!review.achievements.trim()) {
      newErrors.achievements = "Please share at least one achievement";
    }

    if (!review.goals.trim()) {
      newErrors.goals = "Please set at least one goal";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/formdata", review);

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your daily review has been submitted.",
          duration: 3000,
        });
        setIsSubmitted(true);
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
    setReview({
      name: "",
      selfRating: 1,
      achievements: "",
      challenges: "",
      goals: "",
      feedback: "",
      dreamTeam: "",
      improvement: "",
    });
  };

  if (isSubmitted) {
    return <SuccessScreen onReset={handleReset} />;
  }

  const handleChange =
    (field: keyof Review) =>
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setReview((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear error when user starts typing
      if (field !== "selfRating" && errors[field as keyof ReviewFormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleRatingClick = (rating: number) => {
    setReview((prev) => ({ ...prev, selfRating: rating }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            Your Name *
          </label>
          <Input
            id="name"
            placeholder="Enter your name..."
            className={`bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.name ? "border-red-500" : ""
            }`}
            value={review.name}
            onChange={handleChange("name")}
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Rate Your Day (1-5)
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => handleRatingClick(rating)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  review.selfRating >= rating
                    ? "text-yellow-400 transform hover:scale-110"
                    : "text-gray-500 hover:text-gray-400"
                }`}
              >
                <Star className="h-6 w-6 fill-current" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="achievements"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            What did you achieve today? *
          </label>
          <Textarea
            id="achievements"
            placeholder="List your accomplishments..."
            className={`min-h-[100px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.achievements ? "border-red-500" : ""
            }`}
            value={review.achievements}
            onChange={handleChange("achievements")}
          />
          {errors.achievements && (
            <p className="mt-1 text-sm text-red-500">{errors.achievements}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="challenges"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            What challenges or blockers did you face? *
          </label>
          <Textarea
            id="challenges"
            placeholder="Describe any obstacles..."
            className={`min-h-[100px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.challenges ? "border-red-500" : ""
            }`}
            value={review.challenges}
            onChange={handleChange("challenges")}
          />
          {errors.challenges && (
            <p className="mt-1 text-sm text-red-500">{errors.challenges}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="dreamTeam"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            If you were to start a startup, describe your ideal 7-member team *
          </label>
          <Textarea
            id="dreamTeam"
            placeholder="Describe the roles, skills, and personalities you'd want in your dream team..."
            className={`min-h-[100px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.dreamTeam ? "border-red-500" : ""
            }`}
            value={review.dreamTeam}
            onChange={handleChange("dreamTeam")}
          />
          {errors.dreamTeam && (
            <p className="mt-1 text-sm text-red-500">{errors.dreamTeam}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="improvement"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            What&quot;s one thing you would improve about yourself if you could?
            *
          </label>
          <Textarea
            id="improvement"
            placeholder="Share your thoughts on personal growth..."
            className={`min-h-[100px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.improvement ? "border-red-500" : ""
            }`}
            value={review.improvement}
            onChange={handleChange("improvement")}
          />
          {errors.improvement && (
            <p className="mt-1 text-sm text-red-500">{errors.improvement}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="goals"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            What&quot;s your main goal for tomorrow? *
          </label>
          <Textarea
            id="goals"
            placeholder="Set your primary objective..."
            className={`min-h-[100px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.goals ? "border-red-500" : ""
            }`}
            value={review.goals}
            onChange={handleChange("goals")}
          />
          {errors.goals && (
            <p className="mt-1 text-sm text-red-500">{errors.goals}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            Any ideas, feedback, or thoughts you&quot;d like to share? *
          </label>
          <Textarea
            id="feedback"
            placeholder="Share your thoughts..."
            className={`min-h-[100px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.feedback ? "border-red-500" : ""
            }`}
            value={review.feedback}
            onChange={handleChange("feedback")}
          />
          {errors.feedback && (
            <p className="mt-1 text-sm text-red-500">{errors.feedback}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin" size={18} />
            <span>Submitting...</span>
          </>
        ) : (
          "Submit Review"
        )}
      </Button>

      <p className="text-gray-400 text-sm italic text-center mt-8">
        &quot;Small steps every day lead to big results.&quot;
      </p>
    </form>
  );
}
