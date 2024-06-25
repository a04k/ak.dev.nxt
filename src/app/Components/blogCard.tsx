interface BlogCardProps {
  href: string;
  link: string;
  name: string;
  info: string;
  date: string;
}

const BlogCard: React.FC<DefCardProps> = ({ href, link, name, info, date }) => {
  return (
    <a href={href} target={link} rel="noopener noreferrer">
      <div className="min-h-[169px] max-w-[600px] group rounded-lg border border-transparent px-4 py-6 transition-colors hover:border-orange-600 dark:hover:border-dr hover:dark:bg-dPurp-800 hover:dark:opacity-85">
          <h2 className="mb-6 text-2xl">
            {name}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-75">{info}</p>
          <p className ="mt-2 text-sm opacity-75">{date}</p>
      </div>
    </a>
    
  );
};

export default BlogCard;
