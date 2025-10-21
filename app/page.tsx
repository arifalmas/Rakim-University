import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { buttonVariants } from "@/components/ui/button";
import { cn, sortPosts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-32 md:pb-12 md:mt-10  lg:py-48">
        <div className="container flex flex-col gap-4 text-center">
          <div className="flex justify-center mt-[-110px] mb-4">
            <Image
              src="/2024-10-12.jpg"
              width={600}
              height={600}
              alt="Picture of the author"
              className="flex justify-center items-center"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Rakim University
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-2xl text-balance">
            THE BLACK HOLE PAIR CREATION <br />
            Rakim University announces new definition
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full mt-8 sm:w-fit"
              )}
            >
              View doctrine
            </Link>
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              X
            </Link> */}
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className="first:border-t first:border-border"
                >
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </>
  );
}
