import { Extrapolation, interpolate } from "react-native-reanimated";
import type { IComputedDirectionTypes } from "react-native-reanimated-carousel";

interface TBaseConfig {
  size: number;
  vertical: boolean;
}

export interface ILayoutConfig {

  parallaxScrollingOffset?: number;

  parallaxScrollingScale?: number;

  parallaxAdjacentItemScale?: number;
}

export type TParallaxModeProps = IComputedDirectionTypes<{
  /**
   * Carousel Animated transitions.
   */
  mode?: "parallax";
  modeConfig?: ILayoutConfig;
}>;

export function parallaxLayout(baseConfig: TBaseConfig, modeConfig: ILayoutConfig = {}) {
  const { size, vertical } = baseConfig;
  const {
    parallaxScrollingOffset = 100,
    parallaxScrollingScale = 0.8,
    parallaxAdjacentItemScale = parallaxScrollingScale ** 2,
  } = modeConfig;

  return (value: number) => {
    "worklet";
    const translate = interpolate(
      value,
      [-1, 0, 1],
      [-size + parallaxScrollingOffset, 0, size - parallaxScrollingOffset]
    );

    const zIndex = interpolate(value, [-1, 0, 1], [0, size, 0], Extrapolation.CLAMP);

    const scale = interpolate(
      value,
      [-1, 0, 1],
      [parallaxAdjacentItemScale, parallaxScrollingScale, parallaxAdjacentItemScale],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        vertical
          ? {
              translateY: translate,
            }
          : {
              translateX: translate,
            },
        {
          scale,
        },
      ],
      zIndex,
    };
  };
}