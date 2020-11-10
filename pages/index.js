export default function Home() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <h1>Next Link + Image Bug</h1>

      <p>
        This repository reproduces a bug where we navigate from a page to other
        with `next/link` but the image (`next/image`) does not change the
        source.
      </p>

      <section>
        <h2>Steps to reproduce</h2>
        <ol>
          <li>
            Access this repository code sandbox:{" "}
            <a href="https://codesandbox.io/s/github/raulfdm/next-link-image-bug">
              https://codesandbox.io/s/github/raulfdm/next-link-image-bug
            </a>
          </li>
          <li>
            Navigate to route <a href="/blog/test1">/blog/test1</a>. There
            you'll find a top level nav with page 1 and page 2
          </li>
          <li>
            Then, click in Page 2 link.
            <strong>
              Note that the image just change the size but not the content
            </strong>
          </li>
          <li>
            Refresh the page with F5.{" "}
            <strong>Note that the image will now be different</strong>
          </li>
          <li>
            Now click in the Page 1.{" "}
            <strong>Note now the image will remain</strong>
          </li>
          <li>Refresh the page with F5 and see the first image</li>
        </ol>
      </section>

      <video src="/report.mp4" width={760} controls></video>
    </div>
  );
}
