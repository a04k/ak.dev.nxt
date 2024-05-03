import DefCard from "../Components/defaultCards";

export default function blog() {

  return (
    // obviously i wont be adding these posts statically, ill fetch then map once i figure out cms and the dbs
    <main className="">
      <div className="ml-4">
        <h1 className="font-amarga text-6xl dark:text-amber-300 text-amber-600  mb-12">latest posts:</h1>
        <div className="lpContainer grid grid-cols-1 gap-8 font-spmR">
          <DefCard 
            href="{postId}"
            link="_blank"
            name="{title}"
            info="{summary}"
          />
          <DefCard 
            href="{postId}"
            link="_blank"
            name="{title}"
            info="{summary}"
          />
          <DefCard 
            href="{postId}"
            link="_blank"
            name="{title}"
            info="{summary}"
          />
          <DefCard 
            href="{postId}"
            link="_blank"
            name="{title}"
            info="{summary}"
          />
        </div>
      </div>
    </main>
  )
}
