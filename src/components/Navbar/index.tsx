import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Add", href: "/add" },
    { name: "View", href: "view" },
    {
      name: "Github",
      href: "https://github.com/prince-bansal/next-starter-template",
    },
  ];

  return (
    <div className="flex bg-gray-200 border-b border-b-gray-300 h-14 items-center ">
      <div className="w-[80%] m-auto flex justify-between items-center gap-5">
        <p className="cursor-pointer font-medium">Next Starter Template</p>
        <div className="flex gap-5">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                target={
                  item.href.startsWith("https") || item.href.startsWith("www")
                    ? "_blank"
                    : ""
                }
                href={item.href}
                className="text-sm cursor-pointer hover:text-black text-gray-700"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
