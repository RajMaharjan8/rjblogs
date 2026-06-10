import {
  Blog,
  BlogDetail,
  Category,
  DatoBlog,
  QuickLink,
} from "./interfaces";
import { performRequest } from "./services/baseQuery";
import { getAllBlogs } from "./services/getAllBlogs";
import { getCategories } from "./services/getAllCategories";
import { getQuickLinks } from "./services/getQuickLinks";
import { blogDetail } from "./services/getBlogDetail";

export function dastToText(field: any): string {
  const node = field?.value?.document;
  if (!node) return "";
  const walk = (n: any): string =>
    n.value ?? (n.children ?? []).map(walk).join("");
  return walk(node).trim();
}

export function convertDateFormat(date: string) {
  const d = new Date(date);
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export async function fetchBlogs(
  total: number,
  search: string | null,
  category_id: string | null,
): Promise<Blog[]> {
  try {
    const data = (await performRequest({
      query: getAllBlogs(
        total ? total : 40,
        search ?? null,
        category_id ?? null,
      ),
    })) as { allBlogs: DatoBlog[] };

    return (data?.allBlogs ?? []).map(
      (b): Blog => ({
        id: b.id,
        title: b.title,
        slug: b.slug,
        excerpt: dastToText(b.excerpt),
        thumbnailUrl: b.thumbnail?.url ?? null,
        author: b.author,
        date: b._createdAt,
        tags: b.category,
        _createdAt: b._createdAt,
      }),
    );
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
    return [];
  }
}

export async function fetchCategories() {
  try {
    const data = (await performRequest({
      query: getCategories(),
    })) as { allCategories: Category[] };
    return data?.allCategories;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchQuickLinks() {
  try {
    const data = (await performRequest({
      query: getQuickLinks(),
    })) as { allFooterLists: QuickLink[] };
    return data?.allFooterLists;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchSingleBlog(slug: string) {
  try {
    const data = (await performRequest({
      query: blogDetail(slug),
    })) as { blog: BlogDetail };
    return data?.blog ?? [];
  } catch (err) {
    console.log(err);
  }
}
