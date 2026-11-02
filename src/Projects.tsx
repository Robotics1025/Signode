import { useState } from "react";
import { a, Tag, type GalleryItem } from "./ui";
import "./projects.css";

const image = (name: string) => a("53:1081", name);
type Project = GalleryItem & {
  id: string;
  tags: string[];
  industry: string;
  background?: string;
  more?: string;
};
// Titles, image assignments and visible tags follow the supplied Projects frame.
const projectItems: Project[] = [
  {
    id: "mechanical-equipment",
    title: "Mechanical equipment and industrial installation",
    image: image("imgSignodeEngineeringProjectPhotograph1"),
    tags: ["Water & Sanitation"],
    industry: "Mechanical engineering",
    description: "From the Signode company project gallery · Uganda.",
  },
  {
    id: "structural-fabrication",
    title: "Structural fabrication and steelwork",
    image: image("imgSignodeEngineeringProjectPhotograph2"),
    tags: ["Structural Works", "Fabrication"],
    more: "+8",
    industry: "Structural engineering",
    description: "Structural works and fabrication · Uganda.",
  },
  {
    id: "plant-piping",
    title: "Industrial plant piping systems",
    image: image("imgDivImage"),
    tags: ["Industrial Piping"],
    industry: "Industrial engineering",
    description: "Industrial piping · Uganda.",
  },
  {
    id: "water-sanitation",
    title: "Water and sanitation infrastructure",
    image: image("imgDivImage1"),
    tags: ["Mechanical Works", "Equipment"],
    industry: "Water & sanitation",
    description: "From the Signode company project gallery · Uganda.",
  },
  {
    id: "industrial-equipment",
    title: "Industrial equipment installation",
    image: image("imgDivImage"),
    tags: ["Industrial Systems"],
    industry: "Industrial engineering",
    description: "Industrial systems · Uganda.",
  },
  {
    id: "site-works",
    title: "Engineering site works",
    image: image("imgSignodeEngineeringProjectPhotograph4"),
    background: image("imgDivImage2"),
    tags: ["Water Infrastructure"],
    industry: "Infrastructure",
    description: "Engineering work on site · Uganda.",
  },
  {
    id: "building-mechanical",
    title: "Building and mechanical services",
    image: image("imgDivImage3"),
    tags: ["Installation"],
    industry: "Mechanical engineering",
    description: "Building and mechanical services · Uganda.",
  },
  {
    id: "fabrication-installation",
    title: "Fabrication and installation delivery",
    image: image("imgDivImage4"),
    tags: ["Building Services"],
    industry: "Structural engineering",
    description: "Fabrication and installation · Uganda.",
  },
  {
    id: "tank-piping",
    title: "Tank and piping installation",
    image: image("imgDivImage5"),
    tags: ["Industrial Works", "Fabrication"],
    more: "+1",
    industry: "Industrial engineering",
    description: "Industrial works and fabrication · Uganda.",
  },
  {
    id: "structural-installation",
    title: "Structural installation works",
    image: image("imgSignodeEngineeringProjectPhotograph2"),
    tags: ["Piping Systems"],
    industry: "Structural engineering",
    description: "Structural installation works · Uganda.",
  },
  {
    id: "project-support",
    title: "Industrial project support",
    image: image("imgDivImage1"),
    tags: ["Structural Steel"],
    industry: "Industrial engineering",
    description: "Industrial project support · Uganda.",
  },
  {
    id: "facility-installation",
    title: "Industrial piping and facility installation",
    image: image("imgDivImage3"),
    tags: ["Project Delivery"],
    industry: "Industrial engineering",
    description:
      "Practical engineering and project delivery, from fabrication to on-site installation.",
  },
];
const featured = [
  {
    ...projectItems[11],
    image: image("imgSignodeEngineeringProjectPhotograph1"),
    tag: "Industrial Engineering",
  },
  { ...projectItems[1], tag: "Structural Works" },
  { ...projectItems[3], tag: "Water & Sanitation" },
];
function Mask({
  asset,
  className = "",
}: {
  asset: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`project-icon ${className}`}
      style={{ maskImage: `url("${image(asset)}")` }}
    />
  );
}
export function Projects({
  openGallery,
}: {
  openGallery: (item: GalleryItem) => void;
}) {
  const [slide, setSlide] = useState(0);
  const [industry, setIndustry] = useState("");
  const [focus, setFocus] = useState("");
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = projectItems.filter(
    (item) =>
      (!industry || item.industry === industry) &&
      (!focus || item.tags.includes(focus)) &&
      (!location || location === "Uganda") &&
      `${item.title} ${item.tags.join(" ")} ${item.industry} Uganda`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const visible =
    sort === "featured"
      ? filtered
      : [...filtered].sort((x, y) =>
          sort === "asc"
            ? x.title.localeCompare(y.title)
            : y.title.localeCompare(x.title),
        );
  const active = Boolean(industry || focus || location || query);
  function reset() {
    setIndustry("");
    setFocus("");
    setLocation("");
    setQuery("");
    setSort("featured");
  }
  return (
    <div className="projects-page navy">
      <section className="container projects-intro">
        <h1>Engineering projects delivered with purpose</h1>
        <p>
          Explore Signode Engineering Services Ltd projects in industrial
          piping, structural fabrication, mechanical installations and water
          infrastructure across Uganda.
        </p>
      </section>
      <section
        className="container projects-featured"
        aria-label="Featured projects"
      >
        <div className="featured-layout">
          <div className="featured-copy">
            <h2>{featured[slide].title}</h2>
            <p>{featured[slide].description}</p>
            <div className="featured-actions">
              <button
                className="text-link"
                onClick={() => openGallery(featured[slide])}
              >
                View Project{" "}
                <Mask asset="imgAfter3" className="project-link-arrow" />
              </button>
              <Tag>{featured[slide].tag}</Tag>
            </div>
          </div>
          <button
            className="featured-image"
            aria-label={`View ${featured[slide].title}`}
            onClick={() => openGallery(featured[slide])}
          >
            <img
              className="featured-image-backdrop"
              src={featured[slide].image}
              alt=""
              aria-hidden="true"
            />
            <img src={featured[slide].image} alt={featured[slide].title} />
          </button>
        </div>
        <div className="controls">
          <div className="dots" aria-label="Choose featured project">
            {featured.map((item, i) => (
              <button
                key={item.id}
                className={slide === i ? "active" : ""}
                aria-label={`Featured project ${i + 1}`}
                aria-pressed={slide === i}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <div className="arrow-buttons">
            <button
              aria-label="Previous featured project"
              onClick={() => setSlide((slide + 2) % 3)}
            >
              <Mask asset="imgAfter" />
            </button>
            <button
              aria-label="Next featured project"
              onClick={() => setSlide((slide + 1) % 3)}
            >
              <Mask asset="imgAfter4" />
            </button>
          </div>
        </div>
      </section>
      <section
        className="container projects-directory"
        aria-label="All projects"
        id="project-gallery"
      >
        <div className="project-filters">
          <div className="filter-row">
            <span className="filter-label">Filter by</span>
            <div className="filter-selects">
              <select
                aria-label="Filter by industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="">Industry</option>
                {[...new Set(projectItems.map((item) => item.industry))].map(
                  (value) => (
                    <option key={value}>{value}</option>
                  ),
                )}
              </select>
              <select
                aria-label="Filter by focus"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
              >
                <option value="">Focus</option>
                {[...new Set(projectItems.flatMap((item) => item.tags))].map(
                  (value) => (
                    <option key={value}>{value}</option>
                  ),
                )}
              </select>
              <select
                aria-label="Filter by location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Location</option>
                <option>Uganda</option>
              </select>
            </div>
            <input
              type="search"
              aria-label="Search projects"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="filter-summary">
            <div>
              {active && (
                <button className="clear-filters" onClick={reset}>
                  Clear filters
                </button>
              )}
            </div>
            <p role="status" aria-live="polite">
              {visible.length} {active ? "matching" : "featured"} project
              {visible.length === 1 ? "" : "s"}
            </p>
            <select
              className="project-sort"
              aria-label="Sort projects"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured order</option>
              <option value="asc">Title A–Z</option>
              <option value="desc">Title Z–A</option>
            </select>
          </div>
        </div>
        <div className="projects-catalog">
          {visible.map((item) => (
            <article className="catalog-card" id={item.id} key={item.id}>
              <button
                className="catalog-image"
                aria-label={`View ${item.title}`}
                onClick={() => openGallery(item)}
              >
                {item.background && (
                  <img
                    className="catalog-background"
                    src={item.background}
                    alt=""
                  />
                )}
                <img src={item.image} alt={item.title} />
                <span>Uganda</span>
              </button>
              <div className="catalog-content">
                <h2>
                  <button onClick={() => openGallery(item)}>
                    {item.title}
                  </button>
                </h2>
                <div className="catalog-tags">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                  {item.more && <span className="tag">{item.more}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        {!visible.length && (
          <div className="empty-projects">
            <h2>No matching projects</h2>
            <p>
              Try another search or clear the filters to see all 12 projects.
            </p>
            <button className="button button-light" onClick={reset}>
              Show all projects
            </button>
          </div>
        )}
        <nav className="project-pagination" aria-label="Project pages">
          <button aria-label="Previous page" disabled>
            <Mask asset="imgAfter" />
          </button>
          <button aria-current="page" aria-label="Page 1">
            1
          </button>
          <button aria-label="Next page" disabled>
            <Mask asset="imgAfter4" />
          </button>
        </nav>
      </section>
    </div>
  );
}
