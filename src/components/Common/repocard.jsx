import { classNames } from "./common";
import config from "../../../config";
import { ChildTransition } from "./transition";



const RepoCard = ({
  index,
  repodetails,
  BottomIcons,
  InfoIcon
}) => {
  return (
    <ChildTransition delay={index * 100}>
      <div className="flex gap-2 text-sm mb-4">
        <div className="shrink-0">
          <img
            alt="profile picture"
            src={config.github_icon}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>

        <div className="flex gap-2 flex-col border p-2 w-full rounded-b rounded-tr border-gray-light">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1">
              <a
                href={repodetails.htmlUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium after:bg-black"
              >
                {repodetails.name}
              </a>
              <a
                href={repodetails.htmlUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-dark after:bg-gray"
              >
                @{repodetails.htmlUrl.split("/").pop()}
              </a>
              {/* <BsDot className="-mx-1 text-gray-dark" /> */}
              {/* <div className="text-gray-dark">{repodetails.description}</div> */}
            </div>
            <div className="flex items-center gap-1">
                <div className="text-gray-dark">{InfoIcon}</div>
                <div className="text-gray-dark">{repodetails.language}</div>
            </div>
          </div>

          <div className="leading-6 whitespace-pre-line">{repodetails.description}</div>
          <div className="flex space-x-2 divide-x divide-gray-light">
            {repodetails.details.map((detail, index) => (
              <div
                key={index}
                className={classNames("flex items-center gap-1", index !== 0 ? "pl-2" : "")}
              >
                <div className="text-gray">{BottomIcons[index].Icon}</div>
                <div className="text-gray-dark">{detail.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </ChildTransition>
  );
};

export default RepoCard;