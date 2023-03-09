import React, {useEffect, useRef} from "react";
import {EditorView} from "@codemirror/view";
import {EditorState} from "@codemirror/state";
import Code from "../model/response/Code";

interface ChildProps {
    code: Code
}

const CodeEditor: React.FC<ChildProps> = (props) => {
    const edContainer = useRef<any>();
    const {code} = props;
    useEffect(() => {
        const state = EditorState.create({
            doc: code.content,
        });
        const view = new EditorView(
            {
                parent: edContainer.current,
                state,
            }
        );
        return () => {
            view.destroy();
        }
    }, []);
    return <div ref={edContainer}>

    </div>
}
export default CodeEditor;