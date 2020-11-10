import { data } from "./_data";

export default function handler(req, res) {
  const {
    query: { slug },
  } = req;

  res.status(200).json(data[slug]);
}
