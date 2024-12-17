import { createClient, SanityClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client: SanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
