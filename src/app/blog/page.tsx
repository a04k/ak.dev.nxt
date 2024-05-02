import DefCard from "../Components/defaultCards";

export default function blog() {

  return (
    // obviously i wont be adding these posts statically, ill fetch then map once i figure out cms and the dbs
    <main>
      <h1 className="text-5xl font-amarga text-emerald-700 mb-12">blog</h1>
      <div className="ml-4">
        <h1 className="font-spmB text-2xl text-amber-300 mb-12">latest posts:</h1>
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
