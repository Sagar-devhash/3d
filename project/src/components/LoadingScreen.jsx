import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
    const [started, setStarted] = useState(false); // Initialize started state
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setStarted(true);
        }
    }, [progress]);

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-1000 pointer-events-none flex items-center justify-center bg-indigo-50 ${
                started ? "opacity-0" : "opacity-100"
            }`}
        >
            <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
                <div
                    className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                    }}
                >
                    Sagar Bisht
                </div>
                <div className="opacity-40">Sagar Bisht</div>
            </div>
        </div>
    );
};
