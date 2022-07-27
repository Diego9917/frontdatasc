import { useEffect,useState } from "react";
import "../index.css";


import styled from "styled-components";

const CarouselImg = styled.img`
  width:100% ;
  opacity: 0;
  transition: 2s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  
  margin-left: 10px;
  margin-right:10px ;
  margin-bottom:10px ;
  height: 600px;
  padding: 5px ;
  padding-left:0 ;
  padding-right:0;
  justify-content: absolute;
  direction: row-reverse;
  align-content: center; 
  display: flex;
  
`;





export default function Carousel(props){
   
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
          const interval = setInterval(() => {
            selectNewImage(selectedIndex, props.images);
          }, 1000);
          return () => clearInterval(interval);
        }
      });
    
    const selectNewImage = (index, images, next = true ) => {
        setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
        }, 500);
    };

    const previo = () => {
        selectNewImage(selectedIndex, props.images, false);
    }

    const next = ()=> {
        selectNewImage(selectedIndex, props.images);
    }
    return(
        <CarouselButtonContainer>
          <CarouselImg  src={selectedImage} className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}/>
        </CarouselButtonContainer>
        
    );
}