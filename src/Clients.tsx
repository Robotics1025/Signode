import "./company.css";
import { assetPath } from "./ui";

const clients = [
  { name: "Bidco Uganda Limited", image: assetPath("/assets/clients/bidco-uganda.png") },
  { name: "Hema packaged drinking water", image: assetPath("/assets/clients/hema.png") },
  { name: "Kakira Sugar", image: assetPath("/assets/clients/kakira-sugar.png") },
  { name: "Uganda Batteries", image: assetPath("/assets/clients/uganda-batteries.png") },
  { name: "Movit", image: assetPath("/assets/clients/movit.png") },
  { name: "Nile Breweries", image: assetPath("/assets/clients/nile-breweries.png") },
];

export function Clients() {
  return (
    <section
      className="clients-section"
      id="clients"
      aria-labelledby="clients-heading"
    >
      <div className="container">
        <div className="clients-intro">
          <div>
            <p className="eyebrow">Working together</p>
            <h2 id="clients-heading">Our clients</h2>
          </div>
          <p>Organisations featured in our company profile.</p>
        </div>
        <ul
          className="client-logos"
          aria-label="Clients featured in the Signode company profile"
        >
          {clients.map((client) => (
            <li key={client.name}>
              <img src={client.image} alt={client.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
