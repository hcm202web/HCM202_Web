import { useLottie } from "lottie-react";
import { CSSProperties } from "react";

interface lottiePlayerProps {
  animationData: any;
  style?: CSSProperties;
}

export default function LottiePlayer(Props: lottiePlayerProps) {
  const { animationData, style } = Props;
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions, style);
  return <>{View}</>;
}
