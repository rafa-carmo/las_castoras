import { Button } from "../Global/button";

interface CardProps {
  title: string;
  description: string;
  cover: string;
}

export function Card({ cover, description, title }: CardProps) {
  return (
    <article className="w-full md:w-[42rem] flex items-center justify-center gap-3 px-2 md:px-0">
      <div className="w-48 h-48 overflow-hidden">
        <img src={cover} alt={title} className="object-contain" />
      </div>
      <div className="w-2/4 h-48 flex flex-col gap-3">
        <header>
          <h3 className="text-lg font-bold font-hero line-clamp-2 cursor-default">
            {title}
          </h3>
        </header>
        <p className="line-clamp-3 cursor-default">{description}</p>
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-2/4 flex justify-center">
            <Button size="sm" variant="ghost">
              Veja Mais
            </Button>
          </div>
        </div>
      </div>
      <footer>
        <span className="sr-only">
          <time dateTime="2015-05-16 19:00" />
        </span>
      </footer>
    </article>
  );
}
