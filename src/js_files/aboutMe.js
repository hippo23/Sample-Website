import { createParagraph, createButton, createListItem } from "./misc.js";
import icon from "./../icon.png";

const createBioHeader = (heading) => {
  const header = document.createElement("h3");
  header.setAttribute("id", "work-title");
  header.textContent = heading;

  return header;
};

const createBioElement = () => {
  const bioElement = document.createElement("div");
  bioElement.classList.add("info-container");

  return bioElement;
};

const createBioSeparator = () => {
  const separator = document.createElement("hr");
  separator.classList.add("info-hr");

  return separator;
};

const createBioParagraph = (heading, paragraphText, buttonText) => {
  const bioElement = createBioElement();
  const header = createBioHeader(heading);
  const separator = createBioSeparator();
  const paragraph = createParagraph(paragraphText);
  const button = createButton(buttonText);

  header.textContent = heading;

  paragraph.setAttribute("id", "bio");

  bioElement.appendChild(header);
  header.appendChild(separator);
  bioElement.appendChild(paragraph);
  bioElement.appendChild(button);

  return bioElement;
};

const createTimeline = (heading, buttonText, listItemsText) => {
  const bioElement = createBioElement();
  const header = createBioHeader(heading);
  const separator = createBioSeparator();
  const button = createButton(buttonText);
  const list = document.createElement("ul");

  listItemsText.forEach((x) => {
    const temp = createListItem(x, "javascript:void(0)");
    list.appendChild(temp);
  });

  list.setAttribute("id", "timeline");

  bioElement.appendChild(header);
  header.appendChild(separator);
  bioElement.appendChild(list);
  bioElement.appendChild(button);

  return bioElement;
};

const createSocial = (heading, buttonText) => {
  const bioElement = createBioElement();
  const header = createBioHeader(heading);
  const button = createButton(buttonText);
  const list = document.createElement("ul");
  const separator = createBioSeparator();

  const facebook = createListItem(
    " Facebook",
    "https://www.facebook.com/profile.php?id=100016616953453"
  );
  const instagram = createListItem(
    " Instagram",
    "https://www.instagram.com/simonmagleo/"
  );
  const twitter = createListItem(" Twitter", "https://twitter.com/realsbam");
  const github = createListItem(" Github", "https://github.com/hippo23");
  const listItems = [facebook, instagram, twitter, github];

  list.setAttribute("id", "social");

  facebook.setAttribute("id", "facebook");
  instagram.setAttribute("id", "instagram");
  twitter.setAttribute("id", "twitter");
  github.setAttribute("id", "github");

  listItems.forEach((x) => {
    x.classList.add("media");
    x.firstChild.classList.add("media-link");
    list.appendChild(x);
  });

  bioElement.appendChild(header);
  header.appendChild(separator);
  bioElement.appendChild(list);
  bioElement.appendChild(button);

  return bioElement;
};

const createProfile = (name, description, iconPath) => {
  const bioElement = createBioElement();

  const profile = document.createElement("div");
  profile.classList.add("bio");

  const profileName = createParagraph(name);
  profileName.setAttribute("id", "title");

  const profileDescription = createParagraph(description);
  profileDescription.setAttribute("id", "description");

  const icon = new Image();
  icon.src = iconPath;
  icon.classList.add("icon");

  profile.appendChild(profileName);
  profile.appendChild(profileDescription);

  bioElement.appendChild(profile);
  bioElement.appendChild(icon);

  return bioElement;
};

const createBio = () => {
  const bioContainer = document.createElement("div");
  const profile = createProfile(
    "Simon Magleo",
    "Anime / Coding / Physics",
    icon
  );
  const greeting = document.createElement("div");
  const introduction = createBioParagraph(
    "An Intro",
    "Hallo! This is my homepage, and it's a sort of draft for more polished websites that I plan to make going forward. I've technically been semi-familiar with HTML, CSS, and JavaScript for a few years now, but have managed to forget nnearly everything that I learned :). Nevertheless, with too much freetime and a drive to do something cool, I've finally decided to take coding seriously! Currently and simultaneously doing CS50 alongside The Odin Project, I can hoepfully come out of this journey just a bit closer to a normal developer!",
    "My Portfolio"
  );
  const hobbies = createBioParagraph(
    "My Hobbies",
    "Anime, Coding, Basketball, Football, Singing, Weightlifting, Music Production, and so much more!",
    "Documentation"
  );

  const timeline = createTimeline("My Life So Far", "Contact Me", [
    "2005 --> Was born in Metro Manila",
    "2017 --> Started highschool in PSHS-CARC",
    "2022 - Present --> Currently finishing my 11th year in PSHS-CARC",
  ]);

  const social = createSocial("My Social Media", "More About Me");

  greeting.textContent = "Some random who thinks that they can code...";

  greeting.classList.add("greeting");
  introduction.setAttribute("id", "work");
  hobbies.setAttribute("id", "work");
  timeline.setAttribute("id", "work");
  social.setAttribute("id", "work");

  bioContainer.classList.add("info");

  bioContainer.appendChild(profile);
  bioContainer.appendChild(greeting);
  bioContainer.appendChild(introduction);
  bioContainer.appendChild(hobbies);
  bioContainer.appendChild(timeline);
  bioContainer.appendChild(social);

  return bioContainer;
};

const loadBio = () => {
  const bioContainer = createBio();
  const container = document.querySelector(".container");
  container.appendChild(bioContainer);
};

export default loadBio;
