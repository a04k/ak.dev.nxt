interface BlogCardProps {
  href: string;
  link: string;
  name: string;
  info: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  href,
  link,
  name,
  info,
  date,
}) => {
  return (
    <a href={href} target={link} rel="noopener noreferrer">
      <div className="flex flex-col justify-between h-full min-h-[200px] ma group rounded-lg border border-transparent px-4 py-6 transition-colors hover:border-orange-600 dark:hover:border-dr hover:dark:bg-dPurp-800">
        <h2 className="mb-4 text-2xl text-beige-100 font-spmI">
          {name}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="mb-4 text-sm opacity-75 text-beige-100 font-spm line-clamp-3 overflow-hidden text-ellipsis">
          {info}
        </p>
        <div className="mt-auto text-sm text-beige-100 opacity-80">
          <p>{date}</p>
        </div>
      </div>
      
    </a>
  );
};

export default BlogCard;
