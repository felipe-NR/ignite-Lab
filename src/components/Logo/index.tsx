import React from "react";
import { Desktop, Mobile } from "./svg/";
export function Logo({isDesktop}:Logo.Props): React.ReactElement {
  return(
    (!isDesktop ?    
    <header className="w-full flex box-border justify-items-center justify-center bg-gray-700  border-gray-600">
      <Mobile/>
    </header>
    :
    <header className="w-full  flex box-border justify-items-center justify-center bg-gray-700  border-gray-600 md:py-5 md:border-b">
      <Desktop/>
    </header>
    ))}  
  
namespace Logo {
  export interface Props {
    isDesktop?:boolean
  }
}