import { libs } from "@/lib/constants";
import Link from "next/link";

// contains installed packages for reference
export default function Home() {
  return (
    <div>
      <p className="text-2xl/7 font-semibold mb-5">
        Starter template for Next Ts
      </p>
      <div>
        {libs.map((lib) => (
          <div key={lib.id} className="mb-3">
            <p className="text-black text-lg font-medium">
              {lib.id}. {lib.title}
              <span className="text-blue-600 ml-1 cursor-pointer underline text-sm">
                <Link target="_blank" href={lib.link}>
                  Visit
                </Link>
              </span>
            </p>
            <ul className="list-disc ml-10">
              {lib.features.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
