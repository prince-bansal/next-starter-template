import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { name: "Dashboard", href: "/", current: true },
    { name: "View Todos", href: "view", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  return (
    <div className="flex bg-gray-200 border-b border-b-gray-300 h-14 items-center ">
      <div className="w-[80%] m-auto flex justify-end items-center gap-5">
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className="text-sm cursor-pointer hover:text-black text-gray-700"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
