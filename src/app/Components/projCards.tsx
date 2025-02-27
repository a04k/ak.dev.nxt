interface ProjCardProps {
  href: string;
  link: string;
  name: string;
  info: string;
}

const ProjCard: React.FC<ProjCardProps> = ({ href, link, name, info }) => {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-4 py-5 transition-colors hover:border-orange-600 hover:bg-beige-200 dark:hover:border-dr hover:dark:bg-dPurp-800 hover:dark:opacity-85"
      target={link}
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl">
        {name}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 md:max-w-[30ch] text-[13px] opacity-75">{info}</p>
    </a>
  );
};

export default ProjCard;
