import DatoImage from "../datoimage";

interface Props {
  publisher: string;
  logo: {
    url: string;
    width?: number;
    height?: number;
  };
  title: string;
  link: string;
}

export default function Writing({ publisher, logo, title, link }: Props) {
  return (
    <div className="flex gap-x-6 px-6 py-4 items-center">
      <div className="h-16 w-16 min-w-16 flex justify-center">
        <DatoImage
          unoptimized={logo.url.endsWith(".svg")}
          aria-hidden="true"
          className="object-contain"
          src={logo.url}
          width={logo.width}
          height={logo.height}
          alt={publisher + " logo"}
        />
      </div>
      <div className="grid">
        <a
          className="hover:underline text-radix-cyan11 font-semibold"
          href={link}
        >
          {title}
        </a>
        <span className="text-radix-slate11">{publisher}</span>
      </div>
    </div>
  );
}
