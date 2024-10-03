import { AsideHome } from "@/components/shared/asideHome";
import { Container } from "@/components/shared/container";
import { GridMap } from "@/components/shared/GridMap/gridMap";

export default function Home() {
  return (
    <Container className="max-w-full flex justify-between items-center w-full h-full grow">
      <GridMap />
      <AsideHome />
    </Container>
  );
}
