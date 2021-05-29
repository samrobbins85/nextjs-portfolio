import DatoImage from "@/components/datoimage";
import TimeLineItem from "@/components/about/timeline";
import { useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { render } from "datocms-structured-text-to-html-string";
import Layout from "@/components/layout";
import { getAbout } from "../lib/datocms";

function Article({ image, publisher, link, title, description }) {
  return (
    <div className="flex">
      <div className="h-12 w-12 mr-2">
        <DatoImage
          height={image.height}
          width={image.width}
          src={image.url}
          alt={publisher}
        />
      </div>
      <div className="grid">
        <a
          href={link}
          className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 hover:underline flex items-baseline gap-x-1"
        >
          {title}
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
        <span className="text-gray-600 dark:text-gray-300">{description}</span>
      </div>
    </div>
  );
}

export default function Home({ about }) {
  const [expand, setExpand] = useState(false);
  return (
    <Layout title="About" description="About me">
      <h1 className="text-5xl font-semibold pb-4 text-center text-nord-10 dark:text-nord-8">
        About
      </h1>
      <div className="flex justify-center">
        <div className="border px-6 py-4 rounded text-lg bg-nord-6 dark:bg-dark-contrast dark:border-gray-800 text-center">
          For more details, check out my{" "}
          <a
            className="border-b-2 border-cyan-400"
            href="https://cv.samrobbins.uk"
          >
            CV
          </a>{" "}
          or{" "}
          <a
            className="border-b-2 border-cyan-400"
            href="https://www.polywork.com/samrobbins"
          >
            Polywork
          </a>
        </div>
      </div>
      <h2 className="text-3xl font-semibold py-6 text-nord-10 dark:text-nord-8">
        Published Articles
      </h2>
      <div className="grid">
        {about.articles.map((x) => (
          <Article
            image={x.logo}
            publisher={x.publisher}
            link={x.link}
            title={x.title}
            description={x.description}
            key={x.title}
          />
        ))}
      </div>
      <h2 className="text-3xl font-semibold py-6 text-nord-10 dark:text-nord-8">
        Timeline
      </h2>
      <ul className="px-1">
        {about.timeline
          .slice(0, expand ? about.timeline.length : 5)
          .map((item) => (
            <TimeLineItem data={item} key={item.description} />
          ))}
      </ul>
      {!expand && (
        <div className="flex justify-center">
          <button
            className="flex items-center"
            type="button"
            onClick={() => setExpand(true)}
          >
            <ChevronDownIcon aria-hidden="true" className="mr-2" size={16} />
            <span>Show more</span>
          </button>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await getAbout();
  // I think this is no longer necessary, but better safe than sorry
  about.timeline = about.timeline
    .sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (b.date > a.date) {
        return -1;
      }
      return 0;
    })
    .reverse();

  about.timeline.forEach((item, index) => {
    about.timeline[index].title = render(item.title);
  });
  return {
    props: { about },
  };
}
