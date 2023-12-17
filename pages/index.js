import HeatMap from "@/components/HeatMap";
import "react-select-search/style.css";
import Layout from "@/components/Layout";
export default function Home() {
  return <>Hi</>;
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
