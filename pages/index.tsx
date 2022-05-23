import { Header } from "../components/custom/header";
import { Photo } from "../components/custom/photo";
import { Flex } from "../components/primitives/box";

const gallery = [
  [
    { url: "https://live.staticflickr.com/65535/51379068890_cbf16254e6_k.jpg" },
    { url: "https://i.imgur.com/wKUuXjY.jpeg" },
    { url: "https://i.imgur.com/ShmrWvg.jpeg" },
  ],
  [
    { url: "https://i.imgur.com/wKUuXjY.jpeg" },
    { url: "https://i.imgur.com/2kbPALE.jpeg" },
    { url: "https://i.imgur.com/9iRd0Ut.jpeg" },
    { url: "https://i.imgur.com/FEnsxDy.jpeg" },
  ],
];

export default function Home() {
  return (
    <div>
      <Flex css={{ padding: 40, alignItems: "flex-start", flex: 0.5 }}>
        <Header />
        <Flex css={{ gap: 12 }}>
          {gallery.map((row) => (
            <Flex
              key={row.length}
              direction="row"
              css={{ maxHeight: "630", gap: 12, flexWrap: "wrap" }}
            >
              {row.map(({ url }) => (
                <Photo url={url} key={url} />
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
