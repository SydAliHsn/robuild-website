import { Article } from "@/types/article";
import { getStoryblokApi, storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_SPACE_ACCESS_TOKEN,
  use: [apiPlugin],
});

export const getAllArticles = async (): Promise<Article[]> => {
  let per_page = 100;

  const storyblokApi = getStoryblokApi();
  const { total } = await storyblokApi.get("cdn/stories", {
    per_page: 1,
    starts_with: "articles",
  });
  const totalRequests = Math.ceil(total / per_page);

  const requests = Array(totalRequests)
    .fill("")
    .map((_, i) =>
      getStories({ page: i + 1, per_page, starts_with: "articles" }),
    );

  const [articleStories] = await Promise.all(requests);

  return articleStories.map((story: any) => {
    const { slug, published_at, content } = story;
    const { title, cover_image, article_content, tags, short_description } =
      content;

    return {
      slug,
      publishedAt: new Date(published_at),
      title,
      coverImage: cover_image.filename,
      content: article_content,
      tags: tags?.split(",").map((tag: string) => tag.trim()) || [],
      shortDescription: short_description,
    };
  });
};

const getStories = async ({
  page,
  per_page,
  starts_with,
}: {
  page: number;
  per_page: number;
  starts_with: string;
}) => {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    per_page,
    page,
    starts_with,
  });

  return data.stories;
};
