import TimelineIcon from "./timelineicon";

function Description({ title, date, description }) {
  return (
    <>
      <div className="flex justify-between">
        <h3
          className="font-medium "
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="pl-4 text-sm tracking-wide text-nord-2 dark:text-white text-right">
          {new Date(date).toLocaleString("en-gb", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="text-gray-700 dark:text-gray-300">{description}</div>
    </>
  );
}

export default function TimeLineItem({ data }) {
  return (
    <li>
      <div className="pb-8 relative flex items-start space-x-3">
        <TimelineIcon type={data.category} />
        <div className="min-w-0 flex-1 z-10 w-64">
          <Description
            title={data.title}
            date={data.date}
            description={data.description}
          />
        </div>
      </div>
    </li>
  );
}
