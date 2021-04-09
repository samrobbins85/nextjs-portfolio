import Image from "next/image";

function normalizeSrc(src) {
  return src[0] === "/" ? src.slice(1) : src;
}

function imgixLoader({ src, width, quality }) {
  const params = ["auto=format", "fit=max", `w=${width}`];
  let paramsString = "";
  if (quality) {
    params.push(`q=${quality}`);
  }

  if (params.length) {
    paramsString = `?${params.join("&")}`;
  }
  return `${normalizeSrc(src)}${paramsString}`;
}

export default function DatoImage(props) {
  return <Image loader={imgixLoader} {...props} />;
}
