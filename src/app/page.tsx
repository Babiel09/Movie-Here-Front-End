import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Info/>
        <Footer/>
      </main>
    </div>
  );
}
