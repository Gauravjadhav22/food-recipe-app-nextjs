import {ThumbUpIcon} from "@heroicons/react/outline"

const Recipe=async()=> {
  return (
    <div className="cursor-pointer p-2 group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" >
  {/* <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
      
        }
      /> */}
      <div className="p-2">
        <p className="truncate max-w-md">{result}</p>//description
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result || result} //title
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 cursor-pointer">
          {result&& `${result}`}//info
          {result || result}//date
          <ThumbUpIcon className="h-5 mx-2" /> {result}//like count
        </p>
      </div>
    </div>
  )
}

export default Recipe