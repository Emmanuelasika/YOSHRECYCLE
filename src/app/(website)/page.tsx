import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { HomeDefault } from "@/components/home/HomeDefault";

// Fetch homepage content from Sanity
async function getHomepageData() {
    try {
        const { data: rawData } = await sanityFetch({ query: HOMEPAGE_QUERY });
        return transformHomepageData(rawData);
    } catch (error) {
        console.warn("Failed to fetch homepage from Sanity:", error);
        return null;
    }
}

function transformHomepageData(data: any) {
    if (!data) return null;

    // Transform services list images
    const servicesList = data.servicesList?.map((service: any) => ({
        ...service,
        image: service.image ? urlFor(service.image).url() : null
    })) || [];

    // Transform why list images
    const whyList = data.whyList?.map((item: any) => ({
        ...item,
        img: item.image ? urlFor(item.image).url() : null
    })) || [];

    // Transform guide steps images
    const guideSteps = data.guideSteps?.map((item: any) => ({
        ...item,
        img: item.image ? urlFor(item.image).url() : null
    })) || [];

    // Transform products list images
    const productsList = data.productsList?.map((item: any) => ({
        ...item,
        img: item.image ? urlFor(item.image).url() : null
    })) || [];

    // Transform gallery images
    const galleryImages = data.galleryImages?.map((img: any) =>
        urlFor(img).width(800).height(600).url()
    ) || [];

    return {
        ...data,
        servicesList,
        whyList,
        guideSteps,
        productsList,
        galleryImages,
    };
}

export default async function Home() {
    const homepageData = await getHomepageData();

    return <HomeDefault data={homepageData} />;
}
