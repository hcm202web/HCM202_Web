import React from 'react';

interface CircularProgressBarProps {
    progress: number; // Progress percentage (0 - 100)
    size?: number; // Diameter of the circle
}

const ProcessBarIcon: React.FC<CircularProgressBarProps> = ({
    progress,
    size = 19, // Default size based on your SVG
}) => {
    const strokeWidth = 1.425; // Adjusted based on your SVG path stroke
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 19 19`} fill="none">
            <circle
                cx="9.5"
                cy="9.5"
                r={radius}
                fill="none"
                stroke="#BBBBBB"
                strokeWidth={strokeWidth}
            />
            <circle
                cx="9.5"
                cy="9.5"
                r={radius}
                fill="none"
                stroke="#5584FF"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(90 9.5 9.5)"
            />
            {/* <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="text-gray-700 font-semibold"
                fontSize="4px"
            >
                {progress}%
            </text> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" x="2" y="2" viewBox="0 0 15 15" fill="none">
                <path d="M11.4374 3.56874C11.3796 3.5108 11.3109 3.46483 11.2353 3.43347C11.1597 3.4021 11.0786 3.38596 10.9968 3.38596C10.9149 3.38596 10.8339 3.4021 10.7583 3.43347C10.6826 3.46483 10.614 3.5108 10.5561 3.56874L7.49989 6.61874L4.44365 3.56249C4.38578 3.50462 4.31709 3.45872 4.24149 3.42741C4.16588 3.39609 4.08485 3.37997 4.00302 3.37997C3.92119 3.37997 3.84016 3.39609 3.76456 3.42741C3.68895 3.45872 3.62026 3.50462 3.5624 3.56249C3.50453 3.62035 3.45863 3.68904 3.42732 3.76465C3.396 3.84025 3.37988 3.92128 3.37988 4.00311C3.37988 4.08494 3.396 4.16597 3.42732 4.24158C3.45863 4.31718 3.50453 4.38587 3.5624 4.44374L6.61865 7.49999L3.5624 10.5562C3.50453 10.6141 3.45863 10.6828 3.42732 10.7584C3.396 10.834 3.37988 10.915 3.37988 10.9969C3.37988 11.0787 3.396 11.1597 3.42732 11.2353C3.45863 11.3109 3.50453 11.3796 3.5624 11.4375C3.62026 11.4953 3.68895 11.5412 3.76456 11.5726C3.84016 11.6039 3.92119 11.62 4.00302 11.62C4.08485 11.62 4.16588 11.6039 4.24149 11.5726C4.31709 11.5412 4.38578 11.4953 4.44365 11.4375L7.49989 8.38124L10.5561 11.4375C10.614 11.4953 10.6827 11.5412 10.7583 11.5726C10.8339 11.6039 10.9149 11.62 10.9968 11.62C11.0786 11.62 11.1596 11.6039 11.2352 11.5726C11.3108 11.5412 11.3795 11.4953 11.4374 11.4375C11.4953 11.3796 11.5412 11.3109 11.5725 11.2353C11.6038 11.1597 11.6199 11.0787 11.6199 10.9969C11.6199 10.915 11.6038 10.834 11.5725 10.7584C11.5412 10.6828 11.4953 10.6141 11.4374 10.5562L8.38114 7.49999L11.4374 4.44374C11.6749 4.20624 11.6749 3.80624 11.4374 3.56874Z" fill="#BBBBBB" />
            </svg>
        </svg>
    );
};

export default ProcessBarIcon;