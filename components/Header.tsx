import Image from "next/image";
import {MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="bg-black">
      <Image
        src="/taskit-logo.png"
        alt="taskIt Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />

      <div>
        <form className="flex">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
          <input type='text' placeholder="Search"/>
          <button hidden>Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
