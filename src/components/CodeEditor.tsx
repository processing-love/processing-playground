import Code from "../model/response/Code";
import ReactCodeMirror from "@uiw/react-codemirror";

interface ChildProps {
    code: Code
}

const CodeEditor: React.FC<ChildProps> = (props) => {
    const {code} = props;
    return <ReactCodeMirror
        height="200px"
        value={code.content}>

    </ReactCodeMirror>
}
export default CodeEditor;