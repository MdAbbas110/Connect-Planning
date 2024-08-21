"use client";

import { Content } from "@prismicio/client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";

import {
  FaDigitalOcean,
  FaCloudflare,
  FaGithub,
  FaNpm,
  FaFly,
  FaFigma,
} from "react-icons/fa6";

const AnimatedContent = ({ slice }: { slice: Content.IntegrationsSlice }) => {
  const container = useRef(null);
  const prefersReduceMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const icons: any = {
    cloudflare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    digitalOcean: <FaDigitalOcean />,
    fly: <FaFly />,
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      // Animating the main center logo of to glow
      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      //Animating the line between the icons
      tl.to(
        ".signal-line",
        {
          keyframes: [
            {
              backgroundPosition: "0%, 0%",
            },
            {
              backgroundPosition: "100%, 100%",
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      // Animating each logo present to glow
      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },

            {
              opacityL: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="mt-20 flex flex-col items-center md:flex-row"
    >
      {slice.primary.icons.map((item, index) => (
        //showing up the icons
        <React.Fragment key={index}>
          {index === Math.floor(slice.primary.icons.length / 2) && (
            <>
              <StylizedLogoMark />
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border-blue-50/30 bg-blue-50/50 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
            {item.icons && icons[item.icons]}
          </div>

          {/* drawing the line  */}
          {index !== slice.primary.icons.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(slice.primary.icons.length / 2)
                  ? "rotate-180"
                  : "rotate-0",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnimatedContent;
