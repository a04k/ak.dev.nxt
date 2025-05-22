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
      className="group rounded-lg border border-orange-900/30 dark:border-petronas-900 md:border md:border-orange-800/70 dark:md:border-petronas-900 
        px-4 py-5 transition-colors 
        hover:border-orange-600 hover:bg-beige-200 
        dark:hover:border-petronas-600 hover:dark:bg-black/40 hover:dark:opacity-85"
      target={link}
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl text-orange-800 dark:text-petronas-200">
        {name}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 md:max-w-[40ch] text-[13px] opacity-85 hover:opacity:100">{info}</p>
    </a>
  );
};

export default ProjCard;
