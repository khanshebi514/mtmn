import Container from "@/Ui/container";
import Navbar from "./navbar";
import bg_image from "@/images/main-header/bg-image-header.jpg" 
import SocIcons from "@/Ui/socIcons";
import MainArea from "./main-area";
import TextArea from "@/components/text-area";
import ScrollArea from "./scrollArea";
import MenuState from "./menu-state";

export default function MianHeader() {
  return (
   <div className="w-full h-[110vh] flex flex-col flex-wrap">
    <Container>
        <MainArea>
            <SocIcons/>
            <TextArea/>
            <ScrollArea/>
        </MainArea>
    </Container>
   </div>
  )
}
