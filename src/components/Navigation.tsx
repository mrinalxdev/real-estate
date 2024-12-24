import { Button } from "./ui/button";

const Navigation = () => {
    return ( 
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-12">
                <a href="/" className="text-white text-2xl font-bold">🏠</a>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-white/90 hover:text-white transition">Homes</a>
                    <a href="#" className="text-white/90 hover:text-white transition">Cities</a>
                    <a href="#" className="text-white/90 hover:text-white transition">Policy</a>
                </div>  
            </div>
            <div className="flex items-center gap-4">
                <Button variant="outline" className="text-white bg-transparent">Log In</Button>
                <Button className="bg-white text-black hover:bg-white/90">Sign Up</Button>
            </div>
        </nav>
     );
}
 
export default Navigation;