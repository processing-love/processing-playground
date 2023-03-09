import Code from "./Code";
import ProjectType from "./ProjectType";

class Project {
    public name: String;
    public type: ProjectType;
    public currentIndex: number;

    public codes: Code[];


    constructor(name: String, type: ProjectType, currentIndex: number, codes: Code[]) {
        this.name = name;
        this.type = type;
        this.currentIndex = currentIndex;
        this.codes = codes;
    }
}


export default Project;