import { IconType } from "react-icons/lib";

export interface ISkills{
    id:number,
    icon:IconType,
    title:string,
    createdAt:Date,
}

export interface ISkillsProps{
    skill:ISkills
}