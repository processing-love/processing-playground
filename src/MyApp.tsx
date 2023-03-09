import React, {useState} from 'react';
import './MyApp.css';
import Project from "./model/response/Project";
import ProjectType from "./model/response/ProjectType";
import Code from "./model/response/Code";
import {App, Button, Navbar, Page} from "konsta/react";
import CodeEditor from "./components/CodeEditor";

var index = 1

function MyApp() {
    const initProject = new Project('demo', ProjectType.processing, 0, [
        new Code("text " + index, "hello world " + index)
    ]);
    const [project, setProject] = useState(initProject);

    const newCode = function () {
        index++;
        project.codes.push(new Code("title" + index, "hello world " + index));
        project.currentIndex = project.codes.length - 1;
        setProject(new Project(project.name, project.type, project.currentIndex, project.codes));
    }
    console.log("peter refresh ui ", project);
    return (
        <div className="App">
            <div className="Header">
                <ul>
                    {
                        project.codes.map((code, index, array) => {
                            console.log('peter item ' + index)
                            return <li key={index}>
                                <div className={project.currentIndex == index ? "selectTab" : "unSelectTab"}>
                                    {code.name}
                                </div>
                            </li>
                        })
                    }
                </ul>
                <button onClick={() => newCode()}>添加</button>
            </div>
            <div className="Content">
                <CodeEditor code={project.codes[project.currentIndex]}/>
            </div>
        </div>
    );
}

export default MyApp;
