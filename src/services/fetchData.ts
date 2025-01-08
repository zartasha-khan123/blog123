"use server"

import { client } from "@/sanity/lib/client";

export async function fetchData(){
    const data = await client.fetch(`*[_type == 'landingpage'][0].sections[0]{cards[] {'image': image.asset->url,'heading': heading,'date': date,'description': description,'href': link }}`);

    return data;
}