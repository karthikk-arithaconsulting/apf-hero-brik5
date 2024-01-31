/* eslint-disable react/prop-types */
import {Title, Text,Button} from "@apf/core";
import React from "react";
import "./HeroBrikFive.css";
import "@apf/core/dist/style.css";


function HeroBrikFive(props){
    const imageObject = props.data.data.find(item => item.content.type === "image");
    const titleObject = props.data.data.find(item => item.content.type === "title");
    const textObject = props.data.data.find(item => item.content.type === "text");
    const buttonObject = props.data.data.find(item => item.content.type === "button");
    

    return(
        <div className="Hero-container">
            <div className="Hero-content-container">
                <div className="Hero-child-content-container">
                    <Title c={titleObject?.style?.font?.color} fz={titleObject?.style?.font?.size}  style={{ fontFamily: titleObject?.style?.font?.family }} fw={titleObject?.style?.font?.weight} className="Hero-Title-div">{titleObject?.content?.value}</Title>
                    <Text c={textObject?.style?.font.color} fz={textObject?.style?.font?.size} style={{ fontFamily: textObject?.style?.font?.family }} fs={textObject?.style?.font?.style} fw={textObject?.style?.font?.weight} className="Hero-Text-div">{textObject?.content?.value}</Text>
                    <Button style={{ color: buttonObject?.style?.font.color, backgroundColor: buttonObject?.style?.backgroundColor ,fontFamily: buttonObject?.style.font.family}}  size={buttonObject?.style.font.size} variant="filled" radius={buttonObject?.style?.radius} className="Hero-Button-div">{buttonObject?.content.value}</Button>
                </div>
            </div>
            <div className="Hero-image-container">
                <img src={imageObject?.content?.link} className="ChildImageTag"></img>
            </div>
        </div>
    );
}
export default HeroBrikFive;