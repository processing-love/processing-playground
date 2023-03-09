import React, {useState} from 'react';
import './App.css';
import Project from "./model/response/Project";
import ProjectType from "./model/response/ProjectType";
import Code from "./model/response/Code";
import {App, Button, Navbar, Page} from "konsta/react";

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
        <App theme="material">
            <Page>
                <Navbar title="my app"></Navbar>
            </Page>
        </App>
    );
    return (
        <div className="App">
            <div className="Header">
                <ul>
                    {
                        project.codes.map((code, index, array) => {
                            console.log('peter item ' + index)
                            return <li key={index}>{code.name}</li>
                        })
                    }
                </ul>
                <button onClick={() => newCode()}>添加</button>
            </div>
            <div className="Content">
                {
                    project.codes[project.currentIndex].content
                }
            </div>
        </div>
    );
}

export default MyApp;
