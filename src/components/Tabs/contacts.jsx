import { useRef } from "react";
import ContactCard from "../Common/contactcard";
import config from "../../../config";
import Container from "../Common/container";
import ContactContainer from "../Common/contactcontainer";
import { RootTransition, ChildTransition } from "../Common/transition";
import Button from "../Common/normal_button";

export default function Contact() {
  const contactRef = useRef(null);
  return (
    <div className="flex gap-4 p-4 bg-gray-100 h-screen overflow-hidden">
      <div className="flex-1 overflow-auto">
        <ContactContainer
          reference={contactRef}
          tabNames={["Information"]}
          childdetails={[<ContactTab key={0} contacts={config.contact_info} />]}
        />
      </div>
      <div className="w-[40%] text-sm flex flex-col gap-4 h-fit sticky top-0">
        <Container title="Where to follow me">
          <RootTransition className="flex flex-col gap-4">
            <div>
              {config.social_links.map((contact, index) => (
                <ChildTransition
                  className="flex items-center justify-between"
                  delay={index * 10}
                  key={contact.name}
                >
                  <div className="flex items-center gap-2">
                    <div className="shrink-0">
                      <img
                        alt="profile picture"
                        src={contact.logo}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <div className="font-medium">{contact.name}</div>
                        <img
                          alt="verified badge"
                          src={config.verified_icon}
                          width={12}
                          height={12}
                          className="rounded-full"
                        />
                      </div>
                      <div className="font-light text-gray-dark">{contact.username}</div>
                    </div>
                  </div>
                  <Button
                    color="black"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    href={contact.name === "E-Mail" ? `mailto:${contact.href}` : contact.href}
                  >
                    {contact.name === "E-Mail" ? "Mail" : "Follow"}
                  </Button>
                </ChildTransition>
              ))}
            </div>
          </RootTransition>
        </Container>
      </div>
    </div>
  );
}

const ContactTab = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          contactdetails={{
            image: contact.image,
            icon: contact.icon,
            blogName: contact.blogName,
            link: contact.link,
            published: contact.published,
            title: contact.title,
            numbers: contact.numbers,
          }}
          cardindex={index}
          InfoIcon={<contact.InfoIcon size={16} />}
          BottomIcons={[
            {
              Icon: <contact.BottomIcons size={16} />,
            },
          ]}
        />
      ))}
    </div>
  );
};
