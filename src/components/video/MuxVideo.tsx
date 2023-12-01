import { unstable_getImgProps as getImgProps } from "next/image";
import { preload } from "react-dom";

type Props = {
  playbackId: string;
  loading: "lazy" | "eager";
  resolution: "SD" | "HD";
};

export default function MuxVideo({ playbackId, loading, resolution }: Props) {
  const mp4Url = `https://stream.mux.com/${playbackId}/${
    resolution === "SD" ? "medium" : "high"
  }.mp4`;

  const webmUrl = `https://stream.mux.com/${playbackId}/${
    resolution === "SD" ? "medium" : "high"
  }.webm`;

  // Use `getImgProps` to convert the video poster image to WebP
  const {
    props: { src: poster },
  } = getImgProps({
    src: `https://image.mux.com/${playbackId}/thumbnail.webp?fit_mode=smartcrop&time=0`,
    alt: "",
    fill: true,
  });

  // Preload the poster when applicable
  if (loading === "eager") {
    preload(poster, {
      as: "image",
      fetchPriority: "high",
    });
  }

  return (
    <video
      autoPlay
      playsInline
      loop
      controls={false}
      muted
      preload="none"
      style={{ minHeight: "100%", minWidth: "100%" }}
    >
      <source src={mp4Url} type="video/mp4" />
      <source src={webmUrl} type="video/webm" />
    </video>
  );
}
