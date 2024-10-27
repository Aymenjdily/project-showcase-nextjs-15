import { defineLive } from "next-sanity";
import "server-only";

import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({ client });
