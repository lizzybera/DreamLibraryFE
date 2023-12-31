import { useQuery } from "@tanstack/react-query"
import { viewBooks } from "../../Api/BookApi"
// import { addBook } from "../../Api/AddBooks"

const HomeScreen = () => {

  const {data : books } = useQuery({
    queryKey : ["tasks"],
    queryFn : viewBooks,
    refetchInterval : 1000
  })

  return (
    // container
    <div className="w-full flex justify-center min-h-[100vh] p-3">
      {/* main */}
      <div className="w-[90%] h-[500px] flex flex-wrap">

        {/* card */}
        
        {
          books?.map((props : any)=>(
                <div key={props._id}>
                  <div className="w-[260px] border-[2px] h-[250px] rounded-md border-slate-300 flex flex-col justify-between mr-[20px] mt-4">
{/* image */}
         <img className="w-full h-[60%] bg-purple-600 object-cover rounded-tl-md rounded-tr-md" src={props.avatar} />
{/* title */}
          <div className="w-full px-3 font-bold text-purple-950">
           {/* {title}  */}
           {/* Lorem, ipsum dolor. */}
           {props.title}
          </div>
{/* desc */}
          <div className="w-full px-3 text-purple-900">
           {props.desc}
          </div>
{/* button */}
          <button className="w-full h-[30px] bg-purple-600 mt-2 rounded-b-md cursor-pointer"
          onClick={()=>{
            // addBook
          }}
          >Add Book</button>

        </div>
                </div>
          ))
        } 

      </div>
    </div>
  )
}

export default HomeScreen