import {SlArrowLeft, SlArrowRight} from "react-icons/sl/index.js";
import {BsThreeDots} from "react-icons/bs/index.js";

export default function Paginate() {
  const {default: ReactPaginate} = require('react-paginate');
  return (
    <div>
      <ReactPaginate
        nextLabel={<span className='text-sm'><SlArrowRight/></span>}
        marginPagesDisplayed={2}
        pageCount={10}
        previousLabel={<span className='text-sm'><SlArrowLeft/></span>}
        pageClassName="w-9 h-9 flex items-center justify-center mx-1 border border-gray-300 rounded-sm  "
        pageLinkClassName="text-base text-gray-500"
        previousClassName="w-9 h-9 mr-1 flex items-center justify-center border border-gray-300 rounded-sm bg-gray-100"
        previousLinkClassName="text-gray-500"
        nextClassName="w-9 h-9 ml-1 flex items-center justify-center border border-gray-300 rounded-sm bg-gray-100"
        nextLinkClassName="text-gray-500"
        breakLabel={<span className='text-gray-500 text-lg'><BsThreeDots/></span>}
        breakClassName="w-9 h-9 -mx-1 flex items-center justify-center"
        breakLinkClassName=""
        containerClassName="relative flex items-center"
        activeClassName="ring-2 ring-red-400 border-0"
        activeLinkClassName='text-red-400 font-semibold'
      />
    </div>
  )
}
