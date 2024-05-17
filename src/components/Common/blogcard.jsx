import { BsDot } from "react-icons/bs";
import { ChildTransition } from "./transition";
import { classNames } from "./common";




const BlogCard = ({
  cardindex,
  blogdetails,
  InfoIcon,
  BottomIcons
}) => {
  return (
    <ChildTransition delay={cardindex * 100}>
      <div className="flex gap-2 text-sm mb-4">
        <div className="shrink-0">
          <img
            alt="profile picture"
            src={blogdetails.icon}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-2 flex-col border p-2 w-full rounded-b rounded-tr border-gray-light">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1">
              <a
                href={blogdetails.link}
                target="_blank"
                rel="noreferrer"
                className="font-medium after:bg-black"
              >
                {blogdetails.blogName}
              </a>
              <a
                href={blogdetails.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-dark after:bg-gray"
              >
                @{blogdetails.blogName}
              </a>
            </div>

            <div className="flex items-center gap-1">
              <div className="text-gray-dark">{InfoIcon}</div>
              <div className="text-gray-dark">{blogdetails.published}</div>
            </div>
          </div>

          <div className="leading-6 whitespace-pre-line">{blogdetails.title}</div>
          <div key={cardindex} className="relative h-25 w-full ">
              <img
                style={{
                  objectFit: "cover",
                }}
                alt=""
                className="rounded-md"
                src={blogdetails.image}
              />
        </div>
          
          {
            blogdetails.numbers && (
                <div className="flex space-x-2 divide-x divide-gray-light">
            {blogdetails.numbers.map((detail, index) => (
              <div
                key={index}
                className={classNames("flex items-center gap-1", index !== 0 ? "pl-2" : "")}
              >
                <div className="text-gray">{BottomIcons[index].Icon}</div>
                <div className="text-gray-dark">{detail.data}</div>
              </div>
            ))}
          </div>
            )
          }
        </div>
      </div>
      </ChildTransition>
  );
};

export default BlogCard;