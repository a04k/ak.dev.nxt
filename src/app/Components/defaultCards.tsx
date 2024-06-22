const DefCard = ({
  href,
  link,
  name,
  info,
}: {
  href: string;
  link: string;
  name: string;
  info: string;
}) => {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-4 py-5 transition-colors hover:border-orange-600 hover:bg-beige-200 dark:hover:border-dr-100 hover:dark:bg-dPurp-800 hover:dark:opacity-85"
      target={link}
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl">
        {name}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-85">{info}</p>
    </a>
  );
};

export default DefCard;
