import { ModalPost as ModalPostType } from "@/types/post";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import DOMPurify from "isomorphic-dompurify";

export const postIcons = {
  instagram: <FaInstagram size={15} />,
  default: <FaLink size={15} />,
};

type ModalPostProps = ModalPostType;

export function ModalPost({
  title,
  cover,
  content,
  links,
  createdAt,
}: ModalPostProps) {
  function sanitize(html: string) {
    return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  }
  return (
    <article className="flex lg:flex-row flex-col items-center justify-center bg-white h-[90vh] w-full md:h-[700px] my-5 overflow-auto rounded-lg">
      <div className="flex-1 w-full md:w-[500px] h-[300px] md:h-[700px]">
        <img
          src={cover}
          alt={title}
          className="w-full md:h-[700px] h-full object-fill"
        />
      </div>
      <div className="w-full md:px-1 px-10 md:w-[350px] h-full flex flex-col items-start justify-between gap-2">
        <div className="w-full flex-1 flex flex-col">
          <header className="font-bold text-xl py-5 border-b">
            <h3 className=" px-2">{title}</h3>
          </header>
          <p
            className="pt-5 px-2 text-lg md:text-base"
            dangerouslySetInnerHTML={{ __html: sanitize(content) }}
          />
        </div>
        <div className="w-full flex flex-wrap gap-2 items-center justify-center md:justify-end px-2 pt-5 md:py-0">
          {links.map((link) => (
            <a
              key={link.url}
              target="_blank"
              rel="noopener noreferrer"
              href={link.url}
              className="border p-2 rounded flex items-center gap-1 "
            >
              {postIcons[link.type ? link.type : "default"]} {link.type}
            </a>
          ))}
        </div>
        <footer className="border-t w-full">
          <p className="text-right font-light text-sm text-zinc-900 px-2 py-2">
            publicado: {createdAt}
          </p>
        </footer>
      </div>
    </article>
  );
}
