import Bounded from "@/app/components/Bounded";
import ButtonLink from "@/app/components/ButtonLink";
import StarGrid from "@/app/components/StarGrids";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      className="text-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default Hero;
