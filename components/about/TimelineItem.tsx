import Trophy from "@/components/svg/trophy";
import { MortarBoardIcon } from "@primer/octicons-react";
import Pass from "@/components/svg/pass";
import Podium from "@/components/svg/podium";
import { CodeIcon, PencilIcon, HeartIcon } from "@heroicons/react/solid";

function TimelineIcon({ type }: { type: string }) {
  switch (type) {
    case "Event":
      return (
        <Pass
          aria-hidden="true"
          className="text-nord2 dark:text-nord4 h-6 w-6"
        />
      );
    case "Education":
      return (
        <MortarBoardIcon
          aria-hidden="true"
          size={16}
          className="text-nord15 h-6 w-6"
        />
      );
    case "Hackathon":
      return <CodeIcon aria-hidden="true" className="text-nord10 h-6 w-6" />;
    case "Award":
      return <Trophy aria-hidden="true" className="text-nord13 h-6 w-6" />;
    case "Speaking":
      return <Podium aria-hidden="true" className="text-nord11 h-6 w-6" />;
    case "Writing":
      return <PencilIcon aria-hidden="true" className="text-nord12 h-6 w-6" />;
    case "Volunteering":
      return <HeartIcon aria-hidden="true" className="text-nord11 h-6 w-6" />;
    default:
      return (
        <CodeIcon
          aria-hidden="true"
          className="text-blue-700 dark:text-blue-200 h-6 w-6"
        />
      );
  }
}

interface Props {
  category: string;
  link?: string;
  title: string;
  date: string;
  description: string;
}

export default function TimeLineItem({
  category,
  link,
  title,
  date,
  description,
}: Props) {
  return (
    <li>
      <div className="pb-8 relative flex items-start space-x-3">
        <TimelineIcon type={category} />
        <div className="min-w-0 flex-1 z-10 w-64">
          <div className="flex justify-between">
            {link ? (
              <a className="hover:underline text-radix-cyan11" href={link}>
                <h3 className="font-medium">{title}</h3>
              </a>
            ) : (
              <h3 className="font-medium">{title}</h3>
            )}
            <p className="pl-4 text-sm tracking-wide text-radix-slate12 text-right">
              {new Date(date).toLocaleString("en-gb", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="text-radix-slate11">{description}</div>
        </div>
      </div>
    </li>
  );
}