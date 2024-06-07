import Container from "@/Ui/container";
import Navbar from "./navbar";
import bg_image from "@/images/main-header/BG Hero.png" 
import SocIcons from "@/Ui/socIcons";
import MainArea from "./main-area";
import TextArea from "@/components/text-area";
import ScrollArea from "./scrollArea";

export default function MianHeader() {
    // let bg_css = 
  return (
   <div className="w-full h-[1200px]">
    <Container>
        <Navbar/>
        <MainArea>
            <SocIcons/>
            <TextArea/>
            <ScrollArea/>
        </MainArea>
    </Container>
   </div>
  )
}
