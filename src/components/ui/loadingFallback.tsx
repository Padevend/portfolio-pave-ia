import { Loader2 } from "lucide-react";
import { useMemo } from "react";

const LoadingFallback = () => {
  return useMemo(()=>(
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="text-neural-500 animate-spin" size={36} strokeWidth={1.5} />
        </div>
      </div>
  ), [])
};

export default LoadingFallback;