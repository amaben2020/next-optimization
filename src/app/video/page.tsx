"use client";
import MuxVideo from "@mux/mux-video-react";
import MuxVideos from "./../../components/video/MuxVideo";
const Video = () => {
  return (
    <div>
      <div className="w-[800px] h-[700px]">
        <MuxVideos
          resolution="HD"
          playbackId="uNbxnGLKJ00yfbijDO8COxTOyVKT01xpxW"
          // playbackId="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
          loading="eager"
        />
      </div>

      <MuxVideo
        style={{ height: "100%", width: "100%" }}
        playbackId="uNbxnGLKJ00yfbijDO8COxTOyVKT01xpxW"
        metadata={{
          video_id: "video-id-123456",
          video_title: "Super Interesting Video",
          viewer_user_id: "user-id-bc-789",
        }}
        streamType="on-demand"
        autoPlay
        muted
      />
    </div>
  );
};

export default Video;
