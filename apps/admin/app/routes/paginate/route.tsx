import Paginate from '~/components/paginate';
import GoogleAutocomplete from "~/components/google-autocomplete";

export async function loader() {
  console.log('loader: PaginateHome')
  return null
}

export default function PaginateHome() {
  return (
    <>
      <Paginate/>
      <GoogleAutocomplete/>
    </>
  );
}
