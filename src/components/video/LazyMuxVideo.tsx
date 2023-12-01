"use client";

import Image from "next/image";
import useInView from "~/hooks/useInView";
import Video, { VideoProps } from "./Video";

export default function LazyLoadedVideo(props: VideoProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      {!inView ? (
        <Image
          ref={ref as React.RefObject<HTMLImageElement>}
          alt={"Video poster"}
          src={props.poster ?? ""}
          className={props.className}
          style={props.style}
          loading={"lazy"}
          layout="fill"
        />
      ) : (
        <Video {...props} />
      )}
    </>
  );
}
