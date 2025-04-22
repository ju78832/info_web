import { format } from "date-fns";
import ReviewHeader from "@/components/ReviewHeader";
import ReviewForm from "@/components/ReviewForm";

export default function Index() {
  const currentDate = format(new Date(), "MMMM dd, yyyy");

  return (
    <div className="min-h-screen bg-gray-900 font-poppins">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <ReviewHeader date={currentDate} />
        <ReviewForm />
      </div>
    </div>
  );
}
