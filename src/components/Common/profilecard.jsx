import { ChildTransition } from "./transition";
import { classNames } from "./common";
import { BsDot } from "react-icons/bs";




const ProfileCard = ({
  cardindex,
  profiledetails,
  InfoIcon,
  BottomIcons
}) => {
  return (
    <ChildTransition delay={cardindex * 100}>
      <div className="flex gap-2 text-sm mb-4">
        <div className="shrink-0">
          <img
            alt="profile picture"
            src={profiledetails.icon}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-2 flex-col border p-2 w-full rounded-b rounded-tr border-gray-light">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1">
              <a
                href={profiledetails.link}
                target="_blank"
                rel="noreferrer"
                className="font-medium after:bg-black"
              >
                {profiledetails.name}
              </a>
              {profiledetails.verified && (
                <img
                  alt="verified bage"
                  src={profiledetails.verified}
                  width={12}
                  height={12}
                  className="rounded-full"
                />
              )}
              <a
                href={profiledetails.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-dark after:bg-gray"
              >
                @{profiledetails.name}
              </a>
              {profiledetails.description && (
                <>
                  <BsDot className="-mx-1 text-gray-dark" />
                  <div className="text-gray-dark">{profiledetails.description}</div>
                </>
              )}
            </div>

            <div className="flex items-center gap-1">
              <div className="text-gray-dark">{InfoIcon}</div>
              <div className="text-gray-dark">{profiledetails.published}</div>
            </div>
          </div>
          <div className="leading-6 whitespace-pre-line">{profiledetails.text}</div>
          {/* <div key={cardindex} className="relative h-25 w-full ">
              <img
                style={{
                  objectFit: "cover",
                }}
                alt=""
                className="rounded-md"
                src={profiledetails.image}
              />
        </div> */}
          
          {
            profiledetails.numbers && (
                <div className="flex space-x-2 divide-x divide-gray-light">
            {profiledetails.numbers.map((detail, index) => (
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

export default ProfileCard;