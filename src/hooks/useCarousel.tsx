import { BannerPropsResponse } from "@/types/bannerResponseType";
import { BannerProps } from "@/types/bannerType";
import { api } from "@/utils/api";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useCarousel() {
  const [banner, setBanner] = useState<BannerProps[]>([]);

  useEffect(() => {
    api.get<BannerPropsResponse>("/banner").then((response) => {
      setBanner(response.data.carousel);
    });
  }, []);

  return { banner };
}
