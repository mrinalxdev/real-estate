import { Button } from "./ui/button";

const SearchBar = () => {
    return ( 
        <div className="flex items-center bg-white rounded-full p-2 w-full max-w-md">
            <input placeholder="Search in properties ..." type="text" className="flex-1 px-4 py-2 bg-transparent outline-none" />
            <Button className="rounded-full bg-lime-400 hover:bg-lime-600 text-accent-foreground">
                →
            </Button>
        </div>
     );
}
 
export default SearchBar;